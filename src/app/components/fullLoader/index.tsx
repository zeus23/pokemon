import Image from 'next/image';
import PokemonLogo from '../../../../assets/pokemonLogo.png';
const FullLoader = () => {
    return (
        <div className="w-full h-screen bg-red-500 flex flex-col items-center justify-center">
            <Image
                src={PokemonLogo}
                height={100}
                alt="Picture of the author"
            />
        </div>
    )
}

export default FullLoader;