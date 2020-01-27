import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default () => (
  <div style={{ color: `purple` }}>
    <Link to="/contact/">Contact</Link>
    <Header headerText="Hello World!" />
    <p>learning... by making this site, please be patient:p</p>
    <img src="https://source.unsplash.com/random/400x200" alt="" />
  </div>
)
