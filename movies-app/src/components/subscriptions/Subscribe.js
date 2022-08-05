import { useEffect, useState } from "react"

function SubscribeComp(props) {

    const [subscribe, setSubscribe] = useState({ movieId: null, date: null })


    const check = () => {

        if (props.movies.findIndex(m => m._id == subscribe.movieId) > -1) {
            props.subscribeFunc(subscribe)
        }
    }


    return <div style={{ border: "5px solid gray", width: "80%" }}>

        <h3>Add a new movie</h3>

        <select onChange={e => setSubscribe({ ...subscribe, movieId: e.target.value })}>

            <option>select a movie</option>
            {
                props.movies.map((movie) => {
                    return <option key={movie._id} value={movie._id}>{movie.name}</option>
                })
            }

        </select>

        Date: <input type="date" onChange={e => setSubscribe({ ...subscribe, date: e.target.value })} /><br />

        <button onClick={check}>Subscribe</button>

    </div>

}
export default SubscribeComp