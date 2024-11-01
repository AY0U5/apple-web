import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import HighLights from "./components/HighLights.jsx";
import Model from "./components/Model.jsx"

const App = () => {

  return (
      <main className="bg-black">
          <Navbar/>
          <Hero/>
          <HighLights/>
          <Model/>
      </main>
  )
}

export default App
