import SearchBar from "../components/SearchBar";

const Song = () => {
    return (
        <>
            <main className='lg:h-fit'>
                <div className='h-32 bg-utk-blue--accent'>
                    <div className="grid grid-rows-2 justify-center">
                        <h1 className='text-center flex justify-center items-center text-2xl md:text-4xl text-utk-white h-2/3 py-2'>Search the Song Database</h1>
                        <div className="h-1/3 ">
                            <SearchBar />
                        </div>
                    </div>

                </div>
                <div>
                    results go here
                </div>
            </main>
        </>
    );
}

export default Song;
