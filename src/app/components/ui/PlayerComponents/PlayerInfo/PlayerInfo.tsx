import React from "react";
import style from "./playerInfo.module.scss";
import { IPlayer } from "../../../../ts/models/IPlayer";
import usePlayer from "../../../../hooks/appHooks/playerHooks/usePlayer";
import CopyComponent from "../../../hoc/CopyComponent/CopyComponent";

interface PlayerInfoProps {
    player: IPlayer;
}

const PlayerInfo: React.FC<PlayerInfoProps> = ({ player }) => {
    const { playerData } = usePlayer();

    return (
        <div className={style.player_info}>
            <div className={style.player_info__wrap}>
                <div className={style.player_nickname}>{player.Nickname}</div>

                {player.twitch !== "" && (
                    <div className={style.player_twitch}>
                        <a
                            href={`https://twitch.tv/${player.twitch}`}
                            target={"_blank"}
                            rel="noreferrer"
                        >{`twitch.tv/${player.twitch}`}</a>
                    </div>
                )}
            </div>

            <div>
                {playerData.map((player) => (
                    <div key={player._id} className={style.player_btag}>
                        <CopyComponent
                            copyText={player.Btag}
                            copyTextInfo="BTag"
                        >
                            <span>{player.Btag}</span>
                        </CopyComponent>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PlayerInfo;
