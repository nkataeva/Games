import styles from './GamePage.module.scss';
import Stepper from '../../components/Stepper/Stepper';
import GameInfo from '../../components/GameInfo/GameInfo';
import SystemReq from '../../components/GameInfo/SystemReq';

const GamePage = () => {
    return (
        <div id={styles.content}>
            <div id={styles.main}>
                <img src='https:\/\/www.freetogame.com\/g\/6\/thumbnail.jpg' alt='Game Image' className={styles.poster} />
                <GameInfo />
            </div>
            <SystemReq/>
            <Stepper />
        </div>
    )
}

export default GamePage;