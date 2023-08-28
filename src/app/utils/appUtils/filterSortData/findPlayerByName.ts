import { IPlayer } from "../../../ts/models/IPlayer";

const findPlayerByName = (playerName: string, dataPlayer: IPlayer[]) => {
    let player: IPlayer[] = [];

    if (playerName && dataPlayer.length !== 0) {
        const playerData = dataPlayer.filter(
            (player) =>
                player.Nickname.toLowerCase() === playerName.toLowerCase()
        );
        player = playerData;
    }

    return player;
};

export default findPlayerByName;
