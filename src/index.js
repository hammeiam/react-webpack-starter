import React from 'react'
import {render} from 'react-dom'
import ExampleComponent from './ExampleComponent'

document.addEventListener('DOMContentLoaded', function(){
  render(
    <ExampleComponent />,
    document.getElementById('app')
  )
})