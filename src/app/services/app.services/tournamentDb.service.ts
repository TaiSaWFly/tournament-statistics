import { ITournamentDb } from "../../ts/models/ITournamentDb";
import httpService from "../http.service";
const tournamentDbEndPoint = "db/";

const tournamentDbService = {
    getList: async () => {
        const { data } = await httpService.get(tournamentDbEndPoint);
        return data as { content: ITournamentDb[] };
    }
};

export default tournamentDbService;
