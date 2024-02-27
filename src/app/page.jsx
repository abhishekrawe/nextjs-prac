import styles from "./page.module.css";

const Home = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h2 className={styles.subtitle}>About Agency</h2>
          <h1 className={styles.title}>
            We create digital ideas that are bigger, bolder, braver and better.
          </h1>
          <p className={styles.desc}>
            We create digital ideas that are bigger, bolder, braver and better. We
            believe in good ideas flexibility and precission We’re world’s Our
            Special Team best consulting & finance solution provider. Wide range
            of web and software development services.
          </p>
          </div>
        </div>
        <div className={styles.imgContainer}>
          {/* <Image
            src="/about.png"
            alt="About Image"
            fill
            className={styles.img}
          /> */}
        </div>
    </div>
  )
}

export default Home;