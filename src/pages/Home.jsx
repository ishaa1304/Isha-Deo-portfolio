import { ThemeToggle } from "../components/ThemeToggle";
import { StartBackground } from "../components/StartBackground";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { Contact } from "lucide-react";
import { ContactSection } from "../components/ContactSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ExperienceSection } from '../components/ExperienceSection';


import { Footer } from "../components/Footer";

export const Home =()=>{
    return <div className="min-h-screen bg-background text-foreground  overflow-x-hidden">
        

    {/*Theme Toggle*/}
    <ThemeToggle/>

    
    {/*Background Effects*/}
    <StartBackground/>

    {/*Navbar*/}
    <Navbar/>
    <main>
        <HeroSection/>

        <AboutSection/>
        <SkillsSection/>
        
        <ProjectsSection/>
        <ExperienceSection />
        <ContactSection/>
        
        
    </main>
    <Footer/>
    {/*Main Content*/}


    {/*Footer*/}



    </div>
}

