import axios from "axios";
import config from "../config";
import { ITournamentDb } from "../ts/models/ITournamentDb";
import { IPlayer } from "../ts/models/IPlayer";
import { IMatchesDb } from "../ts/models/IMatchesDb";
import localStorageService from "./app.services/localStorage.service";

const http = axios.create({
    baseURL: config.apiEndPoint
});

http.interceptors.request.use(
    async function (config) {
        if (config.url) {
            const containSlash = /\/$/gi.test(config.url);
            config.url =
                (containSlash ? config.url.slice(0, -1) : config.url) + ".json";
        }

        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);

const transformData = (data: {
    [key: string]: ITournamentDb | IPlayer | IMatchesDb;
}) => {
    const transformData = data
        ? Object.keys(data).map((key) => ({
              ...data[key]
          }))
        : data;

    return transformData !== null
        ? transformData.filter((data) => data._id)
        : null;
};

http.interceptors.response.use(
    (res) => {
        res.data = { content: transformData(res.data) };
        return res;
    },
    function (error) {
        const expectedErrors =
            error.response &&
            error.response.status >= 400 &&
            error.response.status < 500;

        localStorageService.toStorage("error", {
            status: error.response.status,
            errorMessage: error.message
        });

        if (!expectedErrors) {
            const errorServerMessage = error.message;
            console.log(`Unexpected Error: ${errorServerMessage}`);
        }
        return Promise.reject(error);
    }
);

const httpService = {
    get: http.get
};

export default httpService;
