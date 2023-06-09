import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import ScrollToTop from "./components/ScrollToTop";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Preview from "./components/Preview";
import { useState } from "react";
function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [budget, setBudget] = useState(0);
  const [info, setInfo] = useState("");
  const onNameChange = (value) => {
    setName(value);
  };
  const onEmailChange = (value) => {
    setEmail(value);
  };
  const onBudgetChange = (value) => {
    setBudget(value);
  };
  const onInfoChange = (value) => {
    setInfo(value);
  };
  return (
    <div className="font-Poppins bg-ghostWhite">
      <Navbar />
      <Home />
      <Projects />
      <Services />
      <Blog />
      <Testimonials />
      <Contact
        name={name}
        email={email}
        budget={budget}
        info={info}
        onNameChange={onNameChange}
        onEmailChange={onEmailChange}
        onBudgetChange={onBudgetChange}
        onInfoChange={onInfoChange}
      />
      <Preview name={name} email={email} budget={budget} info={info} />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
