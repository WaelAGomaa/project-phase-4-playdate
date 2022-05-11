import { Switch, Route} from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import Message from './Message';
import Profile from './Profile';
import Settings from './Settings';


function App() {
  useEffect(() => {
    fetch('http://localhost:3000/Parent')
    .then(response => response.json())
    .then(data => console.log(data));
  }, [] )
  return (
    <div className="App">
      <NavBar />
      <Switch>
      <Route path="/Home"><Home /></Route>
      <Route path="/Messages"><Message /></Route>
      <Route path="/Profile"><Profile /></Route>
      <Route path="/Settings"><Settings /></Route>
      </Switch>
    </div>
  );
}

export default App;
