import { useState, useEffect } from "react"
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"
import format from "../../utils"
import SubscribeComp from "./Subscribe"

function MoviesWatchedComp(props) {

    const [movies, setMovies] = useState([])
    const [otherMovies, setOtherMovies] = useState([])
    const [displaySubComp, setDisplaySubComp] = useState(false)
    const [thereIsNewSub, setThereIsNewSub] = useState(false)



    const getSubscriptions = async () => {

        let { data } = await axios.get(`http://localhost:8000/subscriptions`)
        let moviesResp = await axios.get(`http://localhost:8000/movies`)
        let allMOvies = moviesResp.data

        let filterSub = data.filter(s => s.memberId === props.member._id)

        const movies = await Promise.all(filterSub.map(async s => {
            let { data } = await axios.get(`http://localhost:8000/movies/${s.movieID}`)
            let index = allMOvies.findIndex(m => m._id == data._id)
            allMOvies.splice(index, 1)
            return data
        }))

        setMovies(movies)
        setOtherMovies(allMOvies)

    }

    useEffect(() => {

        getSubscriptions()


    }, [thereIsNewSub])


    const subscribeComp = () => {


        setDisplaySubComp(!displaySubComp)

    }

    const subscribeToNewMovie = async (subscribe) => {

        let newSubscribe = {
            movieID: subscribe.movieId,
            memberId: props.member._id,
            date: subscribe.date
        }

        let { data } = await axios.post(`http://localhost:8000/subscriptions/`, newSubscribe)

        console.log(data);
        setThereIsNewSub(!thereIsNewSub)

    }


    return <div style={{ border: "5px solid red", width: "80%" }}>

        <h3>Movies watched</h3>

        <button onClick={subscribeComp}>Subscribe to new movie</button><br />

        {
            displaySubComp && <SubscribeComp member={props.member} movies={otherMovies} subscribeFunc={subscribeToNewMovie} />
        }

        <ul>
            {
                movies.map((movie, index) => {

                    return <li key={index}><Link to={`../../`} state={{ movie: movie }} >{movie.name}</Link>, {format(new Date(movie.premieredYear))}</li>
                })
            }
        </ul>

    </div>

}
export default MoviesWatchedComp