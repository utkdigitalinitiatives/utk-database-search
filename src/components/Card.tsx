import { Link } from "react-router-dom";

const Card = ({ dbName, endpoint, summary, imgSrc }: { dbName: string, endpoint: string, summary: string, imgSrc: string, }) => {
    return (
        <Link to={endpoint}>
            <figure className="md:flex bg-utk-light-gray rounded-xl p-8 md:p-0 ">
                <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src={imgSrc} alt="" width="384" height="512" />
                <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                    <figcaption className="font-medium">
                        <div className="text-sky-500 dark:text-sky-400">
                            {dbName}
                        </div>
                    </figcaption>
                    <blockquote>
                        <p className="text-lg font-medium">
                            {summary}
                        </p>
                    </blockquote>
                </div>
            </figure>
        </Link>
    )
}

export default Card;