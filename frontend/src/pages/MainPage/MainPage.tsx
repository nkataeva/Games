import React from 'react';
import Card from '../../components/Card';
import SelectForm from '../../components/SelectForm';
import options from '../../utils/searchOptions';
import { Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import styles from "./MainPage.module.scss";

const MainPage = () => {

    const [selectedOptions, setSelectedOptions] = React.useState({
        genre: '',
        platform: '',
        sort: '',
    });

    const handleApply = () => {
        //действия с выбранными значениями
        console.log(selectedOptions);
    };

    const handleReset = () => {
        setSelectedOptions({
            genre: '',
            platform: '',
            sort: '',
        });
    };

    return (
        <div id={styles.content}>
            <Typography variant="h4" id={styles.title}>
                Free-To-Play Games interface
            </Typography>

            <div id={styles.options}>
                <SelectForm
                    name={'Жанр'}
                    options={options.categoryOptions}
                    value={selectedOptions.genre}
                    onChange={(value) =>
                        setSelectedOptions({ ...selectedOptions, genre: value })
                    } />
                <SelectForm
                    name={'Платформа'}
                    options={options.platformOptions}
                    value={selectedOptions.platform}
                    onChange={(value) =>
                        setSelectedOptions({ ...selectedOptions, platform: value })
                    } />
                <SelectForm
                    name={'Сортировать'}
                    options={options.sortOptions}
                    value={selectedOptions.sort}
                    onChange={(value) =>
                        setSelectedOptions({ ...selectedOptions, sort: value })
                    } />
            </div>

            <Stack spacing={2} direction="row" id={styles.buttons}>
                <Button variant="contained" onClick={handleApply}>Применить</Button>
                <Button variant="outlined" onClick={handleReset}>Сбросить</Button>
            </Stack>

            <div id={styles.conatiner}>
                {/* <Card /> */}
            </div>

        </div>
    )
}

export default MainPage;