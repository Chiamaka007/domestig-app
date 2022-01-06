
import './App.css';
import Clients from './Clients';
import logo from './logo.png';
import RegisteredDomestics from './RegisteredDomestics';
import Sales from './Sales';


function App() {
  return (
    <div className="App">
     <div className='header'>
       <h1>Dashboard</h1>
       <div className="row">
         <div className="col-md-6">
         <Sales />
         </div>
         <div className="col-md-6">
         <Clients/>
         </div>
         
       </div>
       <RegisteredDomestics />
      

      
      
     </div>
    </div>
  );
}

export default App;
