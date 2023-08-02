import { useState } from 'react';
import Image from 'next/image';

import PokemonLogo from '../../../../assets/pokemonLogo.png';

const Header = ({ searchQuery, handleChangeText }: any) => {
    return (
        <div className="w-full flex flex-col items-center justify-center p-[1rem] relative bg-red-500 shadow-xl">
            <Image
                src={PokemonLogo}
                height={100}
                alt="Picture of the author"
            />
            <div className='my-4'>
                <p className='text-sm text-white mb-2'>Search for a pokemon using name or a unique id</p>
                <div className='w-80 h-10 bg-white shadow-md flex items-center rounded-lg px-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 stroke-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <input
                        className='w-full ml-2 bg-transparent outline-none text-sm text-gray-500'
                        placeholder='e.g. Pikachu or 10'
                        value={searchQuery}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChangeText(e.target.value)}
                    />
                </div>
            </div>
        </div>
    )
}

export default Header;