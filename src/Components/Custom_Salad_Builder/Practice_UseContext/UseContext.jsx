import React from 'react'
import {useTheme, useThemeUpdate} from './ThemeProvider'


const UseContext = () => {
  const darkTheme = useTheme();
  const toggleTheme = useThemeUpdate()
  const themeSyle = {
    backgroundColor: darkTheme? '#333':'#ccc',
    color: darkTheme? '#ccc': '#333',
    width: "60vw",
    height: "40vh",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
  return (
    <div className='theme'>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <div style={themeSyle}>Theme</div>
    </div>
  )
}

export default UseContext