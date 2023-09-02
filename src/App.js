import  {ChatEngine} from "react-chat-engine";
import './App.css';
import ChatFeed  from "./components/ChatFeed";
import LoginForm from './components/LoginForm';

function App() {
  if(!localStorage.getItem('username')) return <LoginForm />
  return (
    <div className="App">
    <ChatEngine
    height = "100vh"
      projectID = "5d7b22b7-172f-4bb0-951f-60b778b7e19b"
      userName = "cabdi"
      userSecret = "cabdi"
      renderChatFeed = {(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage = {() => new Audio ('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
    </div>
  );
}

export default App;
