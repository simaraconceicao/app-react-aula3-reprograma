import React from 'react'
import { BrowserRouter, Switch, Route} from 'react-router-dom'

import Home from '../pages/Home'
// import Gif from '../pages/Gif'
import Simpsons from '../pages/Simpsons'

function Routes() {
    return(
        <BrowserRouter>
        <Switch>
            <Route exact path='/'  component={Home}/>
            {/* <Route path='/gif' component={Gif}/> */}
            <Route path='/simpsons' component={Simpsons}/>
        </Switch>
        </BrowserRouter>
    )
    
}

export default Routes