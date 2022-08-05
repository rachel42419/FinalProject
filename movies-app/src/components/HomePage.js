import { Route, Routes } from "react-router-dom"
import LoginPageComp from "./LoginPage"
import MoviesPageComp from "./movies/MoviesPage"
import AddMovieComp from "./movies/AddMovie"
import AllMoviesComp from "./movies/AllMovies"
import EditMovieComp from "./movies/EditMovie"
import SubscriptionsPageComp from "./subscriptions/SubscriptionsPage"
import AllMembersComp from "./subscriptions/AllMembers"
import AddMemberComp from "./subscriptions/AddMember"
import EditMemberComp from "./subscriptions/EditMember"
import MainPageComp from "./MainPage"

function HomePageComp() {




    return <div>

        <h1>Movies - Subscriptions Website</h1>


        <Routes>

            <Route path="" element={<LoginPageComp />} />

            <Route path="main" element={<MainPageComp />} >


                <Route path="" element={<MoviesPageComp />} >
                    <Route path="" element={<AllMoviesComp />} />
                    <Route path="addMovie" element={<AddMovieComp />} />
                    <Route path="editMovie/:id" element={<EditMovieComp />} />

                </Route>

                <Route path="subscriptions" element={<SubscriptionsPageComp />} >
                    <Route path="" element={<AllMembersComp />} />
                    <Route path="addMember" element={<AddMemberComp />} />
                    <Route path="editMember/:id" element={<EditMemberComp />} />
                </Route>

            </Route>


        </Routes>


    </div>

}
export default HomePageComp