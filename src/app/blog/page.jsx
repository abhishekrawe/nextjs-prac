import PostCard from "@/component/postCard/postCard";
import styles from "./blog.module.css";


const BlogPage = () => {
    return (
        <div className={styles.container}>
           <PostCard/>
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
        </div>
    )
}

export default BlogPage