import { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import SubscriptionsWatchedComp from "./SubscriptionsWatched"
import format from "../../utils"

function MovieComp(props) {


    const navigate = useNavigate()



    const editMovie = () => {

        navigate("editMovie/" + props.movie._id)
    }




    return <div style={{ border: "5px solid blue", width: "80%" }}>

        <h4>{props.movie.name}, {new Date(props.movie.premieredYear).getFullYear()}</h4>
        <span> Genres: {props.movie.genres.join(', ')}</span><br />
        {/* <img src={props.movie.pictureUrl} style={{ height: "100px" }} /> */}


        <SubscriptionsWatchedComp movie={props.movie} />

        <button onClick={editMovie}>Edit</button>
        <button onClick={() => props.deleteMovie(props.movie._id)}>Delete</button>

    </div>

}
export default MovieComp