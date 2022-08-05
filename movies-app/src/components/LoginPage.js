import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"


function LoginPageComp() {

    const [user, setUser] = useState()
    const [msg, setMsg] = useState()

    const navigate = useNavigate()

    const login = async () => {

        try {
            let { data } = await axios.post("http://localhost:8000/auth", user)

            if (data._id) {

                sessionStorage["username"] = data.name
                navigate("main")

            }
            else {
                setMsg(data.msg);
            }

        }
        catch (e) {
            console.log(e.respobse.data);
        }

    }


    return <div>


        <h2>Login page</h2>

        Username:<input type="text" onChange={e => setUser({ ...user, name: e.target.value })} /><br />
        Password:<input type="password" onChange={e => setUser({ ...user, password: e.target.value })} /><br />

        <button onClick={login}>Login</button><br/><br/>

        <span style={{ color: "red" }}>{msg}</span>


    </div>

}
export default LoginPageComp