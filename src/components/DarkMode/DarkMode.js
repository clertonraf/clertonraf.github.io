import React from "react"
import light from '../../images/icons8-baby-yoda.svg'
import dark from '../../images/icons8-darth-vader.svg'

const DarkModeContext = React.createContext()

export const useDarkMode = () => React.useContext(DarkModeContext)

export const DarkModeTheme = ({ children }) => {
  const [isDarkMode, setDarkMode] = React.useState(global?.localStorage?.getItem('darkMode') === 'true')
  return <DarkModeContext.Provider value={[ isDarkMode, setDarkMode ]}>
    {children}
  </DarkModeContext.Provider>
}

const DarkMode = ({ className, iconClassName }) => {
  const [isDark, toogleDarkMode] = useDarkMode()
  return <button
    className={className}
    aria-label={isDark ? "Do or do not. There is no try." : "You don't know the power of the dark side!"}
    title={isDark ? "Do or do not. There is no try." : "You don't know the power of the dark side!"}
    onClick={() => toogleDarkMode(!isDark)}
  >
    <img alt="dark-mode" src={isDark ? light : dark} className={iconClassName}/>
  </button>
}


export default DarkMode