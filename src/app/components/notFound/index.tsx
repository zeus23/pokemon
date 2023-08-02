import Image from 'next/image';
import notFound from '../../../../assets/avatar.png'

const NotFound = () => {
    return (
        <div className='w-full h-[500px] flex items-center justify-center flex-col'>
            <Image
                src={notFound}
                height={200}
                width={200}
                alt="not-found"
            />
            <p className='text-lg text-gray-500 mt-10'>No pokemon found !</p>
        </div>
    )
}

export default NotFound;