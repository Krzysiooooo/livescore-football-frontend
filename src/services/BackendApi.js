const API_ADDRESS = "http://localhost:4000";

function httpRequest(path, method) {
    const url = API_ADDRESS + path;
    const config = {method: method};
    return fetch(url, config).then(data => data.json());
}

const BackendApi = {
    getLeagues: (query = {}) => {
        let path = `/leagues`;
        const queryArray = [];
        if (query.page) {
            queryArray.push(`page=${query.page}`);
        }
        if (query.ids) {
            queryArray.push(`ids=${query.ids.join(",")}`);
        }
        const queryString = queryArray.join("&");
        if (queryString) {
            path += "?" + queryString;
        }
        return httpRequest(path, 'GET');
    },
    getLeague: (id) => {
        return httpRequest(`/league/${id}`, 'GET');
    }
};

export default BackendApi;
