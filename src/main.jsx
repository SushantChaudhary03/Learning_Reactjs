import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import birdApp from './Components/BirdWatcher/Bird.jsx'
import { BrowserRouter } from 'react-router-dom'

const store = createStore(birdApp)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
