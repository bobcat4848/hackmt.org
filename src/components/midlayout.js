import React from "react"
import "../styles/scss/midlayout.scss"


export default function MidLayout({ children }) {
  return (
    <div id="content">
      <div style={{ margin: `auto`, marginTop: `0rem`, paddingBottom: `2rem`, maxWidth: 650, padding: `0 1rem`, paddingTop: `0rem` }}>
        {children}
      </div>
    </div>
  )
}