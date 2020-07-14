import React from "react"
import { useDarkMode } from "../DarkMode"
import { useStaticQuery, graphql } from "gatsby"

const Home = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const [isDarkMode] = useDarkMode()
  return <span
    className={isDarkMode
      ? "font-cursive text-5xl md:text-9xl dark:text-white pb-24"
      : "font-cursive text-5xl md:text-9xl light:text-white pb-24"  
    }
  >
    {data?.site?.siteMetadata?.title}
  </span>
}

export default Home
