let API;

if (process.env.NODE_ENV === "development") {
    API = process.env.REACT_APP_DEV;
}

if (process.env.NODE_ENV === "production") {
    API = process.env.REACT_APP_FIREBASEKEY;
}

const config = {
    apiEndPoint: API
};

export default config;
