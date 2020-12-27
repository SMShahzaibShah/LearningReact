import logo from "./logo.svg";
import "./App.css";
import { useCallback, useState } from "react";

function App() {
  const [MPR, setMPR] = useState("");
  const [date, setDate] = useState("");

  const sendReq = () => {
    const requestOptions = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: '',
    };
    fetch("http://localhost:3000/doctor/delete/"+MPR+"/"+date, requestOptions)
      .then((response) => {
        alert("Mubrak ho gee data delete ho gya Successfully!");
      }
      ).catch(err=>{console.log(err)})
    }
  return (
    <div className="App">
      <input
        type="number"
        placeholder="Enter MPR number"
        onChange={(e) => setMPR(e.target.value)}
      />
      <br />
      <input
        type="string"
        placeholder="Enter date"
        onChange={(e) => setDate(e.target.value)}
      />
      <br />
      <input type="submit" value="delete" onClick={sendReq} />
    </div>
  );
}

export default App;
