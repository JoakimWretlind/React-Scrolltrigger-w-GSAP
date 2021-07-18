import { cardsData } from './Cards'
import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import {
    CardContainer,
    Card,
    CardH2
} from "./Styling"

gsap.registerPlugin(ScrollTrigger);

const MainContents = () => {
    const revealRefs = useRef([])
    revealRefs.current = [];

    useEffect(() => {
        revealRefs.current.forEach((el, index) => {
            gsap.fromTo(el, {
                autoAlpha: 0
            }, {
                duration: 1,
                autoAlpha: 1,
                ease: 'none',
                scrollTrigger: {
                    id: `section-${index + 1}`,
                    trigger: el,
                    start: 'top center+=100',
                    toggleActions: 'play none none reverse',
                    // markers: true
                }
            })
        })
    }, [revealRefs])

    const addToRefs = (el) => {
        if (el && !revealRefs.current.includes(el)) {
            revealRefs.current.push(el)
        }
    }

    return (
        <>
            <CardContainer>
                {cardsData.map(item => {
                    return <Card key={item.id} ref={addToRefs}>
                        <CardH2>{item.title}</CardH2>
                    </Card>
                })}
            </CardContainer>
        </>
    )
}

export default MainContents
