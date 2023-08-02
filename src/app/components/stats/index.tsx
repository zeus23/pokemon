import Scale from "../scale"

export default ({ pokemonData }: any) => {
    return (
        <div className='w-full py-4'>
            {
                pokemonData.stats?.map((item: any, index: number) => {
                    return (
                        <div key={index} className='w-full flex items-center mb-2'>
                            <div className='w-[200px]'>
                                <p className='text-sm text-gray-500 capitalize'>{item.stat.name}</p>
                            </div>
                            <div className='flex items-center'>
                                <span className='text-sm font-medium mr-2'>{item.base_stat}</span>
                                <div className='w-[150px]'>
                                    <Scale completed={item.base_stat} />
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}