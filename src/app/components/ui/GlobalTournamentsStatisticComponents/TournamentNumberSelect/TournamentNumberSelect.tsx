import React from "react";
import style from "./tournamentNumberSelect.module.scss";
import "./tournamentNumberSelectField.scss";
import SelectField from "../../../common/SelectField/SelectField";
import { SelectOption } from "../../../../ts/types/SelectOption";

interface TournamentNumberSelectProps {
    options: SelectOption[];
    value: SelectOption | null;
    onChange: (target: SelectOption | null) => void;
}

const TournamentNumberSelect: React.FC<TournamentNumberSelectProps> = ({
    options,
    value,
    onChange
}) => {
    return (
        <div className={style.tournament_number_select}>
            <SelectField
                name="tournamentNumber"
                options={options}
                value={value}
                onChange={onChange}
                className="tournament_number__select_field"
                maxMenuHeight={200}
                isSearchable={false}
            />
        </div>
    );
};

export default TournamentNumberSelect;
