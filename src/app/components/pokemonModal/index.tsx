import Image from 'next/image';
import { useState } from 'react';

import About from '../about';
import Stats from '../stats';
import Moves from '../moves';

import pokeBall from '../../../../assets/pokeball_new.png'

const PokemonModal = ({ isVisible, onClose, pokemonData }: any) => {

    const [tab, setTab] = useState('About');

    let cardStyle;

    switch (pokemonData?.types[0].type.name) {
        case 'rock':
            cardStyle = 'w-4/12 rounded-lg flex flex-col overflow-hidden shadow-sm bg-[rgb(148, 81, 81)] relative';
            break;

        case 'ghost':
            cardStyle = 'w-4/12 rounded-lg flex flex-col overflow-hidden shadow-sm bg-[rgb(247, 247, 247)] relative';
            break;

        case 'electric':
            cardStyle = 'w-4/12 rounded-lg flex flex-col overflow-hidden shadow-sm bg-[#FFD76F] relative';
            break;

        case 'bug':
            cardStyle = 'w-4/12 rounded-lg flex flex-col overflow-hidden shadow-sm bg-[#F6D6A7] relative';
            break;

        case 'poison':
            cardStyle = 'w-4/12 rounded-lg flex flex-col overflow-hidden shadow-sm bg-[#e0a7f6] relative';
            break;

        case 'normal':
            cardStyle = 'w-4/12 rounded-lg flex flex-col overflow-hidden shadow-sm bg-[#F4F4F4] relative';
            break;

        case 'fairy':
            cardStyle = 'w-4/12 rounded-lg flex flex-col overflow-hidden shadow-sm bg-[rgba(255, 192, 203, 0.863)] relative';
            break;

        case 'fire':
            cardStyle = 'w-4/12 rounded-lg flex flex-col overflow-hidden shadow-sm bg-[#FBE3DF] relative';
            break;

        case 'grass':
            cardStyle = 'w-4/12 rounded-lg flex flex-col overflow-hidden shadow-sm bg-[#E2F9E1] relative';
            break;

        case 'water':
            cardStyle = 'w-4/12 rounded-lg flex flex-col overflow-hidden shadow-sm bg-[#E0F1FD] relative';
            break;

        default:
            cardStyle = 'w-4/12 rounded-lg flex flex-col overflow-hidden shadow-sm bg-[#D6E1EF] relative'
    }

    const handleClose = (e: any) => {
        if (e.target.id === 'container') {
            onClose();
        }
    }

    if (!isVisible) return null;

    return (
        <div id="container" className="w-full h-screen fixed inset-0 bg-black bg-opacity-80 backdrop-blur-md flex justify-center items-center" onClick={handleClose}>
            <div className={cardStyle} style={{ margin: '1rem 0' }}>
                <div className="w-full h-[200px] relative py-4 px-8">
                    <div className='w-full flex items-center justify-between mb-2'>
                        <div className='flex items-center'>
                            <Image
                                src={pokeBall}
                                height={30}
                                width={30}
                                alt="pokeBall"
                            />
                            <p className='text-2xl font-medium capitalize ml-2'>{pokemonData.name}</p>
                        </div>
                        <p className='text-xl font-medium capitalize mb-2'>#{pokemonData.id}</p>
                    </div>
                    <div className='w-full flex items-center'>
                        {
                            pokemonData.types.map((type: any, index: number) => {
                                return (
                                    <div className='border border-gray-800 border-solid mr-2 p-1 rounded-lg'>
                                        <p className='text-xs text-gray-800 capitalize' key={index}>{type.type.name}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className='w-full flex items-center justify-center absolute bottom-[-25px] right-0'>
                        <Image
                            src={pokemonData.sprites.other.dream_world.front_default}
                            height={150}
                            width={150}
                            style={{ maxHeight: '150px' }}
                            alt={`image${pokemonData.id}`}
                        />
                    </div>
                </div>
                <div className='w-full min-h-[350px] bg-white rounded-t-3xl py-4 px-8'>
                    {/* Menu */}
                    <div className='w-full flex my-5 flex items-center justify-between border-b border-gray-300 border-solid'>
                        {
                            ['About', 'Stats', 'Moves'].map((item, index) => {
                                return (
                                    <div
                                        key={index}
                                        className={tab === item ? 'p-2 border-b-2 border-gray-800 border-solid cursor-pointer hover:bg-gray-200 rounded-t-md' : 'p-2 cursor-pointer hover:bg-gray-200 rounded-t-md'}
                                        onClick={() => setTab(item)}
                                    >
                                        <p
                                            className={tab === item ? 'text-sm font-medium' : 'text-sm font-normal text-gray-400'}
                                        >
                                            {item}
                                        </p>
                                    </div>
                                )
                            })
                        }
                    </div>
                    {/* about */}
                    {
                        tab === 'About' &&
                        <About pokemonData={pokemonData} />
                    }

                    {/* stats */}
                    {
                        tab === 'Stats' &&
                        <Stats pokemonData={pokemonData} />
                    }

                    {/* Moves */}
                    {
                        tab === 'Moves' &&
                        <Moves pokemonData={pokemonData} />
                    }
                </div>
            </div>
        </div>
    )
}

export default PokemonModal;