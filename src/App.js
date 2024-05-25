
import './App.css';
import { Emparr } from './componants/empdata';
import React,{useEffect, useState} from 'react'

function App() {

  const [arr,setArr] = useState([])
  useEffect(()=>{
    setArr(Emparr)
  },[])

  const myedit = (id)=>{
    
  }

  const mydelete = (id)=>{
    if (id>0) {
      if (window.confirm("are you sure")) {
        const dt = arr.filter(item => item.id !== id)
      setArr(dt)
      }
      
    }
  }

  return (
    <div className="App">

    <table className='table table-hover'>
      <thead>
        <tr>
          <td>Sr No</td>
          <td>ID</td>
          <td>First Name</td>
          <td>Last Name</td>
          <td>Age</td>
          <td>Actions</td>
        </tr>
      </thead>
      <tbody>
        {
          arr.map((item,index)=>{
           return(
            <tr>
              <td>{index+1}</td>
              <td>{item.id}</td>
              <td>{item.fn}</td>
              <td>{item.ln}</td>
              <td>{item.age}</td>
              <td>
                <button className='btn btn-primary' onClick={()=>{myedit(item.id)}}>Edit</button>&nbsp;
                <button className='btn btn-danger' onClick={()=>{mydelete(item.id)}}>Delete</button>
              </td>
            </tr>
           )
          })
        }
      </tbody>

    </table>
      
    </div> 
  );
}

export default App;
