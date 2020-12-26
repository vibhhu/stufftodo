import React, {useEffect, useState} from "react";

// Generate an activity HTML element for each entry in activity_dict.
export default function GenActivities() {

    // Call app.py to scrape internet for data
    const [activityDict, setActivityDict] = useState("Empty name");
    useEffect(() => {
        fetch('/scrape').then(res => res.json()).then(data => {
          setActivityDict(data);
        });
        }, []
    );

    var activityHtml = [];
    for (const [key, value] of Object.entries(activityDict)) {
        activityHtml.push(
            <a href={value.url} target="_blank">
                <div className="activity">
                    <p>{value.type}</p>
                    <h2>{value.name}</h2>
                    <img src={value.img_url}/>
                </div>
            </a>
        );
    }
    return activityHtml;
}