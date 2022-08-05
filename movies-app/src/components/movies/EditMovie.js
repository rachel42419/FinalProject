import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios"


function EditMovieComp() {

    const [movie, setMovie] = useState({ name: "", genres: "", pictureUrl: "", premieredYear: new Date() })

    const navigate = useNavigate()

    const params = useParams()

    

    const getMovie = async () => {

        let { data } = await axios.get(`http://localhost:8000/movies/${params.id}`)

        setMovie(data)
    }


    useEffect(() => {

        getMovie()

    }, [])


    const update = async () => {

        let { data } = await axios.put(`http://localhost:8000/movies/${movie._id}`, movie)
        console.log(data);

    }

    const cancle = async () => {

        navigate("../")

    }



    return <div>
        <h3>Edit movie: {movie && movie.name}</h3>

        Name: <input type="text" value={movie.name} onChange={e => setMovie({ ...movie, name: e.target.value })} /><br />
        Genres:<input type="text" value={movie.genres} onChange={e => setMovie({ ...movie, genres: e.target.value })} /><br />
        Image url:<input type="img" value={movie.pictureUrl} onChange={e => setMovie({ ...movie, pictureUrl: e.target.value })} /><br />
        Premiered: <input type="date" value={movie.premieredYear} onChange={e => setMovie({ ...movie, premieredYear: e.target.value })} /><br />

        <button onClick={update}>Update</button>
        <button onClick={cancle}>Cancle</button>

    </div>

}
export default EditMovieComp