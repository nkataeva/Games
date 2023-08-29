import React from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

interface propsSelectForm {
    name: string,
    options: string[],
    value: string,
    onChange: (newValue: string) => void
}

const SelectForm = (props: propsSelectForm) => {

    const handleChange = (event: SelectChangeEvent) => {
        const newValue = event.target.value;
        props.onChange(newValue);
    };

    return (
        <FormControl sx={{ minWidth: 160 }}>
            <InputLabel id="demo-simple-select-helper-label">{props.name}</InputLabel>
            <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={props.value}
                onChange={handleChange}
            >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                {props.options.map((el) =>
                    <MenuItem value={el}>{el}</MenuItem>
                )}
            </Select>
        </FormControl>
    )
}

export default SelectForm;