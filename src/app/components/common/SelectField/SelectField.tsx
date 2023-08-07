import React from "react";
import Select, { SingleValue } from "react-select";
import { SelectOption } from "../../../ts/types/SelectOption";

interface SelectFieldProps {
    name: string;
    options: SelectOption[];
    value: SelectOption | null;
    placeholder?: string;
    className: string;
    maxMenuHeight: number;
    isSearchable: boolean;
    noOptionsMessage?: string;
    onChange: (target: SelectOption | null) => void;
}

const SelectField: React.FC<SelectFieldProps> = ({
    name,
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
            classNamePrefix={className}
            options={options}
            name={name}
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
