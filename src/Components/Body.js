import React from 'react'
// import Header from './Header'
import Browse from '../Browse'
import Error from './Error'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './Login'

const Body = () => {

    const appRouter = createBrowserRouter([
        {
            path:"/",
            element:<Login/>
        },
        {
            path:"/browse",
            element:<Browse/>,
            errorElement:<Error/>
        }
    ])

  return (
    <div>
      <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body;