import React from "react";
import "./selectField.scss";
import Select, { SingleValue } from "react-select";
import { SelectOption } from "../../../ts/types/SelectOption";

interface SelectFieldProps {
    options: SelectOption[];
    value: SelectOption | null;
    placeholder?: string;
    className?: string;
    maxMenuHeight: number;
    isSearchable: boolean;
    noOptionsMessage?: string;
    onChange: (target: SelectOption | null) => void;
}

const SelectField: React.FC<SelectFieldProps> = ({
    value,
    options,
    placeholder,
    className,
    isSearchable,
    maxMenuHeight,
    noOptionsMessage,
    onChange
}) => {
    const handleChange = (value: SingleValue<SelectOption>) => {
        onChange(value || null);
    };

    return (
        <Select
            classNamePrefix={className || "select_field"}
            options={options}
            value={value}
            placeholder={placeholder}
            onChange={handleChange}
            maxMenuHeight={maxMenuHeight}
            isSearchable={isSearchable}
            noOptionsMessage={() => <span>{noOptionsMessage}</span>}
        />
    );
};

export default React.memo(SelectField);
