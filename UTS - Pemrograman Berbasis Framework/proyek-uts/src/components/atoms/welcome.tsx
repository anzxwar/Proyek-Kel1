import Image from "next/image"

const Welcome = () => {
    return (
        <div className="flex flex-col lg:flex-row items-start">
            <h2 style={{color : "#03045e"}} className="lg:ml-10 text-center lg:text-left text-xl lg:text-2xl font-bold">Welcome Charlene!</h2>
        </div>
    );
};

export default Welcome;
