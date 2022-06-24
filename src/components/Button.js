import React from "react";
import Data from "../data/data";
import { Container } from "react-bootstrap";


const Buttons = ({ filterItem, setItem, menuItems }) => {
  return (
    <>
    <Container>
      <div className='kata_2'>
          Telusuri Kategori
        </div>
      <div className="d-flex tab-category">
          <div id='slider' className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide d-flex'>
          <button
            className="btn p-1 px-2 mx-3"
            onClick={() => setItem(Data)}
          >
            Semua
          </button>
          {menuItems.map((list, id) => {
            return (
              <button
                className="btn p-1 px-2 mx-3"
                onClick={() => filterItem(list)}
                key={id}
              >
                {list}
              </button>
            );
          })}
          
        </div>
      </div>
    </Container>
      
    </>
  );
};

export default Buttons;
