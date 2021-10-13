import { useSelector } from 'react-redux';
import { Header } from './components/Header';
import './assets/styles/App.scss'
import { Timer } from './components/Timer';
import { InfoBlock } from './components/InfoBlock';
import LineTimer from './containers/LineTimer';
import { Footer } from './components/Footer';


function App() {
  let setPomodoro=useSelector(state => state.TimeManage.pomodoroState)
  return (
    <div>
      <div className={setPomodoro}>
        <div className='container'>
          <div>
            <Header/>
            <LineTimer/>
            <Timer/>
          </div>
        </div>
      </div>
      <InfoBlock/>
      <Footer/>
    </div>
    
  );
}

export default App;
