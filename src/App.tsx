import React from 'react';
import './App.css';
import {RealFirework} from "./RealFirework";
import {LaunchFireworkImpl} from "./RealLaunchFirework";

function App() {
    async function launchButtonClick() {
        // 本物の花火の準備
        const realFirework = new RealFirework()

        // 花火を打ち上げ装置にセット
        const inputElement = document.getElementById("input") as HTMLInputElement
        const password = inputElement.value
        const launchFirework = new LaunchFireworkImpl(realFirework, password)
        const launchResult = await launchFirework.launch()

        // 花火が打ち上げられたら花火のムービー
        if (launchResult === "花火を打ち上げました") {
            const fireworkVideo = document.getElementById("fireworkR18") as HTMLIFrameElement
            // const fireworkVideo = document.getElementById("fireworkR6") as HTMLIFrameElement
            fireworkVideo.src += '?autoplay=1';
            fireworkVideo.hidden = false
            const buttonElement = document.getElementById("button") as HTMLAnchorElement
            buttonElement.style.display = "none"
            const textElement = document.getElementById("buttonText") as HTMLButtonElement
            textElement.style.display = "none"
            inputElement.style.display = "none"
        } else if (launchResult === "花火の打ち上げができません") {
            const fireworkVideo = document.getElementById("fireworkR6") as HTMLIFrameElement
            fireworkVideo.src += '?autoplay=1';
            fireworkVideo.hidden = false
            const buttonElement = document.getElementById("button") as HTMLAnchorElement
            buttonElement.style.display = "none"
            const textElement = document.getElementById("buttonText") as HTMLButtonElement
            textElement.style.display = "none"
            inputElement.style.display = "none"
        } else {
            const fireworkVideo = document.getElementById("destructionR12") as HTMLIFrameElement
            fireworkVideo.src += '?autoplay=1';
            fireworkVideo.hidden = false
            const buttonElement = document.getElementById("button") as HTMLAnchorElement
            buttonElement.style.display = "none"
            const textElement = document.getElementById("buttonText") as HTMLButtonElement
            textElement.style.display = "none"
            inputElement.style.display = "none"
        }
    }

    return (
        <div className="app">
            <iframe className="iframe"
                    id="fireworkR18"
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/euutqwJE1Ds"
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    hidden={true}>
            </iframe>
            <iframe className="iframe"
                    id="destructionR12"
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/cbCHUKxs3Lg"
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    hidden={true}>
            </iframe>
            <iframe className="iframe"
                    id="fireworkR6"
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/cbCHUKxs3Lg"
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    hidden={true}>
            </iframe>
            <a id="button" onClick={launchButtonClick} className="btn-emergency-real">
                <span className="btn-emergency-real-bottom"></span>
                <span className="btn-emergency-real-top"><span>花火</span></span>
            </a>
            <div id={"buttonText"} style={{fontSize: "100px;"}}>花火打ち上げ装置</div>
            <input id="input" type="text" placeholder="ここにパスワードを入力"></input>
        </div>
    )
}

export default App
