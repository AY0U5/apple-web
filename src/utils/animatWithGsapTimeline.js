import {ScrollTrigger} from "gsap/ScrollTrigger";
import {gsap} from "gsap";
gsap.registerPlugin(ScrollTrigger)

export const animateWithGsap= (target , animationProps , scrollProps)=>{
    gsap.to(target, {
        scrollTrigger:{
            trigger: target,
            toggleActions: "restart none none none",
            ...scrollProps
        },
        ...animationProps
    })
}


export const animateWithGsapTimeline = (timeline, rotationRef, rotationState, firstTarget, secondTarget, animationProps) => {
    timeline.to(rotationRef.current.rotation, {
        y: rotationState,
        duration: 1,
        ease: 'power2.inOut'
    })

    timeline.to(
        firstTarget,
        {
            ...animationProps,
            ease: 'power2.inOut'
        },
        '<'
    )

    timeline.to(
        secondTarget,
        {
            ...animationProps,
            ease: 'power2.inOut'
        },
        '<'
    )
}