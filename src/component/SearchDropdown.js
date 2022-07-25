import React, { useCallback, useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCity, updateProfile } from "../redux/action/profileAction";

export default function SearchDropdown(cityResult) {
  const dispatch = useDispatch();

  const serializedData = localStorage.getItem("user");
  let user = JSON.parse(serializedData);
  const [city, setCity] = useState(`${user.data.Profile.city ?? ""}`);
  useEffect(() => {
    dispatch(getCity());
  }, []);
  // const { cityResult } = useSelector((state) => state.profile);
  return (
    <div className='dropdown'>
      <div className='control'>
        <div className='selected-value'>Select Country ...</div>
        <div className='arrow'/>
      </div>
      <div className='options'>
        {
          cityResult && cityResult?.data.map(city => <div className='option'>{city.name}</div>)
        }
      </div>
    </div>
  )
}
