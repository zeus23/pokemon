import { IPokemonCardProp } from '@/app/types';
import { useGetPokemonByNameQuery } from '@/app/store/services/pokemonApi';
import Image from 'next/image';

import { Tilt } from 'react-tilt';
import PokemonCardLoading from '../pokemonCardLoading';

const defaultOptions = {
    reverse: false,
    max: 35,
    perspective: 1000,
    scale: 1.1,
    speed: 1000,
    transition: true,
    axis: null,
    reset: true,
    easing: "cubic-bezier(.03,.98,.52,.99)",
}

const PokemonCard = ({ item, handleClick }: IPokemonCardProp) => {
    const { data, error, isFetching } = useGetPokemonByNameQuery(item.name);

    let cardStyle;

    switch (data?.types[0].type.name) {
        case 'rock':
            cardStyle = 'w-[200px] h-[200px] rounded-lg shadow-md cursor-pointer p-4 bg-[rgb(148, 81, 81)] relative';
            break;

        case 'ghost':
            cardStyle = 'w-[200px] h-[200px] rounded-lg shadow-md cursor-pointer p-4 bg-[rgb(247, 247, 247)] relative';
            break;

        case 'electric':
            cardStyle = 'w-[200px] h-[200px] rounded-lg shadow-md cursor-pointer p-4 bg-[#FFD76F] relative';
            break;

        case 'bug':
            cardStyle = 'w-[200px] h-[200px] rounded-lg shadow-md cursor-pointer p-4 bg-[#F6D6A7] relative';
            break;

        case 'poison':
            cardStyle = 'w-[200px] h-[200px] rounded-lg shadow-md cursor-pointer p-4 bg-[#e0a7f6] relative';
            break;

        case 'normal':
            cardStyle = 'w-[200px] h-[200px] rounded-lg shadow-md cursor-pointer p-4 bg-[#F4F4F4] relative';
            break;

        case 'fairy':
            cardStyle = 'w-[200px] h-[200px] rounded-lg shadow-md cursor-pointer p-4 bg-[rgba(255, 192, 203, 0.863)] relative';
            break;

        case 'fire':
            cardStyle = 'w-[200px] h-[200px] rounded-lg shadow-md cursor-pointer p-4 bg-[#FBE3DF] relative';
            break;

        case 'grass':
            cardStyle = 'w-[200px] h-[200px] rounded-lg shadow-md cursor-pointer p-4 bg-[#E2F9E1] relative';
            break;

        case 'water':
            cardStyle = 'w-[200px] h-[200px] rounded-lg shadow-md cursor-pointer p-4 bg-[#E0F1FD] relative';
            break;

        default:
            cardStyle = 'w-[200px] h-[200px] rounded-lg shadow-md cursor-pointer p-4 bg-[#D6E1EF] relative'
    }

    if (isFetching) {
        return (
            <PokemonCardLoading />
        )
    }
    return (
        <Tilt options={defaultOptions} style={{ height: 200, width: 200, marginBottom: '28px' }}>
            <div className={cardStyle} onClick={() => handleClick(data)}>
                <p className='text-xs text-gray-500'>#{data.id}</p>

                <div className='w-full flex items-center justify-center'>
                    <Image
                        src={data.sprites.other.dream_world.front_default}
                        height={90}
                        width={90}
                        style={{ maxHeight: '100px' }}
                        alt={`image${data.id}`}
                    />
                </div>
                <div className='w-full absolute bottom-0 right-0 p-4'>
                    <p className='text-sm text-gray-500 font-medium capitalize mb-1'>{data.name}</p>
                    <div className='w-full flex items-center'>
                        {
                            data.types.map((type: any, index: number) => {
                                return (
                                    <div className='border border-gray-500 border-solid mr-2 p-1 rounded-lg'>
                                        <p className='text-xs text-gray-500 capitalize' key={index}>{type.type.name}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </Tilt>
    )
}

export default PokemonCard;