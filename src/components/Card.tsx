import { Link } from "react-router";

const Card = ({ dbName, endpoint, summary, imgSrc }: { dbName: string, endpoint: string, summary: string, imgSrc: string, }) => {
    return (
        <Link to={endpoint} className="px-3">
            <figure className="lg:flex rounded-xl border border-utk-light-gray p-8 md:p-0 hover:border-utk-orange hover:bg-utk-light-gray shadow shadow-slate-600/50 ease-in-out duration-300">
                <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none lg:rounded-l-xl rounded-full mx-auto" src={imgSrc} alt="" width="384" height="512" />
                <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                    <figcaption className="">
                        <div className="text-utk-smokey text-xl font-bold">
                            {dbName}
                        </div>
                    </figcaption>
                    <blockquote>
                        <p className="text-sm text-utk-smokey">
                            {summary}
                        </p>
                    </blockquote>
                </div>
            </figure>
        </Link>
    )
}

export default Card;
