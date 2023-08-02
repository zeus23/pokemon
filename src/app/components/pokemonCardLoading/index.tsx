const PokemonCardLoading = () => {
    return (
        <div className="w-[200px] h-[200px] rounded-lg shadow-md cursor-pointer p-4 bg-[#F5F7FA)] flex flex-col animate-pulse mb-7">
            <div className='w-[50px] h-[20px] bg-gray-300 rounded-md'></div>
            <div className='w-full flex items-center justify-center mb-2'>
                <div className='w-[100px] h-[100px] rounded-full bg-gray-300'></div>
            </div>
            <div className='w-[150px] h-[20px] bg-gray-300 rounded-md mb-1'></div>
            <div className='w-[100px] h-[20px] bg-gray-300 rounded-md'></div>
        </div>
    )
}

export default PokemonCardLoading;