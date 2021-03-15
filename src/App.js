import React from "react";
import {Wrapper} from "./components/wrapper";
import {Newsletter} from "./components/newsletter";
import {Footer} from "./components/footer";
import './app.scss';

function App() {
    return (
        <div className="App">
            <Wrapper/>
            <Newsletter/>
            <Footer/>
        </div>
    );
}

export default App;
