import React from "react";

export default function About() {

    return (
        <div className="">
            <div className="items-start gap-5">
                <h1>About Me</h1>
                <p>
                     Welcome, I'm Caleb, a self-taught web developer with a creative streak and a drive to build things that look good and work even better. My journey started with curiosity — experimenting with code, breaking things, fixing them, and eventually turning that grind into a full-time career. Today, I work as a Drupal developer for a government agency while building my own brand, where I mix design, strategy, and tech to help businesses stand out online.
                     I’ve always believed in blending logic with creativity — whether that’s crafting clean, scalable code or designing digital experiences that feel effortless. Outside of web development, I channel that same creative energy into music production and visual design, keeping my mind sharp and inspired across different mediums.
                     At the end of the day, my goal is simple: to create work that reflects excellence, authenticity, and a little bit of hustle.
                </p>
            </div>
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