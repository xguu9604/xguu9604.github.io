import './App.css';
import Info from './components/info/Info';
import Landing from './components/landing/Landing';
import Nav from './components/nav/Nav';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Nav/>
      {/* <div className="App">
        <header className="App-header">
          <Landing />
        </header>
      </div> */}
      <div className='App-header'>
        <BrowserRouter>
          <Routes>
            <Route exact path='/' element={<Landing />} />
            <Route exact path='/info' element={<Info />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
