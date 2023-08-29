import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import styles from './Stepper.module.scss';

const images = [
    {
        imgPath:
            'https:www.freetogame.com\/g\/452\/Call-of-Duty-Warzone-1.jpg',
    },
    {
        imgPath:
            'https://img3.akspic.ru/attachments/originals/7/6/5/4/94567-koshki_malogo_i_srednego_razmera-kot-morda-usy-britanskaya_korotkosherstnaya-2048x1380.jpg',
    },
    {
        imgPath:
            'https:www.freetogame.com\/g\/452\/Call-of-Duty-Warzone-3.jpg',
    },
    {
        imgPath:
            'https:www.freetogame.com\/g\/452\/Call-of-Duty-Warzone-4.jpg',
    },
    {
        imgPath:
            'https://i01.fotocdn.net/s114/d56d2d48e883765a/public_pin_l/2593066330.jpg',
    },
];

const Stepper = () => {
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
    const items = images.map((el) =>
        <img src={el.imgPath} className={styles.item} alt='screen'/>
    )
    return (
        <AliceCarousel mouseTracking disableDotsControls={true} items={items} responsive={responsive} />
    )
};

export default Stepper;
