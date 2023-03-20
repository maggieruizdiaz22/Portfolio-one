import About from "./components/About";
import Contacts from "./components/Contacts";
import Experience from "./components/Experience";

import NavBar from "./components/Navbar";
import Proyects from "./components/Proyects";
import { SocialLinks } from "./components/SocialLinks";
import {Home} from "./components/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
    <NavBar/>
    <Home/>
<About/>
<Proyects/>
<Experience/>
<Contacts/>
    <SocialLinks/>
    <Footer/>
    </div>
  );
}

export default App;
