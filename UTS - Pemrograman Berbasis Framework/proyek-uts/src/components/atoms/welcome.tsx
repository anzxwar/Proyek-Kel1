import Image from "next/image"

const Welcome = () => {
    return (
        <div className="flex items-center mt-2 mb-1">
            <h2 className="ml-10 text-2xl text-blue-700 font-bold">Welcome Charlene! </h2>
            <img className='pl-4 ' src="/wave_hand.png"/>
            
        </div>
    )
}

export default Welcome