

import { getByDisplayValue } from "@testing-library/react";
import React from "react";
import './App.css';


const App= ()=>
{


  return(
      <>
        <div className="main-div">
          <div className="sub-div">
            <div className="input-div">
          <input className="input-tag" type="text"   />
            </div>

            <div className="btn-div">
              
              <input type="button" className="btn" defaultValue={0} onClick="display('0')"  />
              <input type="button" className="btn" defaultValue="[" onClick="display('[')"  />
              <input type="button" className="btn" defaultValue="]" onClick="display(']')"  />
              <input type="button" className="btn" defaultValue={"C"} onClick="clear('C')"  />
              <input type="button" className="btn" defaultValue={7} onClick="display('7')"  />
              <input type="button" className="btn" defaultValue={8} onClick="display('8')"  />
              <input type="button" className="btn" defaultValue={9} onClick="display('9')"  />
              <input type="button" className="btn" defaultValue="-" onClick="sub('-')"  />
              <input type="button" className="btn" defaultValue={4} onClick="display('4')"  />
              <input type="button" className="btn" defaultValue={5} onClick="display('5')"  />
              <input type="button" className="btn" defaultValue={6} onClick="display('6')"  />
              <input type="button" className="btn" defaultValue="\" onClick="div('\')"  />
              <input type="button" className="btn" defaultValue={1} onClick="display('1')"  />
              <input type="button" className="btn" defaultValue={2} onClick="display('2')"  />
              <input type="button" className="btn" defaultValue={3} onClick="display('3')"  />
              <input type="button" className="btn" defaultValue="*" onClick="mul('*')"  />
              <input type="button" className="btn" defaultValue={0} onClick="display('0')"  />
              <input type="button" className="btn" defaultValue="." onClick="display('.')"  />
              <input type="button" className="btn" defaultValue="+" onClick="add('+')"  />
              <input type="button" className="btn" defaultValue="=" onClick="equal('=')"  />
            
            </div>

          </div>
        </div>

      </>
  )
}

export default App;