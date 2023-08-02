export default ({ pokemonData, clickNext, clickPrevious }: any) => {
    const activeBtn = "bg-gray-500 hover:bg-gray-400 text-white font-bold py-2 px-4 border-b-4 border-gray-700 hover:border-gray-500 rounded";
    const disabledBtn = "bg-gray-500 text-white font-bold py-2 px-4 border-b-4 border-gray-700 rounded opacity-50 cursor-not-allowed"
    return (
        <div className="w-full flex items-center justify-center mb-10">
            <div className="w-10/12 flex items-center justify-end px-10">
                <div className="mr-2">
                    <button
                        className={pokemonData && !pokemonData.previous ? disabledBtn : activeBtn}
                        disabled={pokemonData && !pokemonData.previous}
                        onClick={() => clickPrevious(pokemonData.previous)}
                    >
                        Prev
                    </button>
                </div>
                <div>
                    <button
                        className={pokemonData && !pokemonData.next ? disabledBtn : activeBtn}
                        disabled={pokemonData && !pokemonData.next}
                        onClick={() => clickNext(pokemonData.next)}
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    )
}