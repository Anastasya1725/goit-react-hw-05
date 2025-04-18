import { Link } from "react-router-dom";
import s from "./NotFoundPage";

const NotFoundPage = () => {
 return (
    <div className={s.wrapper}>
        <h2 className={s.message}>404 - Page Not Found</h2>
        <Link to="/" className={s.link}>Go to Home</Link>
    </div>
 )
}

export default NotFoundPage;