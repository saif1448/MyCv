
import './App.css'
import BasicInfo from './components/basicInfo/BasicInfo'
import Education from './components/education/Education'
import Experience from './components/experience/Experience'
import ProjectDetails from './components/projectDetails/ProjectDetails'
import Research from './components/researchAndPublication/Research'
import MainOutlet from './layout/MainOutlet'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainOutlet />,
    children:[
      {
        index: true,
        element: <BasicInfo />
      },
      {
        path:"education",
        element: <Education />
      },
      {
        path:"experience",
        element: <Experience />
      },
      {
        path:"projects",
        element: <ProjectDetails />
      },
      {
        path:"research",
        element: <Research />
      },

    ]
  }
])

function App() {


  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
