import { useEffect, useState } from "react";
import Header from "../components/header/header";
import Post, { PostType } from "../components/Post/post";
import UserCard from "../components/UserCard/UserCard";
import Posts from "../services/ListPost";

function Feed() {
    const [posts, setPosts] = useState<PostType[]>([]);
    

    
    // function getPosts(){
    //     Posts.list().then((res) => {
    //         const { data } = res;
    //         setPosts(data);
    //     })
    // }

    function getPosts(){
        Posts.list().then((res) => {
            setPosts(res)});
            
    }

    useEffect(() => {getPosts()}, [])

    return(
        <div>
            <Header />

            <div className="mt-5 d-flex">
                <UserCard  />
                <div className="br-card d-flex align-items-center flex-column ">
                    {posts.map((post) => {
                        return <Post autor={post.autor} titulo={post.titulo} descricao={post.descricao}/>
                    })}
                </div>
            </div>
        </div>
    )
}

export default Feed;