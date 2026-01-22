import './App.css';
import {useState} from 'react';
import {UserProfile} from "./components/UserProfile.jsx";

function WelcomeMessage(){
  return <h2>Welcome to my first React App!</h2>
}
function UserCard(props){
  return (
    <div className ="card">
      <h2>User: {props.name}</h2>
    </div>
  );
}
function App() {
  const [isUserOnline,setIsUserOnline] = useState(false);

  const toggleStatus = () => {
    setIsUserOnline(!isUserOnline); 
  };


  return (
    <div className = "App">
      <h1>Hello World</h1>
      <WelcomeMessage/>
      <UserCard name="abhi"/>
      <UserCard name="nami"/>
      <UserProfile name = "Krish" role = "Software Developer" age = '21' isOnline = {isUserOnline} />
      <button onClick={toggleStatus}>Toggle Status</button>
    </div>
  );
}
export default App;
