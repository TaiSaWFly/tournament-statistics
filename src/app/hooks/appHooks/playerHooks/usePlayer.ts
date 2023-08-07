import findPlayerByName from "../../../utils/appUtils/filterSearchData/findPlayerByName";
import { useAppSelector } from "../../reduxHooks/reduxHooks";

const usePlayer = (playerId?: number, playerName?: string) => {
    const {
        entities: playerDb,
        player,
        playerData
    } = useAppSelector((state) => state.playersDb);

    const currentPlayerData = playerId
        ? playerDb.filter((player) => player.ID === playerId)
        : [];
    const playerLink = playerName
        ? findPlayerByName(playerName, currentPlayerData)
        : [];

    return {
        playerDb,
        player,
        playerData,
        currentPlayerData,
        playerLink
    };
};

export default usePlayer;
