import './App.css';
import { MainRoutes } from './Pages/MainRoutes';
import Navbar from './Pages/Navbar';

function App() {
  return (
    <div className="App">
      {/* <h1>Jai Shree Ram</h1> */}
      <Navbar/>
      <MainRoutes/>
    </div>
  );
}

export default App;
