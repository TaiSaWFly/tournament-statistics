let API;
let GA_KEY;

if (process.env.NODE_ENV === "development") {
    API = process.env.REACT_APP_DEV;
    GA_KEY = process.env.REACT_APP_GA_DEV;
}

if (process.env.NODE_ENV === "production") {
    API = process.env.REACT_APP_FIREBASEKEY;
    GA_KEY = process.env.REACT_APP_GA;
}

const config = {
    apiEndPoint: API,
    analiticKey: GA_KEY
};

export default config;
