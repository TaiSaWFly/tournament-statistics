import { useAppSelector } from "../../reduxHooks/reduxHooks";
import findPlayerByName from "../../../utils/appUtils/filterSortData/findPlayerByName";

const usePlayer = (playerId?: number, playerName?: string) => {
    const {
        entities: playerDb,
        player,
        playerData,
        isSettingPlayer
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
        playerLink,
        isSettingPlayer
    };
};

export default usePlayer;
