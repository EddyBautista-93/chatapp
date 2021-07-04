import { ChatEngine } from 'react-chat-engine';

import './App.css';

const App = () => {
    return (
        <ChatEngine
            height="100vh"
            projectID={process.env.REACT_APP_SECRET_NAME}
            userName={process.env.REACT_APP_SECRET_USER}
            userSecret={process.env.REACT_APP_SECRET}
            />
    )
}
 
export default App;