import React, { createContext, useState } from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import './App.css';
import Instructions from './Components/Instructions';
import FunctionCom from './Components/FunctionComp';
import Data from './Data';
import AnimalCard from './AnimalCard';
import Alert from './Components/Alert';
import CartSuccess from './Components/CartSuccess';
import Product from './Components/Product';
import ReactState from './Components/ReactState';
import PracticeUSeState from './Components/PracticeUseState';
import UseReducer from './Components/UseReducer';
import Todo from './Components/Todo';
import Navigation from './Components/Custom_Salad_Builder/Navigation';
import SaladMaker from './Components/Custom_Salad_Builder/SaladMaker'
import UserContext from './Components/Custom_Salad_Builder/User';
import ThemeProvider from './Components/Custom_Salad_Builder/Practice_UseContext/ThemeProvider';
import UseContext from './Components/Custom_Salad_Builder/Practice_UseContext/UseContext';
import TextInformation from './Components/TextApp.jsx/TextInformation';
import FileNamer from './Components/Validating_Components/FileNamer';
import FetchData from './Components/UseEffectHook.jsx/FetchData';
import Form from './Components/ReactForm/Form';
import DisplayRiver from './Components/Loading_ Asynchronous_Data/DisplayRiver';
import DisplayData from './Components/Local_Api/DisplayData';
import DisplayBirdWatcher from './Components/BirdWatcher/DisplayBirdWatcher';
import Manatee from './Components/React_Router/Manatee';
import Narwhal from './Components/React_Router/Narwhal'
import Whale from './Components/React_Router/Whale'
import Dashboard from './Components/Login_Page/Dashboard';
import Preferences from './Components/Login_Page/Preferences';
import DisplayLogin from './Components/Login_Page/DisplayLogin';
import DisplayTextAnalyzer from './Components/Text_Analyzer/DisplayTextAnalyzer';

export const ThemeContext = React.createContext();
export const TextContext = createContext();

function showAdditionalDetails(additional) {
  if (additional != null) {        // handle error if additional is not defined
    const alertInformation = Object.entries(additional)
      .map(information => `${information[0]}: ${information[1]}`).join('\n');
    alert(alertInformation)
  }
}

const displayEmojiId = event => alert(event.target.id);
const name = [
  "Sushant Chaudhary",
  "Amit Rawat",
  "Rahul Rana"
]
const emojis = [
  {
    emoji: "😭",
    name: "crying emoji"
  },
  {
    emoji: "😊",
    name: "smiling"
  }
]

const user = {
  name: 'Sushant',
  favorites: ['avocado', 'carrot']
}

function App() {
  const [text, setText] = useState('');
  TextContext.displayName = 'TextContext';
  const ide = "unique";
  const wrapper = {
    padding: 20
  }
  return (
    <>
      <div className='container'>
        <span id={ide}>hello</span> {/*assign variable and reference an attribute.*/}

        {/* Adding events to elements */}
        <button onClick={displayEmojiId}>
          <span id="laughing-emoji">
            😀
          </span>
        </button>

        <button onClick={displayEmojiId}>
          <span id='crying-emoji'>😭</span>
        </button>

        {/* Mapping Over Data to Create Elements */}
        <div>
          {name.map(name => <div key={name}>{name}</div>)}
        </div>

        <div>
          {emojis.map(emoji => <div key={emoji.name}>{emoji.emoji}</div>)}
        </div>

        {/* Create custom component in react */}
        <Instructions />
        <FunctionCom />

        {/* Building dynamic component with props */}
        <div className='animal'>
          {Data.map(Animal => <AnimalCard
            key={Animal.name}
            name={Animal.name}
            size={Animal.size}
            diet={Animal.diet}
            additional={Animal.additional}
            scientificName={Animal.scientificName}
            showAdditional={showAdditionalDetails}
          />)}
        </div>
        <div className='alert' style={wrapper}>
          <Alert title="Items not Added" type="error">
            {/* {alert("Item are out of stock")} */}
            <div>Item are out of stock</div>
          </Alert>
          <CartSuccess />
          <Product />
          <ReactState />
          <PracticeUSeState />
          <UseReducer />
          <Todo />
          <div className='salad-maker'>
            <UserContext.Provider value={user}>
              <Navigation />
              <SaladMaker />
            </UserContext.Provider>
          </div>
          <ThemeProvider>
            <UseContext />
          </ThemeProvider>
        </div>
        <TextContext.Provider value={text}>
          <div className="wrapper">
            <label htmlFor="text">
              Add Your Text Here:
              <textarea
                id="text"
                name="text"
                rows="10"
                cols="100"
                onChange={e => setText(e.target.value)}
              >
              </textarea>
            </label>
            <TextInformation />
          </div>
        </TextContext.Provider>
        <FileNamer />
        <FetchData />
        <Form />
        <DisplayRiver />
        <DisplayData />
        <DisplayBirdWatcher />
        <DisplayLogin />
        <DisplayTextAnalyzer />
        <div className='nav' style={{border: '1px solid black', width: '30vw', height: '30vh', padding: '20px'}}>
            <h1>Marine Mammals</h1>
          <li><Link to='/manatee'>Manatee</Link></li>
          <li><Link to='/narwhal'>Narwhal</Link></li>
          <li><Link to='/whale'>Whale</Link></li>
          <li><Link to='/whale/beluga'>Beluga Whale</Link></li>
          <li><Link to='/whale/blue'>Blue Whale</Link></li>

          <div className='router'>
            <Routes>
              <Route path='/manatee' element={<Manatee />} />
              <Route path='/narwhal' element={<Narwhal />} />
              <Route exact path='/whale' element={<Whale />} />
              <Route path='/whale/:type' element={<Whale />} />
              <Route path='/dashboard' element={<Dashboard/>} />
              <Route path='/preferences' element={<Preferences/>} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
