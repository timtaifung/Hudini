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
        <div>
            <div className="Intro-container container">
                <div className="row">
                    <p className='intro-title'>{currentText}</p>
                </div>
                <div className="row">
                    <div className="col-9">
                        <div className="row">
                            <p className="intro-content">My name is Timothy Nyan. I am a Inspiring Web Developer based in Singapore. I am currently a sophomore Studying in Nanyang Technology University (NTU), majoring in Computer Engineering. I am constantly seeking opportunities to enhance my knowledge and skills in the field, which as of right now, i am particularly interested in the field of Web Development & Data Analytics. I am also open to sharing my resume to showcase my capabilities and experiences.</p>
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
                        <div className="row" style={{paddingTop : "2em"}}>
                            <p className="headline">Tech Stack</p>
                            <div className="techstack">
                                <div className="row">
                                    <div className="col-2 stack-title-container">
                                        <p className="stack-title">Web-Developement:</p>
                                    </div>
                                    <div className="col-8">
                                        <p className="stack-list">Javascript  |  <span className="text-grey">HTML & CSS</span>  |  Bootstrap  |  <span className="text-grey">ReactJS</span>  |  Redux</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-2 stack-title-container">
                                        <p className="stack-title">App-Developement:</p>
                                    </div>
                                    <div className="col-8">
                                        <p className="stack-list">React-Native (Typescript)</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-2 stack-title-container">
                                        <p className="stack-title">Data Analytics:</p>
                                    </div>
                                    <div className="col-8">
                                        <p className="stack-list">Python  |  <span className="text-grey">Java(OOP)</span>  |  Postman(API Calling)</p>
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
            <div className="past-project-container container">
                <div className="row">
                    <p className="headline">Past Projects</p>
                </div>
                <div className="row project-container">
                    <div className="heading-frame col-3">
                    </div>
                    <div className="col-8 description-box">
                        <div className="row project-title-container">
                            <p className="stack-title-container">Clash Royale Deck Analysis (Python)</p>
                        </div>
                        <div className="row">
                            <p className="project-content">This data analysis project involved the extraction of real-time player information using various Postman API calls, capturing details such as player decks, win-lose rates, and other essential metrics. Subsequent to this data acquisition, a meticulous filtering and cleaning process was implemented based on predefined project criteria, resulting in a dataset presented in a readable and interpretable format. The final phase of the project encompassed applying machine learning techniques to derive key predictions. These predictions aimed to unveil the playing styles that lead to the highest win rates, considering factors like deck configurations and elixir management. The synergy of data extraction, cleaning, and predictive modeling culminated in a comprehensive analysis of Clash Royale gameplay dynamics</p>
                        </div>
                        <div className="row">
                            <div className="col-2">
                                <IntroButton title="Github"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row project-container">
                    <div className="heading-frame col-3 oop">
                    </div>
                    <div className="col-8 description-box">
                        <div className="row project-title-container ">
                            <p className="stack-title-container ">Camp Coordination OOP(Java)</p>
                        </div>
                        <div className="row">
                            <p className="project-content">This project not only highlights my expertise in Java development but also underscores my dedication to crafting clean, maintainable code that adheres to industry best practices and principles. I meticulously applied SOLID principles while designing classes, ensuring that the application operates seamlessly and cohesively.

                                This collaborative effort involved two additional team members, and collectively, we invested over 100 hours in the production phase, diligently addressing bugs and conducting thorough debugging. Our commitment to excellence was evident throughout the development process, as we continually strived to meet high standards and deliver a polished, robust solution.</p>
                        </div>
                        <div className="row">
                            <div className="col-2">
                                <IntroButton title="Github"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}