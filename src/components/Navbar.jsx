import React from "react"
import reactLogo from "../assets/react-icon-small.png"


export default function Navbar() {
    return (
        <nav className="navbar">
            <img src={reactLogo} alt ="react logo" />
            <ul className="navitems">
                <li className="navchild1">ReactFacts</li>
                <li className="navchild2">React Course - Project 1</li>

            </ul>
        </nav>
    )
}