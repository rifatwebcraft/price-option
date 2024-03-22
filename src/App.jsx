import './App.css'
// import DaisyNav from './components/Daisynav/DaisyNav';
import NavBar from './components/NavBar/NavBar';
import PriceOptions from './components/PriceOptions/PriceOptions';
import LineChart from './components/LineChart/LineChart';
import Phones from './components/Phones/Phones';




function App() {
  

  return (
    <>
      <NavBar></NavBar>
      {/* <DaisyNav></DaisyNav> */}
      
     <h1 className='text-4xl bg-slate-200'>Vite + React</h1>
     <PriceOptions></PriceOptions>
     <LineChart></LineChart>
     <Phones></Phones>

   
   
    
    </>
  )
}

export default App;
