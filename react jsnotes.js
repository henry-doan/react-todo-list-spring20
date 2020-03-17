Tools
  node
  react 
  react DOM
  webpack 
  babel  
  yarn / npm 
  create-react-app
    Boiler plate

    create-react-app my-app
    npm init react-app my-app
    yarn create react-app my-app

  Google Chrome

  React Dev Tools




ReactJS is a library , NPM package
  "Just JavaScript" 



React provides a declarative API complete with 
  state control and 
  lifecycle methods to control the render flow.



What about other solutions:
  Angular
  Ember
  View
  etc...
  




Key Principles 
  Declarative.  
  Composability
  1 Way data flow (props)
  Virtual DOM
    DOM - Document object model 
  State - Storage 
  Props - Properties passed down from parent child 
  JSX
    js ver erb 
    <div className=''>
      { }
    </div>
  Components









Logical Component ( Stateful component )
  do logic 
  state 
  lifecycle Methods
  class 


Presentational Component ( stateless component )
  displaying onto the screen  
  const



counter 
  inc
  dec 
  store number num value




HOC 
  Higher ordered component

State - storage { users: [], firstName: '' }
  JS Object we can store properties in
  Component Storage
  When a value changes in state, render is called


Props 
  Properties passed down parent to child
  One way 
  Read only 


app
 counter
 counter
 counter
 counter
 counter
 counter
 counter



  /*                 Todo List Structure
  state 
                          Index
                            |
                           App
                           /  \
                    TodoForm   List
                                 |
                                Todo

  */