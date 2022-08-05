import { useEffect, useState } from "react"
import axios from "axios"
import AllMoviesComp from "./AllMembers"
import { useDispatch } from "react-redux"
import { Outlet, useNavigate } from "react-router-dom"

function SubscriptionsPageComp() {

    const navigate = useNavigate()


    const allMembers = () => {

        navigate("")
    }

    const addMember = () => {

        navigate("addMember")
    }

    
    return <div style={{ border: "5px solid yellow"}}>

        <h2>Subscriptions</h2>

        <button onClick={allMembers}>All members</button>
        <button onClick={addMember}>Add member</button>

      
        <Outlet />
    </div>

}
export default SubscriptionsPageComp