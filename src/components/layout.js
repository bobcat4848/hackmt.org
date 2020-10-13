import React from "react"
import { Link } from "gatsby"
import "../styles/scss/navbar.scss"


const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default function Layout({ children }) {
  return (
    <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
      <header style={{ marginBottom: `1.5rem` }}>
          <img alt="" style={{ display: `inline` }}src="https://i.imgur.com/8XXjiOB.png"></img>
        <ul style={{ listStyle: `none`, float: `center` }}>
          <ListLink to="#speakers">Speakers</ListLink>
          <ListLink to="#sponsors">Sponsors</ListLink>
          <ListLink to="#schedule">Schedule</ListLink>
        </ul>
      </header>
      {children}
    </div>
  )
}