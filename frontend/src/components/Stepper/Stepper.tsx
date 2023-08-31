import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import styles from './Stepper.module.scss';
import { Screenshots } from '../../types/GamesTypes';

interface StepperProps {
    images: Screenshots []
}

const Stepper = (props: StepperProps) => {
    const responsive = {
        0: {
            items: 1
        },
        720: {
            items: 2
        },
        1024: {
            items: 3,

        },
    };
    const items = props.images.map((el) =>
        <img src={el.image} className={styles.item} alt='screen'/>
    )
    return (
        <AliceCarousel mouseTracking disableDotsControls={true} items={items} responsive={responsive} />
    )
};

export default Stepper;
