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
        name: "Anisa",
        status: "Anak",
        image: "/lansia_logo.png"
      },
      {
        name: "Wulan",
        status: "Anak",
        image: "/lansia_logo.png"
      },
      {
        name: "Anwar",
        status: "Anak",
        image: "/lansia_logo.png"
      }
    ];
  
    return (
        <div>
            <div className={styles.texts}>
                <span>Info Wali</span>            
            </div>
            <div className={styles.container}>
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


