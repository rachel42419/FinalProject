import { useEffect, useState } from "react"
import MovieComp from "./Movie"
import axios from "axios"
import { useLocation } from "react-router-dom"


function AllMoviesComp() {

    const [movies, setMovies] = useState([])
    const [findMovie, setFindMovie] = useState()
    const [refresh, setRefresh] = useState(false)

    const location = useLocation()

    const getMovies = async () => {

        let { data } = await axios.get("http://localhost:8000/movies")
        setMovies(data)

        if (location.state) {
            let find = data.filter(m => m._id === location.state.movie._id)
            setMovies(find)

        }

    }

    const find = () => {

        if (findMovie) {
            let findMovies = movies.filter(m => m.name == findMovie)
            setMovies(findMovies)
        }
        if (location.state) {
            location.state = null
            setRefresh(!refresh)

        }
    }

    const deleteMovie = async (movieId) => {

        let { data } = await axios.delete(`http://localhost:8000/movies/${movieId}`)
        console.log(data);
        setRefresh(!refresh)
    }


    useEffect(() => {

        getMovies()

    }, [findMovie, refresh])


    return <div>

        Find movie: <input type="text" onChange={e => setFindMovie(e.target.value)} />
        <button onClick={find}>Find</button>



        <ul>
            {
                movies.map((movie, index) => {

                    return <MovieComp key={index} movie={movie} deleteMovie={deleteMovie} />

                })
            }
        </ul>


    </div>

}
export default AllMoviesComp