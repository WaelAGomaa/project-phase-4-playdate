import { Switch, Route} from 'react-router-dom';
import {useEffect, useState} from 'react';
import NavBar from './NavBar';
import Home from './Home';
import Request from './Request';
import ProfileInfo from './ProfileInfo';
import Settings from './Settings';
import Login from "./Login";

function App(){
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [playdates, setPlaydates] = useState([]);
  const [currentUser, setCurrentUser] = useState();
  const [user, setUser] = useState({
  username: '',
  password: '',
  email: '',
  address: "",
  image: "",
  name: "",
  age: "",
  early: false,
  nightOwl: false,
  emergency: false,
  admin: false,
  });


  useEffect(() =>{
  fetch('/authorized_user')
  .then(res => res.json())
  .then(data => {
    if(data.errors){
        console.log(data.errors)
    } else {
        setCurrentUser(data);
      }
    })},[])


  useEffect(() =>{
    fetch('/playdates')
    .then(res => res.json())
    .then(data => setPlaydates(data))
    },[])
  
  return (
    <div className="App">
      <NavBar />
      <Switch>
      <Route path="/Home"><Home playdates={playdates} setPlaydates={setPlaydates}/></Route>
      <Route path="/Request"><Request playdates={playdates}/></Route>
      <Route path="/ProfileInfo"><ProfileInfo  currentUser={currentUser} setCurrentUser={setCurrentUser} user={user} setUser={setUser}/></Route>
      <Route path="/Settings"><Settings setUser={setUser} user={user} setIsAuthenticated={setIsAuthenticated} setCurrentUser={setCurrentUser} currentUser={currentUser}/></Route>
      <Route path="/Login"><Login user={user} setUser={setUser} currentUser={currentUser} setCurrentUser={setCurrentUser} /></Route>
      </Switch>
    </div>
  );
}

export default App;
