import React from "react"
import Footer from "../components/footer";
import Layout from "../components/layout"
import MidLayout from "../components/midlayout"
import Speakers from "../components/speakers";
import Sponsors from "../components/sponsors";
import RegisterButton from "../components/register";
import "../styles/scss/default.scss"

export default function Home() {
  return (
    <div>
      <Layout>
        <h1 style={{color: 'white'}}>Welcome to HackMT's Website</h1>
        
        <p>Join us Janurary 22nd-24th and create awesome projects with industry professionals.</p>

        <RegisterButton/>
      </Layout>

      <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#0099ff" fill-opacity="1" d="M0,32L288,128L576,160L864,64L1152,288L1440,160L1440,320L1152,320L864,320L576,320L288,320L0,320Z"></path>
        </svg>

        <MidLayout>
          <h1 id="speakers">Speakers</h1>
          <p>Meet some of the industry professionals you will hear from</p>
          <div id="roundMe" style={{marginBottom: '50px'}}>
            <table>
              <caption>The speaker list is currently under works, keep checking back to see new updates.</caption>
            </table>
          </div>

          <h1 id="sponsors">Sponsors</h1>
          <p>Take a look at the companies that made this event possible</p>
          <Sponsors/>

          <h1 id="schedule">Schedule</h1>

          <div id="roundMe">
            <table>
              <caption>The schedule is currently under works, keep checking back to see new updates.</caption>
            </table>
          </div>
          
          <h5>If you have not already registered, please do so at the link below</h5>
          <RegisterButton/>

        </MidLayout>
      </div>

      <Footer></Footer>
    </div>

  );
}