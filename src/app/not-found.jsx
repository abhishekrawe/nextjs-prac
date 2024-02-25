import Link from "next/link"
const NotFound = () => {
    return (
        <div>
            <h1> Not Found </h1>
            <p> Sorry this is not avaiable </p>
            <Link href="/" >Return Home </Link>
        </div>
    )
}
export default NotFound;