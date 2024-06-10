import { PencilLine } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Card = ({ name, status, image, profileLink }) => {
  return (
    <div className="flex justify-center p-5">
      <Link href={profileLink}>
        <div className="relative group">
          <Image 
            src={image} 
            alt={name} 
            width={64}  // Set the width to 64 pixels
            height={64} // Set the height to 64 pixels
            className="rounded-full" 
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
            <PencilLine className="text-white h-8 w-8" />
          </div>
        </div>
      </Link>
      <div className="ml-4">
        <h2 className="text-lg font-bold">{name}</h2>
        <p className="text-sm">{status}</p>
      </div>
    </div>
  );
};

const InfoWaliCards = () => {
  const infoWalis = [
    {
      name: "Livia",
      status: "Anak",
      image: "/profile1.png",
      profileLink: "/account/wali/livia"
    },
    {
      name: "Randy",
      status: "Anak",
      image: "/profile2.png",
      profileLink: "/account/wali/randy"
    },
    {
      name: "Man",
      status: "Anak",
      image: "/profile3.png",
      profileLink: "/account/wali/man"
    }
  ];

  return (
    <div className="flex flex-col gap-4 p-4">
      <div style={{color : "#03045e"}} className="flex justify-center font-bold text-xl">Responsible person</div>
      <div style={{color : "#03045e"}} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {infoWalis.map((infoWali, index) => (
          <Card
            key={index}
            name={infoWali.name}
            status={infoWali.status}
            image={infoWali.image}
            profileLink={infoWali.profileLink}
          />
        ))}
      </div>
    </div>
  );
};

export default InfoWaliCards;
