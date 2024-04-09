import "./css/LoggedPage.css";
import React from "react";
import ItemList from "../components/ItemList.js";

const LoggedPage = (props) => {
    const items = [
        {   day: "Saturday",
            activity: "Cycling",
            time: 60,
            calories: 500,
            heart: 140
        },
        {   day: "Friday",
            activity: "Swimming",
            time: 45,
            calories: 400,
            heart: "n/a"
        },
        {   day: "Thursday",
            activity: "Running",
            time: 30,
            calories: 300,
            heart: 120
        },
        {   day: "Wednesday",
            activity: "Cycling",
            time: 60,
            calories: 500,
            heart: 140
        },
        {   day: "Tuesday",
            activity: "Swimming",
            time: 45,
            calories: 400,
            heart: 130
        },
        {   day: "Monday",
        activity: "Running",
        time: 30,
        calories: 300,
        heart: 120
        }
    ]
    
    return (
        <div className="background">
            <h1>Demo</h1>
            <div className="demo">
                <h2>Recent Activity</h2>
                <div>
                    <ItemList listItems={items} />
                </div>
            </div>
        </div>
    );
};

export default LoggedPage;