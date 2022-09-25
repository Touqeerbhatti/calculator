
import React, { useState } from "react";
import './App.css';
import './bootstrap.css';


const App= ()=>
{ 
  const [value,setvalue]=useState();

  const handleClick =(e)=>
  {
    setvalue(value.concat(e.target.defaultValue))
  }  
  const Clear = ()=>
  {
    setvalue("")
  }
  const backSpace=()=>
  {
    setvalue(value.slice(0, -1))
  }
  const calculate=()=>{
    try{
        setvalue(eval(value).toString())
    }
    catch(err){
      setvalue("Error")

    }
  }

  return(
      <>
      <div className="container">
        <div className="main-div">
          <div className="sub-div">
            <div className="input-div">
          <input className="input-tag" type="text" Value={value}  />
            </div>

            <div className="btn-div">
              
              <input type="button" className="btn" defaultValue={"Clear"} onClick={Clear}  />
              <input type="button" className="btn" defaultValue={"["} onClick={handleClick}  />
              <input type="button" className="btn" defaultValue={"]"} onClick={handleClick}  />
              <input type="button" className="btn" defaultValue={"C"} onClick={backSpace}  />
              <input type="button" className="btn" defaultValue={7} onClick={handleClick}  />
              <input type="button" className="btn" defaultValue={8} onClick={handleClick}  />
              <input type="button" className="btn" defaultValue={9} onClick={handleClick}  />
              <input type="button" className="btn" defaultValue={"-"} onClick={handleClick}  />
              <input type="button" className="btn" defaultValue={4} onClick={handleClick}  />
              <input type="button" className="btn" defaultValue={5} onClick={handleClick}  />
              <input type="button" className="btn" defaultValue={6} onClick={handleClick}  />
              <input type="button" className="btn" defaultValue="/" onClick={handleClick}  />
              <input type="button" className="btn" defaultValue={1} onClick={handleClick}  />
              <input type="button" className="btn" defaultValue={2} onClick={handleClick}  />
              <input type="button" className="btn" defaultValue={3} onClick={handleClick}  />
              <input type="button" className="btn" defaultValue="*" onClick={handleClick}  />
              <input type="button" className="btn" defaultValue={0} onClick={handleClick}  />
              <input type="button" className="btn" defaultValue="." onClick={handleClick}  />
              <input type="button" className="btn" defaultValue="+" onClick={handleClick}  />
              <input type="button" className="btn" defaultValue="=" onClick={calculate}    />
            
            </div>

          </div>
        </div>
        </div>

      </>
  )
}

export default App;