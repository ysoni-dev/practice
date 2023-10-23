import logo from './logo.svg';
import './App.css';
import Navi from './pages/Nav';
import {BrowserRouter, Route} from 'react-router-dom'
import Addgame from './pages/addgame';
import Allgame from './pages/Allgame';
import Home from './pages/Home';
import Editgame from './pages/edit';

function App() {
  return (
   <>
    <BrowserRouter>
    <Navi/>
    <Route path="/" exact component={Home} />
    <Route exact path="/add" component={Addgame} />
    <Route path="/all" component={Allgame} />
    <Route path="/edit/:id" component={Editgame} />
    </BrowserRouter>

   </>
  );
}

export default App;
