import "./Intro.css"
import {useEffect, useState} from "react";
import IntroButton from "./IntroButton";

export default function Intro({text, delay}){
    const [currentIndex,setCurrentIndex] = useState(0);
    const [currentText, setCurrentText] = useState('');
    useEffect(() => {
        if(currentIndex<text.length){
            const timeout = setTimeout(()=>{
                setCurrentText(prevText =>prevText +text[currentIndex]);
                setCurrentIndex(prevIndex => prevIndex +1);
            },delay);
            return () => clearTimeout(timeout);
        }
        if(currentIndex===text.length){
            const resetTimeout = setTimeout(()=>{
                setCurrentIndex(0);
                setCurrentText("");
            },1000);
            return () => clearTimeout(resetTimeout);
        }
    }, [currentIndex, delay, text]);

    return(
        <div className="Intro-container container">
            <div className="row">
                <p className='intro-title'>{currentText}</p>
            </div>
            <div className="row">
                <div className="col-9">
                    <div className="row">
                        <p className="intro-content">My name is Timothy Nyan. I am a Inspiring Web Developer based in Singapore. I am currently a sophomore Studying in Nanyang Technology University (NTU), majoring in Computer Engineering. I am constantly seeking opportunities to enhance my knowledge and skills in the field, and I would be delighted to connect with individuals who can offer valuable insights or potential prospects for my future endeavors. I am also open to sharing my resume to showcase my capabilities and experiences.</p>
                    </div>
                    <div className="row">
                        <div className="col-2">
                            <IntroButton title="Linkedin" color="#2472a4"/>
                        </div>
                        <div className="col-2">
                            <IntroButton title="GitHub" />
                        </div>
                        <div className="col-2">
                            <IntroButton title="Resume" color="#ab3326"/>
                        </div>
                    </div>
                    <div className="row">
                        <p className="headline">Tech Stack</p>
                        <div className="techstack">
                            <div className="row">
                                <div className="col-2">
                                    <p className="stack-title">Web-Developement:</p>
                                </div>
                                <div className="col-8">
                                    <p>Javascript, HTML & CSS, Bootstrap, ReactJS, Redux</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-2">
                                    <p className="stack-title">App-Developement:</p>
                                </div>
                                <div className="col-8">
                                    <p>React-Native (Typescript)</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-2">
                                    <p className="stack-title">Data Analytics:</p>
                                </div>
                                <div className="col-8">
                                    <p>Python, Java(OOP), Postman(API Calling)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <figure className="snip1113 red">
                        <img src="./intro.JPG" alt="pr-sample1" />
                        <figcaption>
                            <h3>Timothy <span>Nyan</span></h3>
                            <h4>
                                Creator
                            </h4>
                        </figcaption>
                    </figure>
                </div>
            </div>

        </div>
    )
}