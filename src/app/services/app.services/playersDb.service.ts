import { IPlayer } from "../../ts/models/IPlayer";
import httpService from "../http.service";
const playersDbEndPoint = "IDs/";

const playersDbService = {
    getList: async () => {
        const { data } = await httpService.get(playersDbEndPoint);
        return data as { content: IPlayer[] };
    }
};

export default playersDbService;
