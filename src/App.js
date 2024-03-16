// //WITHOUT the use of USESTATE
// //to access the dom element--------------------------UseRef used----------------------------------------------------------------
// import './App.css';
// import Header from './Header';
// import { useRef} from 'react';

// function App() {
  

//   const inPutField = useRef('');

//  const onClick = () =>{
//     console.log('onClick');
//     inPutField.current.style.color='white';
//     inPutField.current.style.background='black'; 
    
//  }

//   return (
            
//     <>
//      <div className="" style={{width:'100%', height:'100vh'}}>
//     <div  style={{top:'50%', left:'50%', position:'absolute', transform: 'translate(-50%,-50%)'}}>
//     <Header/>
//     <input ref={inPutField}/>
//     <button onClick={onClick}>Click me!</button>
//     </div>
//     </div>
    
   
//     </>
//   );
// }

// export default App;


//----------------------WITH USESTATE---------------------------------------------------------------------------------------

// //to access the dom element--------------------------UseRef used----------------------------------------------------------------
import './App.css';
import Header from './Header';
import {useState, useRef} from 'react';

function App() {
  
  const [input, setInput] = useState(''); 
  const inPutField = useRef('');

 const onClick = () =>{
    console.log('onClick');
    inPutField.current.style.color='white';
    inPutField.current.style.background='black'; 
    
 }

  const formHandler =(e)=>{
    setInput(e.target.value);
    console.log(e.target.value);
  }
  return (
            
    <>
     <div className="" style={{width:'100%', height:'100vh'}}>
    <div  style={{top:'50%', left:'50%', position:'absolute', transform: 'translate(-50%,-50%)'}}>
    <Header/>
    <input ref={inPutField} type="text" value={input} onChange={formHandler} />
    <button onClick={onClick}>Click me!</button>
    </div>
    </div>
    
   
    </>
  );
}

export default App;

//-----------------------------------------------------------------------------------------------------------------------

// //show the previous state of the text

// import './App.css';
// import Header from './Header';
// import {useState,useEffect, useRef} from 'react';

// function App() {
  
//   const [input, setInput] = useState(''); 
//   const prevState = useRef('');

//   useEffect(()=>{
//     console.log('renderred');
//     prevState.current = input;
//   },[input]);

//   const formHandler =(e)=>{
//     setInput(e.target.value)
//   }
//   return (
            
//     <>
//      <div className="" style={{width:'100%', height:'100vh'}}>
//     <div  style={{top:'50%', left:'50%', position:'absolute', transform: 'translate(-50%,-50%)'}}>
//     <Header/>
//     <input type="text" value={input} onChange={formHandler} />
//     <h4>Previous state of the text is ..... {prevState.current} </h4>
//     </div>
//     </div>
    
   
//     </>
//   );
// }

// export default App;


// ------------------------------------------------------------------------------------------------   --------------------------------

//show the how many times state rendered with the help of counter.current

// import './App.css';
// import Header from './Header';
// import {useState,useEffect, useRef} from 'react';

// function App() {
  
//   const [input, setInput] = useState(''); 
//   const counter = useRef(0);

//   useEffect(()=>{
//     console.log('renderred');
//     counter.current = counter.current + 1;
//   });

//   const formHandler =(e)=>{
//     setInput(e.target.value)
//   }
//   return (
            
//     <>
//      <div className="" style={{width:'100%', height:'100vh'}}>
//     <div  style={{top:'50%', left:'50%', position:'absolute', transform: 'translate(-50%,-50%)'}}>
//     <Header/>
//     <input type="text" value={input} onChange={formHandler} />
//     <h4>Application return {counter.current} times..</h4>
//     </div>
//     </div>
    
   
//     </>
//   );
// }

// export default App;

// UseRef Hook

// Application return 533 times.



// --------------------------------------------------------------------------------------------------------------------


// import './App.css';
// import Header from './Header';
// import {useState,useEffect} from 'react';

// function App() {
//   const [input, setInput] = useState('');
//   const [count, setCount] = useState(0)

//   useEffect(()=>{
//     console.log('renderred');
//     setCount(count+1);
//   });

//   const formHandler =(e)=>{
//     setInput(e.target.value)
//   }
//   return (
            
//     <>
//      <div className="" style={{width:'100%', height:'100vh'}}>
//     <div  style={{top:'50%', left:'50%', position:'absolute', transform: 'translate(-50%,-50%)'}}>
//     <Header/>
//     <input type="text" value={input} onClick={formHandler} />
//     <h4>Application return {count} times..</h4>
//     </div>
//     </div>
    
   
//     </>
//   );
// }

// export default App;


//this will rendered the element infintely
//when we dont give dependencies in useEffect loop