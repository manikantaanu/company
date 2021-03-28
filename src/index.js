import ReactDOM from 'react-dom'
import React from 'react'

//If only one tag it will take that tag like return{<h1>data</h1>}
//If multiple tags available we can take parent tag like return{<div><h1></h1><p></p></div>}
// By using fragment we can avoid the extra tags like div in above example
//If we use React.fragment no import in react
//If we use fragment ,we need to import the fragment
//we can replace the (<> </>) empty tags as fragment to avaoid the memory allocation

//Import Bootstrap packages


import './../node_modules/bootstrap/dist/css/bootstrap.min.css'

// Calling Routing.js
import Routing from './components/Routing'


ReactDOM.render(<Routing/>,document.getElementById("root"));
