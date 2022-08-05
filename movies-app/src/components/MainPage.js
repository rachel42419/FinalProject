import { Outlet, useNavigate } from "react-router-dom"

function MainPageComp() {

    const navigate = useNavigate()

    const movies = () => {

        navigate("")
    }

    const subscriptions = () => {

        navigate("subscriptions")
    }

    const logout = () => {

        sessionStorage["username"] = ""

        navigate("../")
    }


    return <div>

        <div>
            <span style={{ "backgroundColor": "pink" }}>
                Username: {sessionStorage["username"]}

            </span>
        </div>


        <button onClick={movies}>Movies</button>
        <button onClick={subscriptions}>Subscriptions</button>
        <button onClick={logout}>Log out</button>



        <Outlet />


    </div>

}
export default MainPageComp