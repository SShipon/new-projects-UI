import './App.css';
import Sidebar from './layout/Sidebar/Sidebar';
import Content from './layout/Content/Content';
import { Route, Routes } from 'react-router-dom';
import Overview from './components/Overview/Overview';
import Monitors from './components/Monitors/Monitors';
import Dropdown from './components/Dropdown/Dropdown';

function App() {
  return (
    <>
      <div className='app'>
        <Sidebar />
        <Routes>
          <Route path='/' Component={Content} />
          <Route path='/overview' Component={Overview} />
          <Route path='/monitors' Component={Monitors} />
          <Route path='/dropdown' Component={Dropdown} />
        </Routes>
      </div>
    </>
  )
}

export default App