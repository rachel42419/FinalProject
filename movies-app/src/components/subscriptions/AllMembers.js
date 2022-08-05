import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import axios from "axios"
import MemberComp from "./Member"


function AllMembersComp() {

    const [members,setMembers] = useState([])

    const getMembers = async () => {

        let { data } = await axios.get("http://localhost:8000/members")
        setMembers(data)

    }



    useEffect(() => {

        getMembers()
    })


    return <div>

        <ul>
            {
                members.map((member, index) => {

                    return <MemberComp key={index} member={member} />

                })
            }
        </ul>


    </div>

}
export default AllMembersComp