import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/main-page/Home";
import FaqHome from "./components/FAQ-page/FaqHome";
import Contact from "./components/contact-page/ContactHome";
import Help from './components/help-page/HelpHome'
import SignIn from './components/sign-in-page/AccountMain'
import SignUp from "./components/sign-up-page/SignUp";
import SignupMain from "./components/sign-up-page/Sign-up-components/SignupMain";
import SignupReg from "./components/sign-up-page/Sign-up-components/SignupReg";
import { AuthContextProvider } from "./context/AuthContext";
import SignupPlan from "./components/sign-up-page/Sign-up-components/sign-up-plan/SignupPlan";

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
              <Route index element={<SignupMain />} />
              <Route path="Form" element={<SignupReg />} />
              <Route path="Plan" element={<SignupPlan />} />
            </Route >
          </Routes>
        </BrowserRouter>
      </AuthContextProvider>
    </div>
  );
}

export default App;
