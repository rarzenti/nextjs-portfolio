import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import Achievements from "./components/Achievements"
import Head from "next/head"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Arzenti Portfolio</title>
      </Head>
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <Achievements />
        <AboutSection />
        <ProjectsSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
    </div>
  );
}

export const metadata = {
  title: "Arzenti Portfolio",
  description: "my portfolio"
}