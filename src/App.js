
import './App.css';
import MyNavbar from './common/Navbar';
import MyFooter from './common/MyFooter';

import Home from './components/TestHome';
import HomeRoutes from './components/HomeRoutes';
function App() {
  return (
    <div className="App">
    <MyNavbar/>
    <HomeRoutes/>
    <MyFooter/>
    </div>
  );
}

export default App;
