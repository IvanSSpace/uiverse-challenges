import reference from './assets/reference.png'
import './App.css'
import { KeyboardButton } from './keyboardButton/KeyboarButton'

function App() {
  return (
    <>
      <div>Hello World</div>
      <div className="container">
        <img src={reference} alt="refresh" />
        <KeyboardButton />
      </div>
    </>
  )
}

export default App
