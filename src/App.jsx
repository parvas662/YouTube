
import { Provider } from 'react-redux'
import './App.css'
import Body from './Components/Body/Body.jsx'
import NavBar from './Components/navBar/NavBar.jsx'
import store from './utils/store.js'

function App() {

  return (
    <>
      <Provider store={store}> 
        <NavBar/>
        <Body />
      </Provider>
    </>
  )
}

export default App
