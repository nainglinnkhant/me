import styles from '../../styles/Spinner.module.css'

export default function Spinner() {
    return (
        <div className={`flex justify-center items-center w-full h-screen bg-dark`}>
            <div className={styles['trinity-rings-spinner']}>
                <div className={`${styles['circle']} border-gray-200`}></div>
                <div className={`${styles['circle']} border-gray-200`}></div>
                <div className={`${styles['circle']} border-gray-200`}></div>
            </div>
        </div>
    )
}
