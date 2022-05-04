import Home from "./pages/Home";
import ThreeD from "../src/components/3D";
import Footer from "../src/components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="bg-white">
        <main>
          {" "}
          <Home />
          <div className="justify-center mx-auto py-16 px-4 sm:px-6 lg:px-10">
            <p className="text-center text-xl pb-4 font-semibold uppercase text-gray-500 tracking-wide">
              Project contributors
            </p>
            <ThreeD />
          </div>
          <Footer />
        </main>
      </div>
    </div>
  );
}

export default App;
