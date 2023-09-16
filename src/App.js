import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/main-page/Home";
import FaqHome from "./components/FAQ-page/FaqHome";
import Contact from "./components/contact-page/ContactHome";
import Help from './components/help-page/HelpHome'

function App() {
  return (
    <div className="App">

      <BrowserRouter >
        <Routes>


          <Route path="/" element={<Home />} />
          <Route path="/FAQ" element={<FaqHome />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Help" element={<Help />} />


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
