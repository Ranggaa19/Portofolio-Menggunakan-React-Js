import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="App bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
      <Navbar />

      <section id="home" className="h-screen flex items-center justify-center pt-20">
        <Hero />
      </section>

      <section id="about" className="h-screen flex items-center justify-center">
        <h1 className="text-4xl font-bold">About Me</h1>
      </section>

      <section id="projects" className="h-screen flex items-center justify-center">
        <h1 className="text-4xl font-bold">My Projects</h1>
      </section>

      <section id="contact" className="h-screen flex items-center justify-center">
        <h1 className="text-4xl font-bold">Contact Me</h1>
      </section>
    </div>
  );
}

export default App;
