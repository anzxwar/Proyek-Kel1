import Image from 'next/image';

const Card = ({ name, status, image }) => {
  return (
    <div className="flex items-center p-5">
      <div>
        <img src={image} alt={name} className="h-16 w-16 rounded-full" />
      </div>
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
      image: "/profile1.png"
    },
    {
      name: "Randy",
      status: "Anak",
      image: "/profile2.png"
    },
    {
      name: "Man",
      status: "Anak",
      image: "/profile3.png"
    }
  ];

  return (
    <div className="flex flex-col gap-4 p-4">
      <div style={{color : "#03045e"}} className="font-bold text-xl">Responsible person</div>
      <div style={{color : "#03045e"}} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {infoWalis.map((infoWali, index) => (
          <Card
            key={index}
            name={infoWali.name}
            status={infoWali.status}
            image={infoWali.image}
          />
        ))}
      </div>
    </div>
  );
};

export default InfoWaliCards;
