import { useEffect } from "react"
import { Outlet, useLocation, useNavigate } from "react-router-dom"

function MoviesPageComp() {


    const navigate = useNavigate()

    const allMovies = () => {

        navigate("")

    }

    const addMovie = () => {

        navigate("addMovie")
    }



    return <div style={{ border: "5px solid yellow" }}>

        <h2>Movies</h2>

        <button onClick={allMovies}>All movies</button>
        <button onClick={addMovie}>Add movie</button>


        <Outlet />
    </div>

}
export default MoviesPageComp