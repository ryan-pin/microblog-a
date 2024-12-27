import { useEffect, useState } from "react";
import Header from "../components/header/header";
import Post, { PostType } from "../components/Post/post";
import UserCard from "../components/UserCard/UserCard";
import CharactersPost from "../services/CharactersPost";


function Feed() {
    const [posts, setPosts] = useState<PostType[]>([]);
    

    
    function getPosts(){
        CharactersPost.listarPersonagens().then((res) => {
            const { data } = res;
            setPosts(data);
        })
    }

    useEffect(() => {getPosts()}, [])

    return(
        <div>
            <Header />

            <div className="mt-5 d-flex">
                <UserCard />
                <div className="br-card d-flex align-items-center flex-column ">
                    {posts.map((post) => {
                        return <Post name={post.name} house={post.house} image={post.image}/>
                    })}
                </div>
            </div>
        </div>
    )
}

export default Feed;