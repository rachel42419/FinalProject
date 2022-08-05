import { useState, useEffect } from "react"
import axios from "axios"
import {useLocation, useNavigate } from "react-router-dom"
import MoviesWatchedComp from "./MoviesWatched"


function MemberComp(props) {


    const navigate = useNavigate()

    const editMember = () => {

        navigate("editMember/" + props.member._id)

    }

    const deleteMember = async () => {

        let { data } = await axios.delete(`http://localhost:8000/members/${props.member._id}`)
        console.log(data);

    }



    return <div style={{ border: "5px solid blue", width: "80%" }}>

        <h3>{props.member.name}</h3>
        <span>Email: {props.member.email}</span><br />
        <span>City: {props.member.city}</span><br />


        <button onClick={editMember}>Edit</button>
        <button onClick={deleteMember}>Delete</button>

        <MoviesWatchedComp member={props.member} />


    </div>

}
export default MemberComp