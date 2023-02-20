import { Card, ThemeToggle } from './components'
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, brands } from '@fortawesome/fontawesome-svg-core/import.macro' 
import { ExchangeScss, FnbJs, inmoCode, TifbJs, TifbScss } from './codeSamples';
import local from './images/local-chart.png';
import exchange from './images/exchange.jpg';
import inmo from './images/inmo.jpg';
import tifb from './images/tifb.png';
import henning from './images/henning.jpg';

function App() {

  return (
      <main>
        <nav>
          <ThemeToggle />
          
          <a href={`${process.env.PUBLIC_URL}/HeatherEngleResume.pdf`} title="Download my resume" rel="noopener" target="_blank">
            <FontAwesomeIcon icon={solid('file-pdf')} />
          </a>
          
          <a href="https://www.instagram.com/heatherengle" rel="noopener" target="_blank" title="Follow me on Instagram">
            <FontAwesomeIcon icon={brands('instagram')} />
          </a>
          <a href="https://www.github.com/haengle" rel="noopener" target="_blank" title="Find me on github">
          <FontAwesomeIcon icon={brands('github')} />
          </a>
          
         
      </nav>
        <header>
        
          <div className='intro'>
            <span> Hi 👋, I'm</span> 
            <h1>Heather Engle</h1>
            <h2>A <em>design-focused</em> front end developer</h2>
            <h3>in Austin, TX 🤠</h3>
          </div>
          <div className='contact'>
            <p>I focus on <em>UX & Accessibility</em>, with a passion for delivering <em>exceptional user experiences.</em> <a href="mailto:h.a.engle@gmail.com" title="Email me">
            Email me
          </a>, find me on <a href="https://www.linkedin.com/in/heatherengle" rel="noopener" target="_blank" title="LinkedIn">
          LinkedIn
          </a>, or meet my <a href="https://keen-melba-f0a407.netlify.app/" rel="noopener" target="_blank" title="Meet my cats">
           cats
          </a>.</p>
          </div>
        </header>

        <section className='contents'>
          <Card 
            title="This is INMO+"
            summary="'This is INMO+' is the client-facing marketing site used to drive sales for Kasasa's online account opening product, INMO+. As the lead engineer, I worked with internal stakeholders to bring the approved design mockups to life. I worked closely with the lead designer to build custom SVG animations with GSAP and ScrollMagic."
            siteLink="https://www.thisisinmoplus.com"
            video={`${process.env.PUBLIC_URL}/videos/inmoplus.webm`}
            videoFallback={inmo}
            codeJs={inmoCode}
          />

          <Card 
            title="This is FIRSTBranch"
            summary="'This is FIRSTBranch' is the customer-facing marketing site used to drive sales for Kasasa's website product, FIRSTBranch. As the lead engineer, I worked with internal stakeholders to bring the approved design mockups to life by leveraging custom SVG animations and scroll interaction."
            siteLink="https://www.thisisfirstbranch.com"
            video={`${process.env.PUBLIC_URL}/videos/tifb.webm`}
            videoFallback={tifb}
            codeJs={TifbJs}
            codeCss={TifbScss}
          />  

          <Card 
            title="The LOCAL Credit Union"
            summary="The default comparison chart on FIRSTBranch sites was the same for every client, even those who had a Kasasa suite of checking products.
            I created a new chart style that
            leveraged existing Bootstrap classes and components, resulting in a
            more eye-catching page that highlights the most important account features first."
            siteLink="https://www.thelocalcreditunion.com/accounts/personal-checking/compare-accounts.html"
            image={local}
            imageDesc="The LOCAL Credit Union's comparison chart"
          />    

          <Card 
            title="Exchange Bank"
            summary="This custom promotional area displays a different image when each feature is interacted with, I created a CSS-only solution for the transitions while keeping the area client-editable in the CMS."
            siteLink="https://www.thelocalcreditunion.com/accounts/personal-checking/compare-accounts.html"
            image={exchange}
            codeCss={ExchangeScss}
            imageDesc="Exchange bank homepage"
          />  
          <Card 
            title="First National Bank"
            summary="I created a custom CSS-based animation for the homepage banner and a jQuery/CSS solution for features that fade in as the user scrolls."
            siteLink="https://www.fnbhenning.com"
            video={`${process.env.PUBLIC_URL}/videos/fnb.webm`}
            videoFallback={henning}
            codeJs={FnbJs}
          />   
        </section>

        <footer>
          <p>
            &copy; {new Date().getFullYear()} Heather Engle. Built with React
          </p>
        </footer>
    </main>
  );
}
export default App;