import { ChatEngine } from 'react-chat-engine';

import './App.css';
import ChatFeed from './components/ChatFeed.jsx'

const App = () => {
    return (
        <ChatEngine
            height="100vh"
            projectID={process.env.REACT_APP_SECRET_NAME}
            userName={process.env.REACT_APP_SECRET_USER}
            userSecret={process.env.REACT_APP_SECRET}
            renderChatFeed = { (chatAppProps) => <ChatFeed { ... chatAppProps } /> }
            />
    )
}
 
export default App;