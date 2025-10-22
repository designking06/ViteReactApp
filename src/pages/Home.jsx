import React from "react";
import Header from "../components/Header"
import Contact from "../components/Contact/Contact"

export default function Home() {

    return (
        <div className="min-h-screen w-full flex items-center justify-center grid columns-1">
            <div className="items-start max-w-3xl gap-5">
                <Header pageTitle="Welcome Home!" />
            </div>
            <div className="relative columns-3 gap-5">
                <div>
                    Section 1
                </div>
                <div>
                    Section 1
                </div>
                <div>
                    Section 1
                </div>
            </div>
            <footer>
                <h4>Contact Us</h4>
                <Contact />
            </footer>
        </div>
        
    );
}