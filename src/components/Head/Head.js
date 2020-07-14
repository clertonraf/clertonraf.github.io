import React from "react"
import { Link } from "gatsby"
import DarkMode from "../DarkMode"

const LANGUAGES = [
  { title: "DE", link: "/de" },
  { title: "EN", link: "/en" },
  { title: "PT-BR", link: "/pt-BR" },
]

const Head = ({ className }) => {
  return <div className={className}>
  <div className="p-2">
    {LANGUAGES.map(
      (language) => <Link
        activeStyle={{ color: "red" }}
        className="px-1"
        to={language.link}
      >{language.title}</Link>
    )}
  </div>
  <DarkMode
    className="focus:outline-none p-2"
    iconClassName="h-12 w-12 troke-current text-purple-500"
  />
</div>
}

export default Head
