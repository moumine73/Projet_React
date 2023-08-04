import React from 'react'
import { RouteObject, useRoutes } from 'react-router-dom'
import HeroLists from '../pages/HeroLists'
import HeroDetails from '../pages/HeroDetails'

const Router = () => {

    const routes: RouteObject[] = [
        {
            path: "/",
            element: <HeroLists />
        },
        {
            path: "/:id",
            element: <HeroDetails />
        }
    ]

  return (
    <div>{useRoutes(routes)}</div>
  )
}

export default Router