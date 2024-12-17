import Header from "../components/header/header";
import Post from "../components/Post/post";
import UserCard from "../components/UserCard/UserCard";

function Feed() {
    return(
        <div>
            <Header />
            <div className="mt-5 d-flex">
                <UserCard />
                <div className="br-card d-flex align-items-center flex-column p-3 ml-6 mr-6">
                    <Post/>
                    <Post/>
                    <Post/>
                </div>
            </div>
        </div>
    )
}

export default Feed;