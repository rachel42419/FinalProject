import { useState, useEffect } from "react"
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"
import format from "../../utils"

function SubscriptionsWatchedComp(props) {

    const [members, setMembers] = useState([])


    const getSubscriptions = async () => {

        let { data } = await axios.get(`http://localhost:8000/subscriptions/`)
        let filterSub = data.filter(s => s.movieID == props.movie._id)
        const members = await Promise.all(filterSub.map(sub => getMember(sub)))
        setMembers(members)

    }

    const getMember = async (sub) => {

        const { data } = await axios.get(`http://localhost:8000/members/${sub.memberId}`)
        let obj = { ...data, date: sub.date }
        return obj
    }

    useEffect(() => {

        getSubscriptions()
    }, [])


    return members[0] && <div style={{ border: "5px solid red", width: "80%" }}>

        <h3>Subscriptions watched</h3>


        <ul>
            {
                members.map((member, index) => {

                    return <li key={index}>{member.name}, {format(new Date(member.date))}</li>
                })
            }
        </ul>

    </div>

}
export default SubscriptionsWatchedComp