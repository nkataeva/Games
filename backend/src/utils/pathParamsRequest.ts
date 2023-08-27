interface Options {
    genre: string,
    platform: string,
    sort: string;
}

const pathParamsRequest = (options: Options) => {
    const params = [];
    if (!options) {
        return '';
    }
    if (options.platform) {
        params.push(`platform=${encodeURIComponent(options.platform)}`);
    }
    if (options.genre) {
        params.push(`category=${encodeURIComponent(options.genre)}`);
    }
    if (options.sort) {
        params.push(`sort-by=${encodeURIComponent(options.sort)}`);
    }
    const queryString = params.join('&');
    return queryString;
};

export default pathParamsRequest;