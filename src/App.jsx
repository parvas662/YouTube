
import { Provider } from 'react-redux'
import './App.css'
import Body from './Components/Body/Body.jsx'
import NavBar from './Components/navBar/NavBar.jsx'
import store from './utils/store.js'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainContainer from './Components/MainContainer/MainContainer.jsx'
import WatchPage from './Components/Body/WatchPage.js/WatchPage.jsx'

function App() {

  return (
    <>
      <Provider store={store}> 
        <NavBar/>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Body/>}> 
              <Route path="/" element={<MainContainer/>}> </Route>
              <Route path="/watch" element={<WatchPage/>}> </Route>
            </Route>
          </Routes>
        </BrowserRouter> 
      </Provider>
    </>
  )
}

export default App
