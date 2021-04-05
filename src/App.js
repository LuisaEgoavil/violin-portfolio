import React from "react";
import Header from  './components/Header'
import Footer from './components/Footer'
import About from './pages/About'
import Home from './pages/Home'
import Impressum from './pages/Impressum'
import Kontakt from './pages/Kontakt'
import Unterricht from './pages/Unterricht'
import Vita from './pages/Vita'
import Willkommen from './pages/Willkommen'
import {Switch, Route, withRouter} from 'react-router'
import './App.css'

function App () {
  return (
    <div>
      <div className="name-title">
        <h1>Luisa Egoavil</h1>
        <p>Volinistin und Geigenlehrerin</p>
      </div>
      <Header />

      <Switch>
        <Route exact path="/" render={()=> {
          return <Home />
        }}/>
        <Route exact path="/uebermich" render={()=> {
          return <About />
        }}/>
        <Route exact path="/impressum" render={()=> {
          return <Impressum />
        }}/>
        <Route exact path="/kontakt" render={()=> {
          return <Kontakt />
        }}/>
        <Route exact path="/unterricht" render={()=> {
          return <Unterricht />
        }}/>
        <Route exact path="/vita" render={()=> {
          return <Vita />
        }}/>
        <Route exact path="/willkommen" render={()=> {
          return <Willkommen />
        }}/>
      </Switch>

      <Footer />
    </div>
  )
}
export default withRouter(App)
