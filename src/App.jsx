import React from 'react';
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

function showAdditionalDetails(additional){
  if(additional != null){        // handle error if additional is not defined
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

function App() {
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
            <span  id='crying-emoji'>😭</span>
          </button>

          {/* Mapping Over Data to Create Elements */}
          <div>
            {name.map(name=> <div key={name}>{name}</div>)}
          </div>

          <div>
            {emojis.map(emoji=> <div key={emoji.name}>{emoji.emoji}</div>)}
          </div>

          {/* Create custom component in react */}
          <Instructions />
          <FunctionCom />

          {/* Building dynamic component with props */}
          <div className='animal'>
            {Data.map(Animal=> <AnimalCard
             key={Animal.name} 
             name={Animal.name}
             size = {Animal.size}
             diet = {Animal.diet}
             additional = {Animal.additional}
             scientificName = {Animal.scientificName}
             showAdditional = {showAdditionalDetails}
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
            <Navigation />
            <SaladMaker />
            </div>
          </div>
      </div>
    </>
  )
}

export default App
