import { IMatchesDb } from "../../ts/models/IMatchesDb";
import httpService from "../http.service";
const matchesDbEndPoint = "matches_db/";

const matchesDbService = {
    getList: async () => {
        const { data } = await httpService.get(matchesDbEndPoint);
        return data as { content: IMatchesDb[] };
    }
};

export default matchesDbService;
