import { useEffect, useRef } from 'react';
import atxJpg from '../images/atx.jpg';
import '../css/header.css';

export default function Header() {

    const animateRef = useRef();

    useEffect(() => {
        animateRef.current.classList.add('animate');
    }, [])

    return (
        <header style={{backgroundImage: `url(${atxJpg})`}}>
          <div className='intro'>
            <span>Hi, I'm</span>
            <h1 ref={animateRef}>Heather Engle</h1>
            <h2>A design-obsessed front end UX engineer with 10+ years experience</h2>
          </div>
         
        </header>
    )
}