import { Card, Nav, Header, Contact } from './components'
import './App.css';
import { ExchangeScss, FnbJs, inmoCode, TifbJs, TifbScss } from './codeSamples';
import local from './images/local-chart.png';
import exchange from './images/exchange.jpg';
import inmo from './images/inmo.jpg';
import tifb from './images/tifb.png';
import henning from './images/henning.jpg';

function App() {

  return (
      <>
        <Nav />

        <Header />

        <main>

        <Contact />

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
            siteLink="https://www.ebt.bank/"
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
        </main>

        <footer>
          <p>
            &copy; {new Date().getFullYear()} Heather Engle. Built with React
          </p>
        </footer>
    </>
  );
}
export default App;