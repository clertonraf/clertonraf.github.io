import React from "react"

const Footer = () =>
  <footer className="flex justify-center pb-8">
    © {new Date().getFullYear()}{`, Built with `}<a href="https://www.gatsbyjs.org">Gatsby</a>
      {` and `}
      <a target="_blank" rel="noopener noreferrer" href="https://icons8.com">Icons8</a>
  </footer>

export default Footer
