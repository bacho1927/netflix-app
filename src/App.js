import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/main-page/Home";
import FaqHome from "./components/FAQ-page/FaqHome";
import Contact from "./components/contact-page/ContactHome";
import Help from './components/help-page/HelpHome'
import SignIn from './components/sign-in-page/AccountMain'
import SignUp from "./components/sign-up-page/SignUp";
import SignupMain1 from "./components/sign-up-page/Sign-up-components/SignupMain1";
import SignupMain2 from "./components/sign-up-page/Sign-up-components/SignupMain2";
import { AuthContextProvider } from "./context/AuthContext";

function App() {

  return (

    <div className="App">
      <AuthContextProvider>
        <BrowserRouter >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="FAQ" element={<FaqHome />} />
            <Route path="Contact" element={<Contact />} />
            <Route path="Help" element={<Help />} />
            <Route path="Signin" element={<SignIn />} />
            <Route path="Signup" element={<SignUp />}>
              <Route index element={<SignupMain1 />} />
              <Route path="form" element={<SignupMain2 />} />
            </Route >
          </Routes>
        </BrowserRouter>
      </AuthContextProvider>
    </div>
  );
}

export default App;
