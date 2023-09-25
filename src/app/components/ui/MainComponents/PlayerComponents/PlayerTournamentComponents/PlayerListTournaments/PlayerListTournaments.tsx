import React, { useState, useEffect, useCallback } from "react";
import style from "./playerListTournaments.module.scss";
import { IPlayer } from "../../../../../../ts/models/IPlayer";
import usePlayerTournaments from "../../../../../../hooks/appHooks/playerHooks/usePlayerTournaments";
import useDelayLoading from "../../../../../../hooks/appHooks/someHooks/useDelayLoading";
import Pagination from "../../../../../common/Pagination/Pagination";
import { pageSize } from "../../../../../../data/defaultInitialStateData";
import paginate from "../../../../../../utils/appUtils/other/paginate";
import PlayerTournamentItem from "../PlayerTournamentItemComponents/PlayerTournamentItem/PlayerTournamentItem";
import { TournamentTeam } from "../../../../../../ts/types/TournamentTypes/TournamentTeam";
import Loader from "../../../../../common/Loader/Loader";

interface PlayerListTournamentsProps {
    player: IPlayer;
}

const PlayerListTournaments: React.FC<PlayerListTournamentsProps> = ({
    player
}) => {
    const { isLoading } = useDelayLoading(676, player);
    const { dataTournamentTeams, tournamentNumbers } =
        usePlayerTournaments(player);
    const itemCount = dataTournamentTeams.length;

    const [currentPage, setCurrentPage] = useState(1);
    const [paginateData, setPaginateData] = useState<TournamentTeam[]>([]);

    const handlePageChange = useCallback((pageIndex: number) => {
        setCurrentPage(pageIndex);
    }, []);

    useEffect(() => {
        setPaginateData(dataTournamentTeams);
        setCurrentPage(1);
    }, [player]);

    const paginateDataCrop = paginate(paginateData, currentPage, pageSize);

    if (isLoading) return <Loader />;
    return (
        <div>
            <div className={style.player_tournaments__title}>
                {itemCount > 1 ? "Турниры" : "Турнир"}
            </div>

            <Pagination
                {...{
                    itemCount,
                    pageSize,
                    currentPage,
                    pageNames: tournamentNumbers,
                    onPageChange: handlePageChange
                }}
            />

            <div className={style.player_tournament_item__wrap}>
                {paginateDataCrop.map((data) => (
                    <div
                        key={data._id}
                        className={style.player_tournament_item}
                    >
                        <PlayerTournamentItem
                            teamName={data.teamName}
                            tournamentNumber={data.tournamentNumber}
                            teamTournament={data.teamTournament}
                            tournamentTeamsQty={data.tournamentTeamsQty}
                        />
                    </div>
                ))}
            </div>

            {itemCount > pageSize && (
                <Pagination
                    {...{
                        itemCount,
                        pageSize,
                        currentPage,
                        pageNames: tournamentNumbers,
                        onPageChange: handlePageChange
                    }}
                />
            )}
        </div>
    );
};

export default PlayerListTournaments;
