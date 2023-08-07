import { IMatchesDb } from "../../ts/models/IMatchesDb";
import { IPlayer } from "../../ts/models/IPlayer";
import { ITournamentDb } from "../../ts/models/ITournamentDb";

const transformData = {
    transformPlayerDb: (data: IPlayer[]) => {
        const transformPlayerDbNickname = data.map((data) =>
            typeof data.Nickname !== "string"
                ? {
                      ...data,
                      Nickname: String(data.Nickname).toLocaleUpperCase()
                  }
                : data
        );

        return transformPlayerDbNickname;
    },
    transformTournamentDb: (data: ITournamentDb[]) => {
        const transformTournamentDbAverageProximity = data.map((data) =>
            typeof data["Средняя близость матчей"] === "string"
                ? { ...data, "Средняя близость матчей": 0 }
                : data
        );

        const transformTournamentDbTeamPrice =
            transformTournamentDbAverageProximity.map((data) =>
                typeof data["Цена команды"] === "string"
                    ? { ...data, "Цена команды": 0 }
                    : data
            );

        const transformTournamentDbRate = transformTournamentDbTeamPrice.map(
            (data) =>
                typeof data.Рейтинг === "number"
                    ? { ...data, Рейтинг: String(data.Рейтинг) }
                    : data
        );

        const transformTournamentDbNickname = transformTournamentDbRate.map(
            (data) =>
                typeof data.Игрок !== "string"
                    ? {
                          ...data,
                          Игрок: String(data.Игрок).toLocaleUpperCase()
                      }
                    : data
        );

        const transformTournamentDbTeamName = transformTournamentDbNickname.map(
            (data) =>
                data.Команда.toLocaleLowerCase().includes("team")
                    ? {
                          ...data,
                          Команда: data.Команда.replace(/\bteam\b\s/i, "")
                      }
                    : { ...data }
        );

        return transformTournamentDbTeamName;
    },
    transformMatchesDb: (data: IMatchesDb[]) => {
        const transformMatchesDbPercentProximity = data.map((data) =>
            typeof data["Близость в процентах"] !== "number"
                ? { ...data, "Близость в процентах": 0 }
                : data
        );

        return transformMatchesDbPercentProximity;
    }
};

export default transformData;
