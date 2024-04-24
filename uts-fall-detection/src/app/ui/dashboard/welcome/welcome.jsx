import styles from './welcome.module.css'

const Welcome = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title} >
                Welcome Charlene!

                    <img className='pl-60' src="/wave_hand.png"/>
            </h2>
        </div>
    )
}

export default Welcome