import React from 'react'
import App3 from './App3'
import { Route } from 'react-router-dom'
import App2 from './App2'

export default function App() {
    return (
        <div>
            <Route exact path='/' component={App2}/>
            <Route exact path='/try' component={App3}/>
        </div>
    )
}
