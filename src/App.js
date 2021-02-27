import logo from './logo.png';
import './App.css';
import {Dashboard} from "./components/Index"

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <Dashboard/>
            </header>
        </div>
    );
}

export default App;
