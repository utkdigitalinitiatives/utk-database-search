import SearchBar from "../components/SearchBar";

const Song = () => {
    return (
        <>
            <main className='lg:h-fit'>
                <div className='h-36 bg-utk-blue--accent grid grid-rows-2 justify-center my-auto py-2'>
                    <h1 className='text-center flex justify-center items-center text-2xl md:text-4xl text-utk-white py-2'>Search the Song Database</h1>
                    <div className="py-2 ">
                        <SearchBar
                            placeholder="Search the song database..."
                        />
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
