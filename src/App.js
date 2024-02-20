import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./components/css/App.css";
import Home from "./pages/Home";
import Resume from "./pages/Resume";

function App() {
  setTimeout(function () {
    document.body.className = "";
  }, 500);

  return (
    <div>
      <Routes>
        <Route element={<Home />}>
          <Route index path="/" element={<Home />}></Route>
        </Route>
        <Route exact path="/resume" element={<Resume />} />
      </Routes>
    </div>

  );
}

export default App;
