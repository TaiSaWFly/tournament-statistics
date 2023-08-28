import React from "react";
import style from "./tournamentPlaces.module.scss";
import TournamentTeamsPlacesTable from "../TournamentTeamsPlacesTable/TournamentTeamsPlacesTable";
import TournamentTeamTable from "../TournamentTeamTable/TournamentTeamTable";
import TournamentResultTeam from "../TournamentResultTeam/TournamentResultTeam";
import { ITournamentDb } from "../../../../ts/models/ITournamentDb";

interface TournamentPlacesProps {
    tournamentPlaceTeams: ITournamentDb[];
    tournamentFirstPlaceTeam: ITournamentDb[];
}

const TournamentPlaces: React.FC<TournamentPlacesProps> = ({
    tournamentPlaceTeams,
    tournamentFirstPlaceTeam
}) => {
    return (
        <div className={style.places_tables}>
            <div className={style.places_tables_wrap}>
                <div className={style.places__table}>
                    <TournamentTeamsPlacesTable
                        placeTeams={tournamentPlaceTeams}
                    />
                </div>

                <div className={style.places__table}>
                    <TournamentTeamTable team={tournamentFirstPlaceTeam} />
                </div>

                <div className={style.places__table}>
                    <TournamentResultTeam
                        firstPlaceTeamResult={tournamentFirstPlaceTeam[0]}
                    />
                </div>
            </div>
        </div>
    );
};

export default TournamentPlaces;
