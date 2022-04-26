// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import LineArea from "./component/Chart/Simple/LineArea";
import LineStack from "./component/Chart/Simple/LineStack";
import Simple from "./component/Chart/Simple/Simple";
import Navbar from "./component/Navbar/Navbar";
import MultilinePage from "./component/Page/MultilinePage/MultilinePage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <br></br>
        <Routes>
          <Route path="/" element={<h1>Home</h1>}></Route>
          <Route
            path="/simple"
            element={<Simple style={{ maxWidth: "90vw", height: "90vh" }} />}
          ></Route>
          <Route
            path="/linearea"
            element={<LineArea style={{ maxWidth: "90vw", height: "90vh" }} />}
          ></Route>
          <Route
            path="/linestack"
            element={
              <LineStack
                style={{ maxWidth: "90vw", height: "90vh" }}
              ></LineStack>
            }
          ></Route>
          <Route
            path="/multi"
            element={<MultilinePage></MultilinePage>}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
