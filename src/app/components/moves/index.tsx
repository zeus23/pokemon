export default ({ pokemonData }: any) => {
    return (
        <div className='w-full py-4 flex flex-wrap max-h-[250px] overflow-auto'>
            {
                pokemonData.moves.map((item: any, index: number) => {
                    if (index === pokemonData.moves.length - 1) {
                        return (
                            <div key={index}>
                                <p className='text-sm capitalize mr-2'>⭐️ {item.move.name}</p>
                            </div>
                        )
                    }
                    else {
                        return (
                            <div key={index}>
                                <p className='text-sm capitalize mr-2'>⭐️ {item.move.name}, </p>
                            </div>
                        )
                    }
                })
            }
        </div>
    )
}