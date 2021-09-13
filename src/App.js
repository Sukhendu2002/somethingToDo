import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [text, setText] = useState("Genarate Ideas");
  const [content, setcontent] = useState("");
  const URL = "https://www.boredapi.com/api/activity/";
  const handleClick = () => {
    setText("Generating More Ideas");
    axios.get(URL).then((response) => {
      setcontent(response.data.activity);
    });
  };
  return (
    <div className="App">
      <h1 className="App-header">getting bored At Home</h1>
      <button className="App-button" onClick={handleClick}>
        {text}
      </button>
      <p className="App-content">{content}</p>
    </div>
  );
}

export default App;
