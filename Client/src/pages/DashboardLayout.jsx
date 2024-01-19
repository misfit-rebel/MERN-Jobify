import { Outlet } from "react-router-dom"
import Wrapper from '../assets/wrappers/Dashboard'
import { BigSidebar,Navbar,SmallSidebar } from "../components"
import { createContext, useContext, useState } from "react"

const DashboardContext = createContext()

const DashboardLayout = () => {
  //temp
    const user = {name:'john'}
    const [showSidebar,setShowSidebar] = useState(false)
    const [isDarkTheme,setIsDarkTheme] = useState(false)

    const toggleDarkTheme = ()=>{
        console.log('toggle dark theme');
    }

    const toggleSideBar = ()=>{
        setShowSidebar(!showSidebar)
    }

    const logoutUser = ()=>{
        console.log('logout user');
    }
    return (
    <DashboardContext.Provider value = {{user,showSidebar,setShowSidebar,isDarkTheme,setIsDarkTheme,toggleDarkTheme,toggleSideBar,logoutUser}}>

    <Wrapper>
    <main className="dashboard">
        <SmallSidebar />
        <BigSidebar />
        <div>
            <Navbar />
            <div className="dashboard-page">
             <Outlet />
            </div>
        </div>
    </main>
    </Wrapper>
    </DashboardContext.Provider>
  )
}

export const useDashboardContext = ()=>{
return useContext(DashboardContext)
}
export default DashboardLayout