import './App.css'
// import DaisyNav from './components/Daisynav/DaisyNav';
import NavBar from './components/NavBar/NavBar';
import PriceOptions from './components/PriceOptions/PriceOptions';
function App() {
  

  return (
    <>
      <NavBar></NavBar>
      {/* <DaisyNav></DaisyNav> */}
      
     <h1 className='text-4xl bg-slate-200'>Vite + React</h1>
     <PriceOptions></PriceOptions>

   
   
    
    </>
  )
}

export default App;
