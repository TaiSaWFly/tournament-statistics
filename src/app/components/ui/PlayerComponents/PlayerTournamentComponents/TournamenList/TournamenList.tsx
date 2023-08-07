import React, { useState, useEffect } from "react";
import style from "./tournamentList.module.scss";
import { ITournamentDb } from "../../../../../ts/models/ITournamentDb";
import TournamenListItem from "../TournamenListItem/TournamenListItem";
import { IPlayer } from "../../../../../ts/models/IPlayer";

interface TournamenListProps {
    player: IPlayer;
    tournaments: ITournamentDb[];
    getCurrentListId: (currentListId: number) => void;
}

const TournamenList: React.FC<TournamenListProps> = ({
    player,
    tournaments,
    getCurrentListId
}) => {
    const [currentListId, setCurrentListId] = useState(0);

    useEffect(() => {
        setCurrentListId(tournaments[0]._id);
    }, [player]);

    useEffect(() => {
        getCurrentListId(currentListId);
    }, [currentListId]);

    const handleChangeList = (listId: number) => {
        setCurrentListId(listId);
    };

    return (
        <ul className={style.tournamen_list}>
            {tournaments.map((tour) => (
                <TournamenListItem
                    key={tour._id}
                    currentListId={currentListId}
                    listId={tour._id}
                    tournamenNumber={tour["Номер турнира"]}
                    handleChangeList={handleChangeList}
                />
            ))}
        </ul>
    );
};

export default TournamenList;
