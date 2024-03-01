import './App.css';
import NavBar from './Layout/NavBar';
import Header from './Header';
import { Route,Routes } from 'react-router-dom';

function App() {
  return (<div style={{overflowX:"hidden"}}>
    <NavBar/>
    <Routes>
      <Route path='/' element={<Header />} />
    </Routes>
    </div>
  );
}

export default App;
