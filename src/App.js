import logo from './logo.png';
import './App.css';
import {Dashboard, Navbar} from "./components/Index"

const App = () => (
    <div className="App">
        <Navbar/>
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <Dashboard/>
        </header>
    </div>
);

export default App;
