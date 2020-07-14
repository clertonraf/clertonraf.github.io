import React from "react"
import Home from "../components/Home"
import Layout from "../components/Layout"
import { DarkModeTheme } from "../components/DarkMode"

const IndexPage = () =>
  <DarkModeTheme>
    <Layout>
      <Home />
    </Layout>
  </DarkModeTheme>

export default IndexPage
