import React, { useState } from 'react';

function ProjectList() {
    const style = {
        // fontFamily: "Bagnard",
        // color: "white",
        listStyle: "none"
    }

    const [projects, setProject] = useState(["Echo Beats", "Weather Dashboard", "Day Planner", "Budget"]);


    return (
        <div>
            <ul style={style}>
                {projects.map((project) => (
                    <li key={project}><a href="#">{project}</a> </li>
                ))}
            </ul>
        </div>
    )
}

export default ProjectList;
