import React from "react"
import Footer from "../components/footer";
import Layout from "../components/layout"
import MidLayout from "../components/midlayout"
import Speakers from "../components/speakers";
import "../styles/scss/default.scss"

export default function Home() {
  return (
    <div>
      <Layout>
        <h1 style={{color: 'white'}}>Welcome to HackMT's Website</h1>
        
        <p>
          Join us Janurary 22nd-24th and create awesome projects with industry professionals from companies such as x, y, and z.
        </p>
      </Layout>

      <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#0099ff" fill-opacity="1" d="M0,32L288,128L576,160L864,64L1152,288L1440,160L1440,320L1152,320L864,320L576,320L288,320L0,320Z"></path>
        </svg>

        <MidLayout>
          <h1 id="speakers">Speakers</h1>
          <p>Meet some of the industry professionals you will hear from</p>

          <Speakers></Speakers>


          <h1 id="schedule">Schedule</h1>

          <div id="roundMe">
            <table>
            <caption>Friday</caption>
              <tr>
                <th>Name</th>
                <th>Speaker(s)</th>
                <th>Time</th>
              </tr>
              <tr>
                <td>Event Kickoff Ceremony</td>
                <td>Jacob Cuomo</td>
                <td>12:00 PM</td>
              </tr>
              <tr>
                <td>The Industry</td>
                <td>Oliver Gladwell</td>
                <td>1:30 PM</td>
              </tr>
              <tr>
                <td>Intro to Using Git</td>
                <td>Jacob Cuomo</td>
                <td>4:00 PM</td>
              </tr>
              <tr>
                <td>Some Event</td>
                <td>Jackson</td>
                <td>5:00 PM</td>
              </tr>
              <tr>
                <td>Some Event 2</td>
                <td>Henry</td>
                <td>5:00 PM</td>
              </tr>
              <tr>
                <td>Some Event 3</td>
                <td>Jackson</td>
                <td>5:00 PM</td>
              </tr>
              <tr>
                <td>Some Event 4</td>
                <td>Jackson</td>
                <td>5:00 PM</td>
              </tr>
            </table>
          </div>
          
        </MidLayout>
      </div>

      <Footer></Footer>
    </div>

  );
}