import { useState } from "react"
import { useDispatch } from "react-redux"
import axios from "axios"
import { useNavigate } from "react-router-dom"

function AddMovieComp() {

    const [movie, setMovie] = useState({ name: "", genres: "", pictureUrl: "", premieredYear: new Date() })

    const navigate = useNavigate()

    const save = async () => {

        let { data } = await axios.post(`http://localhost:8000/movies/`, movie)

        console.log(data);

    }

    const cancle = async () => {

        navigate("../")

    }



    return <div>


        Name: <input type="text" onChange={e => setMovie({ ...movie, name: e.target.value })} /><br />
        Genres:<input type="text" onChange={e => setMovie({ ...movie, genres: e.target.value })} /><br />
        Image url:<input type="img" onChange={e => setMovie({ ...movie, pictureUrl: e.target.value })} /><br />
        Premiered: <input type="date" onChange={e => setMovie({ ...movie, premieredYear: e.target.value })} /><br />

        <button onClick={save}>Save</button>
        <button onClick={cancle}>Cancle</button>

    </div>

}
export default AddMovieComp