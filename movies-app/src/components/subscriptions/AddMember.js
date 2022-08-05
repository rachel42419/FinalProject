import { useState } from "react"
import { useDispatch } from "react-redux"
import axios from "axios"
import { useNavigate } from "react-router-dom"

function AddMemberComp() {

    const [member, setMember] = useState({ name: "", email: "", city: "" })

    const navigate = useNavigate()

    const save = async () => {

        let { data } = await axios.post(`http://localhost:8000/members/`, member)

        console.log(data);

    }

    const cancle = async () => {

        navigate("../")

    }



    return <div>


        Name: <input type="text" onChange={e => setMember({ ...member, name: e.target.value })} /><br />
        Email: <input type="email" onChange={e => setMember({ ...member, email: e.target.value })} /><br />
        City: <input type="text" onChange={e => setMember({ ...member, city: e.target.value })} /><br />

        <button onClick={save}>Save</button>
        <button onClick={cancle}>Cancle</button>

    </div>

}
export default AddMemberComp