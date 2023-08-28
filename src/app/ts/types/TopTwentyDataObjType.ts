import { IPlayerStats } from "../models/IPlayerStats";

export type TopTwentyDataObjType = {
    topTwentyByCardsWon: IPlayerStats[];
    topTwentyChampions: IPlayerStats[];
    topTwentyByWinrate: IPlayerStats[];
    topTwentyLosers: IPlayerStats[];
};
