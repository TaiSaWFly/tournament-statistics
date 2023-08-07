import React, { useEffect, useState } from "react";
import style from "./tournamentListItem.module.scss";

interface TournamenListItemProps {
    currentListId: number;
    listId: number;
    tournamenNumber: number;
    handleChangeList: (listId: number) => void;
}

const TournamenListItem: React.FC<TournamenListItemProps> = ({
    currentListId,
    listId,
    tournamenNumber,
    handleChangeList
}) => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        setIsOpen(currentListId === listId && !isOpen);
    }, [currentListId, listId]);

    return (
        <li
            className={isOpen ? style.list_ltem__open : style.list_ltem}
            onClick={() => handleChangeList(listId)}
        >
            <div>{tournamenNumber} Турнир</div>
        </li>
    );
};

export default TournamenListItem;
