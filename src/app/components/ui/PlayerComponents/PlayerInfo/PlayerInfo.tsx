import React from "react";
import style from "./playerInfo.module.scss";
import { IPlayer } from "../../../../ts/models/IPlayer";

interface PlayerInfoProps {
    nickname: string;
    twitch: string;
    playerData: IPlayer[];
}

const PlayerInfo: React.FC<PlayerInfoProps> = ({
    nickname,
    twitch,
    playerData
}) => {
    return (
        <div className={style.player_info}>
            <div className={style.player_info__wrap}>
                <div className={style.player_nickname}>{nickname}</div>
                {twitch !== "" && (
                    <div className={style.player_twitch}>
                        <a
                            href={`https://twitch.tv/${twitch}`}
                            target={"_blank"}
                            rel="noreferrer"
                        >{`twitch.tv/${twitch}`}</a>
                    </div>
                )}
            </div>

            <div>
                {playerData.map((player) => (
                    <div key={player._id} className={style.player_btag}>
                        {player.Btag}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PlayerInfo;
