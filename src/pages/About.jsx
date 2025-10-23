import React from "react";

export default function About() {

    return (
        <div className="">
            <div className="items-start gap-5">
                <h1>About This App</h1>
                <p>
                    Welcome to my React portfolio app. This app is built with Vite and Tailwind CSS.
                    As you can see, there are multiple features available to check out, such as Password Authentication, Dark mode theme toggle and an interactive To Do List. <br/>
                    This to do list pulls data from an API, a local file and your submitted data, combines them into a single list and displays them for you, with the option of completing, resetting and deleting each item.
                </p>
            </div>
        </div>
    );
}