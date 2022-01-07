import "./App.css";
import { useState } from "react";

export default function App() {
  let [chat, setChat] = useState("");
  let [list, setList] = useState([]);

  function handleChat(e) {
    setChat(e.target.value);
    
  }

  function print() {
    if(chat=="")
    {
      alert("msg empty");
      return;
    }
    let newList = [...list, chat];
    setList(newList);
    setChat("");
  }

  return (
    <>
      {" "}
      <div className="hd1">
        <span className="h1">MyChatApp</span>
        <span className="h6 hd2">By Pratik Ladikar 092 </span>
      </div>
      <div className="hd3">
        <input
          type="text"
          onChange={handleChat}
          placeholder="Lets chat here..."
          className="hd4"
          value ={chat}
        />{" "}
        <input type="button" value="send" onClick={print} className="hd5" />
      </div>
      <div>
        {list.map((item) => (
          <div className="hd6">{item}</div>
        ))}
      </div>
    </>
  );
}
