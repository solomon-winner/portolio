import { About } from "../components/About";
import { Hero } from "../components/Hero.jsx";
import { Metrics } from "../components/Metrics";
import { Projects } from "../components/Projects";
import { Skills } from "../components/Skills";
import {Contacts} from "../components/Contacts.jsx"
import { Footer } from "../components/Footer.jsx";
export const Home =() => {
    return(
        <div className="min-h-screen bg-gray-900 text-gray-100 font-sans">
            <Hero/>
            <About/>
            {/* <Metrics/> */}
            <Projects/>
            <Skills/>
            <Contacts/>
            <Footer/>
        </div>
    );
}