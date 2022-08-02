import _ from "lodash";

const PUBLIC_FRONTEND_URL = "http://ec2-3-16-161-58.us-east-2.compute.amazonaws.com";
const PUBLIC_BACKEND_URL = "http://ec2-3-144-234-63.us-east-2.compute.amazonaws.com:4000";

function httpRequest(path, method, payload) {
    let API_ADDRESS = "http://localhost:4000";
    if (window.location.origin === PUBLIC_FRONTEND_URL) {
        API_ADDRESS = PUBLIC_BACKEND_URL;
    }
    const url = API_ADDRESS + path;
    const config = {method: method};
    if(method == "POST" && !_.isEmpty(payload)){
        config.body = JSON.stringify(payload);
        config.headers = {'Content-Type' : 'application/json'};
    }
    if (_.isFunction(statusHandler)){
        statusHandler(true);
    }
    return fetch(url, config).then(data => {
        if (_.isFunction(statusHandler)){
            statusHandler(false);
        }
        return data.json();
    });
}

let statusHandler;

const BackendApi = {
    registerStatusHandler: (handler) => {
        statusHandler = handler;
    },
    getLeagues: (query = {}) => {
        let path = `/leagues`;
        const queryArray = [];
        if (query.page) {
            queryArray.push(`page=${query.page}`);
        }
        if (query.size) {
            queryArray.push(`size=${query.size}`);
        }
        if (query.search) {
            queryArray.push(`search=${query.search}`);
        }
        const queryString = queryArray.join("&");
        if (queryString) {
            path += "?" + queryString;
        }
        return httpRequest(path, 'GET');
    },
    getLeague: (id) => {
        return httpRequest(`/league/${id}`, 'GET');
    },
    getTeams: (leagueId) => {
        return httpRequest(`/league/${leagueId}/teams`, 'GET');
    },
    getTeamsStatistics: (leagueId) => {
        return httpRequest(`/league/${leagueId}/teams/stats`, 'GET');
    },
    getFixturesByLeagueId: (leagueId) => {
        return httpRequest(`/league/${leagueId}/fixtures`, 'GET');
    },
    getLeagueByTeamId: (teamId) => {
        return httpRequest(`/team/${teamId}/league`, 'GET');
    },
    getTeam: (teamId) => {
        return httpRequest(`/team/${teamId}`, 'GET');
    },
    getTeamTransfers: (teamId) => {
        return httpRequest(`/team/${teamId}/transfers`, 'GET');
    },
    getTeamsSquad: (teamId) => {
        return httpRequest(`/team/${teamId}/squad`, 'GET');
    },
    getLiveFixtures: () => {
        return httpRequest(`/fixtures/live`, 'GET');
    },
    getFixture: (fixtureId) => {
        return httpRequest(`/fixture/${fixtureId}`, 'GET');
    },
    searchFixtures: (filters) => {
        return httpRequest(`/fixtures`, 'POST', filters);
    },
    getPlayer: (playerId, season) => {
        return httpRequest(`/player/${playerId}/${season}`, 'GET');
    }
};

export default BackendApi;
