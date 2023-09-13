import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/main-page/Home";
import FaqHome from "./components/FAQ-page/FaqHome";

function App() {
  return (
    <div className="App">

      <BrowserRouter >
        <Routes>


          <Route path="/" element={<Home />} />
          <Route path="/FAQ" element={<FaqHome />} />




        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
