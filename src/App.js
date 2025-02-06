
import { Link } from 'react-router-dom';
import AppRouter from './AppRouter';
import './App.css';
import './input.css';


function App() {
  return (

    <div className="App">
      <div className=" text-center text-4xl m-9 p-9">Welcome on your react-redux-template repo!</div>
      <p className=" text-center text-4xl  p-9 ">You can find installed : React-Router, React-Redux and toolkit, MuiLibrary, Tailwindcss </p>
      <Link to="/home-page">Home Page</Link>
      <AppRouter />
    </div>

  );
}

export default App;
