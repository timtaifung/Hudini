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
                <p className="intro-content">My name is Timothy Nyan. I am a Inspiring Web Developer based in Singapore. I am currently a sophomore Studying in Nanyang Technology University (NTU), majoring in Computer Engineering. I am constantly seeking opportunities to enhance my knowledge and skills in the field, and I would be delighted to connect with individuals who can offer valuable insights or potential prospects for my future endeavors. I am also open to sharing my resume to showcase my capabilities and experiences.</p>
            </div>
            <div className="row">
                <div className="col-2">
                    <IntroButton title="Linkedin"/>
                </div>
                <div className="col-2">
                    <IntroButton title="GitHub"/>
                </div>
                <div className="col-2">
                    <IntroButton title="Resume"/>
                </div>
            </div>
        </div>
    )
}