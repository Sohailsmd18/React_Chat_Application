import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import './App.css';

// const projectID = 'de21ce9a-c845-4b14-8d8c-622f61a04ba4';

const App = () => {
  // if (!localStorage.getItem('username')) return <LoginForm />;

  return (
    <ChatEngine
      height="100vh"
      projectID="de21ce9a-c845-4b14-8d8c-622f61a04ba4"  
      userName="virat"
      userSecret="123123"
      // renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      // onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
     />
  );
};

// infinite scroll, logout, more customizations...

export default App;