import Image from "next/image";
import Link from "next/link";
import styles from "./postCard.module.css";

const PostCard = () => {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.imgContainer}>
                    <img src="https://images.pexels.com/photos/11650554/pexels-photo-11650554.jpeg" alt="fhf" fill className={styles.img} width={150} height={150} />
                </div>
                <span className={styles.date}> 01.01.2024</span>
                <div className={styles.bottoms}>
                    <h1>Title</h1>
                    <p>Description</p>
                    <Link href="/blog/post"> Read More </Link>
                </div>
            </div>
        </div>
    );
};

export default PostCard;
