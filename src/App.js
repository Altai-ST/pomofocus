import { useSelector } from 'react-redux';
import { Header } from './components/Header';
import './assets/styles/App.scss'
import { Timer } from './components/Timer';
import { InfoBlock } from './components/InfoBlock';


function App() {
  let setPomodoro=useSelector(state => state.TimeManage.pomodoroState)
  return (
    <div>
      <div className={setPomodoro}>
        <div className='container'>
          <div>
            <Header/>
            <Timer/>
          </div>
        </div>
      </div>
      <InfoBlock/>
    </div>
    
  );
}

export default App;
