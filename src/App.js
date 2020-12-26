import GenActivities from "./Activities";
import Leftnav from "./Leftnav";
import React from "react";

export default function App() {

    // Return the array of HTML activity elements.
    return (
        <div>
            <Leftnav />
            {GenActivities()}
        </div>
    );
}