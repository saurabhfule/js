import './App.css';
import React,{useState} from 'react';

function App() {
  
    const [clear,setClear]=useState(false);
    const Calculate=(e)=>{
      e.preventDefault();
      if(clear) setClear(false);
      let pa=document.querySelector('#p').value
      let r=document.querySelector('#r').value
      let t=document.querySelector('#t').value
      
      let interest = (pa*t*r)/100;
      alert("Simple Interest = "+interest);
      //document.querySelector('#num').value=interest;
        
    } 

    const Clear=(e)=>{
      e.preventDefault();
      document.querySelector('form').reset();
      setClear(true);
    }


  return (
    <div className="App">
      <header className="App-header">
        
        <p>
          Simple Interest Calculator
        </p>

        <form>
            <label>Principle Amount:</label>
            <input className="form-control" type="number" id="p"  /> <br></br>

            <label>Rate of Interest:</label>
            <input className="form-control" type="number" id="r"  /> <br></br>

            <label>Time(Y):</label>
            <input class="form-control" type="number" id="t"  /> <br></br>

            <button onClick={Calculate}>Calculate</button>
            <button onClick={Clear}>Clear</button>
        </form>
       
      </header>
    </div>
  );
}

export default App;
