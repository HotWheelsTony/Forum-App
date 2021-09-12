import React from "react";
import DropDownPicker from 'react-native-dropdown-picker';
import {useState} from "react";

export default function CoursePicker() {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        {label: 'SWEN325', value: 'swen325'},
        {label: 'COMP361', value: 'comp361'}
    ]);

    return (
        <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            selectedItemLabelStyle={{
                fontWeight: "bold"
            }}

        />
    );
}
