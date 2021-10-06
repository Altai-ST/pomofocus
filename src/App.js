import { useSelector } from 'react-redux';
import { Header } from './components/Header';
import './styless/App.scss'
import { Timer } from './components/Timer';
import { Settings } from './containers/Settings';


function App() {
  let back=useSelector(state => state.pomodoroState)
  return (
    <>
    <div className={back}>
      <div className='container'>
        <div>
          <Header/>
          <Timer/>
          
        </div>
      </div>
      
    </div>
    {/* <Settings/> */}
    </>
  );
}

export default App;
