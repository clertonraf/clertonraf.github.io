import React from "react"

const useViewPortMobile = () =>
  React.useEffect(
    () => {
      const resize = () => {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
      }
      window.addEventListener("resize", resize)
      return () => window.removeEventListener('resize', resize);
    }, []
  )

  export default useViewPortMobile
