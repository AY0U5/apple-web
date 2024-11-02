import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import HighLights from "./components/HighLights.jsx";
import Model from "./components/Model.jsx"

import * as Sentry from "@sentry/react";
import Features from "./components/Features.jsx";

const App = () => {
    return (
        <main className="bg-black">
            <Navbar/>
            <Hero/>
            <HighLights/>
            <Model/>
            <Features/>
        </main>
    )
}

export default Sentry.withProfiler(App)
