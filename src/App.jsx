import './App.css'

function App() {
  const ide = "unique";
  return (
    <>
      <div className='container'>
        <span id={ide}>hello</span> {/*assign variable and reference an attribute.*/}

        {/* Adding events to elements */}
         <button onClick={event => alert(event.target.id)}>
            <span role="img" aria-label="grinning face" id="emoji">
              😀
            </span>
          </button>
      </div>
    </>
  )
}

export default App
