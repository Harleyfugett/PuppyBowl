import { createRoot } from "react-dom/client";
import {useState, useEffect } from "react";

import { AllPuppies, SinglePuppies } from "./Components";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const App = () => {
    const [puppy, setPuppy] = useState([]);

    async function fetchPuppyData() {
        try {
            const response = await fetch("https://fsa-puppy-bowl.herokuapp.com/api/2301-FTB-MT-WEB-FT/players");
            const translatedData = await response.json();

            console.log(translatedData)

            let players = translatedData.data.players
            setPuppy(players)

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        try {
        fetchPuppyData();
        } catch (e) {
            console.log(e);
        }
    }, [])

    return (
        <BrowserRouter>
        <nav >
            <Link to="/players">See All Players</Link>
        </nav>
            <Routes>
                <Route path="/players" element={<AllPuppies puppyProps={puppy} />} />
                <Route path="/players/:id" element={<SinglePuppies puppyProps={puppy} />} />
            </Routes>
        </BrowserRouter>
    )
}

const appElement = document.getElementById("app");
const root = createRoot(appElement)
root.render(<App />)