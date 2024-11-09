
import reference from './assets/reference.png'
import './App.css'

function App() {

  return (
    <>
      <div>Hello World</div>
      <div className="container">
        <img src={reference} alt="refresh" />
      <div className="button">
        <div className="icon">
          {/* <img src={bluetooth} alt="bluetooth" /> */}
        </div>
        <div className="led"></div>
        </div>
      </div>
    </>
  )
}

export default App
