import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import Creator from "./components/creator/Creator";
import Home from "./components/Home";
import Navbar from "./components/web/Navbar";

function App() {
    return (
        <BrowserRouter>
            <Tooltip id="tooltip" className="z-50" />
            <Navbar />
            <main className="w-screen h-screen flex flex-col gap-8 p-8 items-center">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/analyzer" element={<div>analyzer</div>} />
                    <Route path="/creator" element={<Creator />} />
                </Routes>
            </main>
        </BrowserRouter>
    );
}

export default App;
