const About = ({ pokemonData }: any) => {
    return (
        <div className='w-full py-4'>

            <div className='w-full flex items-center mb-2'>
                <div className='w-[100px]'>
                    <p className='text-sm text-gray-500'>Experience</p>
                </div>
                <div >
                    <span className='text-sm font-medium'>{pokemonData.base_experience}</span>
                </div>
            </div>

            <div className='w-full flex items-center mb-2'>
                <div className='w-[100px]'>
                    <p className='text-sm text-gray-500'>Height</p>
                </div>
                <div >
                    <span className='text-sm font-medium'>{pokemonData.height} ft</span>
                </div>
            </div>

            <div className='w-full flex items-center mb-2'>
                <div className='w-[100px]'>
                    <p className='text-sm text-gray-500'>Weight</p>
                </div>
                <div >
                    <span className='text-sm font-medium'>{pokemonData.weight} Kg</span>
                </div>
            </div>

            <div className='w-full flex items-center mb-2'>
                <div className='w-[100px]'>
                    <p className='text-sm text-gray-500'>Abilities</p>
                </div>
                <div>
                    {
                        pokemonData.abilities?.map((item: any, index: number) => {
                            if (index === pokemonData.abilities.length - 1) {
                                return (
                                    <span key={index} className='text-sm font-medium capitalize'>{item.ability.name}</span>
                                )
                            }
                            else {
                                return (
                                    <span key={index} className='text-sm font-medium capitalize'>{item.ability.name}, </span>
                                )
                            }
                        })
                    }
                </div>
            </div>

        </div>
    )
}

export default About;