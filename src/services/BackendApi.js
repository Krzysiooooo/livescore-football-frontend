import _ from "lodash";

const PUBLIC_FRONTEND_URL = "https://eternal-wonder-362212.lm.r.appspot.com";
const PUBLIC_BACKEND_URL = "https://eternal-wonder-362212.lm.r.appspot.com";

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
        let path = `/api/leagues`;
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
        return httpRequest(`/api/league/${id}`, 'GET');
    },
    getTeams: (leagueId) => {
        return httpRequest(`/api/league/${leagueId}/teams`, 'GET');
    },
    getTeamsStatistics: (leagueId) => {
        return httpRequest(`/api/league/${leagueId}/teams/stats`, 'GET');
    },
    getFixturesByLeagueId: (leagueId) => {
        return httpRequest(`/api/league/${leagueId}/fixtures`, 'GET');
    },
    getLeagueByTeamId: (teamId) => {
        return httpRequest(`/api/team/${teamId}/league`, 'GET');
    },
    getTeam: (teamId) => {
        return httpRequest(`/api/team/${teamId}`, 'GET');
    },
    getTeamTransfers: (teamId) => {
        return httpRequest(`/api/team/${teamId}/transfers`, 'GET');
    },
    getTeamsSquad: (teamId) => {
        return httpRequest(`/api/team/${teamId}/squad`, 'GET');
    },
    getLiveFixtures: () => {
        return httpRequest(`/api/fixtures/live`, 'GET');
    },
    getFixture: (fixtureId) => {
        return httpRequest(`/api/fixture/${fixtureId}`, 'GET');
    },
    searchFixtures: (filters) => {
        return httpRequest(`/api/fixtures`, 'POST', filters);
    },
    getPlayer: (playerId, season) => {
        return httpRequest(`/api/player/${playerId}/${season}`, 'GET');
    }
};

export default BackendApi;
