import { Link } from "react-router-dom";

const Card = ({ dbName, endpoint, summary, imgSrc }: { dbName: string, endpoint: string, summary: string, imgSrc: string, }) => {
    return (
        <Link to={endpoint} className="px-3">
            <figure className="lg:flex rounded-xl border-2 border-utk-light-gray p-8 md:p-0 hover:border-utk-orange hover:bg-utk-light-gray">
                <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none lg:rounded-l-xl rounded-full mx-auto" src={imgSrc} alt="" width="384" height="512" />
                <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                    <figcaption className="">
                        <div className="text-utk-smokey text-2xl font-bold">
                            {dbName}
                        </div>
                    </figcaption>
                    <blockquote>
                        <p className="text-md text-utk-smokey">
                            {summary}
                        </p>
                    </blockquote>
                </div>
            </figure>
        </Link>
    )
}

export default Card;