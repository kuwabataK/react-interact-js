import React, { CSSProperties } from 'react'
import logo from './logo.svg'
import './App.css'
import { useInteractJS } from './hooks'

const position = {
  position: 'relative' as CSSProperties['position']
  // width: '100%' ,
  // height: '100%'
}

const App: React.FC = () => {
  const int = useInteractJS({width:200})

  return (
    <div className="App">
      <header className="App-header" style={position}>
        <button onClick={() => int.enable()}>有効化</button>
        <button onClick={() => int.disable()}>無効化</button>
        <div style={position}>
          <img
            ref={int.interactRef}
            style={int.interactStyle}
            src={logo}
            className="App-logo"
            alt="logo"
          />
        </div>
      </header>
    </div>
  )
}

export default App
