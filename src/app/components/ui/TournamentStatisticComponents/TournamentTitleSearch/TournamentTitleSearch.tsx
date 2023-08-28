import React from "react";
import style from "./tournamentTitleSearch.module.scss";
import { SelectOption } from "../../../../ts/types/SelectOption";
import SelectField from "../../../common/SelectField/SelectField";

interface TournamentTitleSearchProps {
    tournamentOptions: SelectOption[];
    optionData: SelectOption | null;
    tournamentNumber: number;
    handleChange: (target: SelectOption | null) => void;
}

const TournamentTitleSearch: React.FC<TournamentTitleSearchProps> = ({
    tournamentOptions,
    optionData,
    tournamentNumber,
    handleChange
}) => {
    return (
        <div className={style.title_search}>
            <div className={style.title_search__wrap}>
                <div className={style.title_search__select}>
                    <SelectField
                        options={tournamentOptions}
                        value={optionData}
                        onChange={handleChange}
                        maxMenuHeight={155}
                        isSearchable={false}
                    />
                </div>

                <div className={style.title_search__title}>
                    Турнир Анака № {tournamentNumber}
                </div>
            </div>
        </div>
    );
};

export default TournamentTitleSearch;
