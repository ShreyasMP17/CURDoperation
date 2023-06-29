
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/main';
import Edit from './components/edit';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/edit/:id" element={<Edit/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
