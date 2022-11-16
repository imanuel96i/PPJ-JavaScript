import './App.css';
import Home from './pages/Home';

const App = (props) => {
  return (
    <Home notes={ props.notes} />
  );
}


export default App;
