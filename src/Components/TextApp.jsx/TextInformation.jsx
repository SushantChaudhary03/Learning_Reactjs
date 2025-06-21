import React, {useReducer} from "react";
import CharacterCount from "./CharacterCount";
import CharacterMap from "./CharacterMap";
import WordCount from "./WordCount";

const reducer = (state, action)=>{
    return {
        ...state,
        [action]: !state[action]
    }
}
export default function TextInformation({show}){
    const [tab, toggleTab] = useReducer(reducer, {
        characterCount: true,
        wordCount: true,
        characterMap: true
    })
    return(
        <div>
            <button onClick={()=> toggleTab('characterCount')}>Character Count</button>
            <button onClick={()=> toggleTab('wordCount')}>Word Count</button>
            <button onClick={()=> toggleTab('characterMap')}>Character Map</button>
            <CharacterCount show={tab.characterCount}/>
            <WordCount show={tab.wordCount}/>
            <CharacterMap show={tab.characterMap}/>
        </div>
    )
}