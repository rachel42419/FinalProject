import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios"


function EditMemberComp() {

    const [member, setMember] = useState({ name: "", email: "", city: "" })
    const navigate = useNavigate()

    const params = useParams()


    const getMovies = async () => {

        let { data } = await axios.get(`http://localhost:8000/members/${params.id}`)

        setMember(data)
    }

    useEffect(() => {

        getMovies()

    }, [])


    const update = async () => {

        let { data } = await axios.put(`http://localhost:8000/members/${member._id}`, member)
        console.log(data);

    }

    const cancle = async () => {

        navigate("../")

    }



    return <div>
        <h3>Edit member: {member && member.name}</h3>

        Name: <input type="text" value={member.name} onChange={e => setMember({ ...member, name: e.target.value })} /><br />
        Email: <input type="email" value={member.email} onChange={e => setMember({ ...member, email: e.target.value })} /><br />
        City: <input type="text" value={member.city} onChange={e => setMember({ ...member, city: e.target.value })} /><br />

        <button onClick={update}>Update</button>
        <button onClick={cancle}>Cancle</button>

    </div>

}
export default EditMemberComp