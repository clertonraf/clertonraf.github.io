import React from "react"
import { DarkModeTheme } from "../components/DarkMode"
import Layout from "../components/Layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <DarkModeTheme>
    <Layout>
      <SEO title="404: Not found" />
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  </DarkModeTheme>
)

export default NotFoundPage
