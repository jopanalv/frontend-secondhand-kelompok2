import React, { useCallback, useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCity, updateProfile } from "../redux/action/profileAction";
import "../assets/style.css"

export default function Dropdown({options, label, value, onChange}) {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("")
  const [open, setOpen] = useState(false);
  const ref = useRef(null)

  const serializedData = localStorage.getItem("user");
  let user = JSON.parse(serializedData);
  const [city, setCity] = useState(`${user.data.Profile.city ?? ""}`);

  useEffect(() => {
    ["click", "touchend"].forEach(e => {
      document.addEventListener(e, toggle);
    });
    return() => 
    ["click", "touchend"].forEach(e => {
      document.removeEventListener("click", toggle);
  })
    dispatch(getCity());
  }, []);

  useEffect(() => {
    dispatch(getCity());
  }, []);

  const { cityResult } = useSelector((state) => state.profile);


  function toggle(e){
    setOpen(e && e.target === ref.current);
  }

  function filter(cityResult){
    return cityResult.filter(
      (city) =>
      city[label].toLowerCase().indexOf(query.toLowerCase()) > -1
      );
  }
  function displayValue(){
    if(query.length > 0) return query
    if (value) return value[label];
    return "";
  }

  function selectedOption(city){
    setQuery("")
    onChange(city);
    setOpen(false);
  }

  return (
    <div className="row mb-3">
    <label className="form-label">Kota*</label>
    {/* <select
      className="form-control"
      name="city"
      value={city}
      onChange={(e) => setCity(e.target.value)}
    > */}
    <div className="dropdown">
      <div className="control">
        <div className="selected-value">
          {/* {value ? value.nama : "Select Country ..."} */}
          <input type="text"
          ref={ref}
          placeholder={value ? value[label] : "Select Country ..."}
          value={displayValue()}
          onChange={e => {
            setQuery(e.target.value)
            onChange(null)
          }}
          onClick={toggle}
          onTouchEnd={toggle}
          />
        </div>
        <div className={`arrrow ${open ? "open" : null}`} />
      </div>
      <div className={`options ${open ? "open" : null}`}>
      {filter(cityResult).map((city) => (
                      <div className={`option ${value === city ? "selected" : null}`}
                      // key={option.id} value={`${city.nama}`} 
                      onClick={() => selectedOption(city)}
                      onTouchEnd={() => selectedOption(city)}
                      >
                        {city[label]}
                      </div>
                    ))}
      </div>
    </div>
    </div>
  )
}
