import { Route } from "react-router-dom";
import "./App.css";
import ChatPage from "./Pages/ChatPage";
import Homepage from "./Pages/Homepage";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Route path="/" component={Homepage} exact />

      <Route path="/chats" exact component={ChatPage} />
      {/* <Route path="/" exact component={Landing} /> */}
    </div>
  );
}

export default App;
