import "../App.css";
import Hero from "../components/HeroSection";
import Features from "../components/FeatureSection";
import Stats from "../components/Stats";

function App() {
  return (
    <div className="App">
      <div className="bg-white">
        <main>
          <Hero />
          <Features />
          <Stats />
        </main>
      </div>
    </div>
  );
}

export default App;
