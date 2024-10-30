import React, {useEffect, useState} from 'react';
import {useGSAP} from "@gsap/react";
import { gsap } from "gsap"
import {heroVideo, smallHeroVideo} from "../utils/index.js";

const Hero = () => {

    const [videoSrc, setVideoSrc] = useState(
        window.innerWidth < 760 ? smallHeroVideo : heroVideo
    )

    useGSAP(()=>{
        gsap.to('#hero',{opacity:1, delay: 2.5, ease: "power1"})
    },[])

    const handleVideoSrcSet = () => {
        if (window.innerWidth < 760){
            setVideoSrc(smallHeroVideo)
        }else {
            setVideoSrc(heroVideo)
        }
    }

    useEffect(() => {
        window.addEventListener('resize', handleVideoSrcSet)

        return () => {
            window.removeEventListener('resize', handleVideoSrcSet)
        }
    }, []);

    return (
        <section className="w-full nav-height bg-black relative">
            <div className="h-5/6 w-full flex-center flex-col">
                <p id="hero" className="hero-title">iPhone 15 pro</p>
                <div className="md:w-10/12 w-9/12">
                    <video className="pointer-events-none" autoPlay muted playsInline={true} key={videoSrc}>
                        <source src={videoSrc}/>
                    </video>
                </div>
            </div>
        </section>
    );
};

export default Hero;