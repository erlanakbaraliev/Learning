import ListGroup from "./components/ListGroup";
import Message from "./Message";
import Alert from "./components/Alert"
import Button from "./components/Button"
import { Fragment, useState } from "react";

function App() {
  const [showAlert, setShowAlert] = useState(false);

  return (
    <div>
      {showAlert? <Alert onClick={()=>setShowAlert(false)}>Alert message</Alert>: null}
      <Button onClick={() => setShowAlert(true)}>Show alert</Button>
    </div>
  )

  // return <Button onClick={()=>console.log("Clicked")}>Good button</Button>
}

export default App;