import PostCard from "./PostCard";


function PostList() {

    const posts = [
        {
            id: 1,
            overlay: "Car for Road",
            photo:"There are a lot of cars in our world, but the best ones are here",
            cars:"SUBARU TOYOTA BMW NISSAN AUDI"
        }
    ]

    return(
        <div class="phone-text-container">
            {posts.map((post, index) => (
                <PostCard 
                    key={index}
                    overlay={post.overlay}
                    photo={post.photo}
                    cars={post.cars}
                />
            ))}
        </div>
    )
}

export default PostList;