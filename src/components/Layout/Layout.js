import React from "react"
import { useDarkMode } from "../DarkMode"
import SEO from "../seo"
import Head from "../Head"
import Footer from "../Footer"

const Layout = ({ children }) => {
  const [isDarkMode] = useDarkMode()
  return <div className={isDarkMode
      ? "flex dark:bg-black h-screen flex-col"
      : "flex light:bg-white h-screen flex-col"}
    >
      <SEO title="Clerton's Web Site"/>
      <Head className="flex flex-row items-center justify-between" />
      <main className="flex flex-grow justify-center items-center">
        {children}
      </main>
      <Footer />
  </div>
}

export default Layout