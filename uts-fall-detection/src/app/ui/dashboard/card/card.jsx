import styles from './card.module.css'
import Image from 'next/image';

const Card = ({ name, status, image }) => {
    return (
      <div className={styles.card}>
        <div className={styles.imageContainer}>
          <img src={image} alt={name} className={styles.image} />
        </div>
        <div className={styles.details}>
          <h2 className={styles.name}>{name}</h2>
          <p className={styles.status}>{status}</p>
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
        <div className={styles.card}>
            <div className={styles.texts}>
                <span>Info Wali</span>            
            </div>
            <div className={styles.container}>
                {infoWalis.map((infoWali, index) => (
                <Card className="px-52 py-52"
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


