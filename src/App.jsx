import { RandomNumber } from './components/RandomNumber';
import './App.css';

function App() {
  return (
    <div className="App">
			<RandomNumber maxNum={1000} />
    </div>
  );
}

export default App;
