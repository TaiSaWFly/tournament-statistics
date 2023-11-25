const getWindowDimensions = () => {
    const { innerWidth: windowWidth, innerHeight: windowHeigth } = window;
    return { windowWidth, windowHeigth };
};

export default getWindowDimensions;
