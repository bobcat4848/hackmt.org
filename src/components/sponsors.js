import React from "react"
import eventbrite from '../images/eventbrite.png'; // Tell Webpack this JS file uses this image


export default function Sponsors() {
  return (
    <div class="flexS">
      <div class="sponsor">
        <img alt="" src={eventbrite}></img>
      </div>
    </div>
  )
}