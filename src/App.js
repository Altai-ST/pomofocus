import { useSelector } from 'react-redux';
import { Header } from './components/Header';
import './assets/styles/App.scss'
import { Timer } from './components/Timer';


function App() {
  let setPomodoro=useSelector(state => state.pomodoroState)
  return (
    <div className={setPomodoro}>
      <div className='container'>
        <div>
          <Header/>
          <Timer/>
        </div>
      </div>
      
    </div>
  );
}

export default App;
