function httpRequest(path, method) {
    let API_ADDRESS = "http://localhost:4000";
    if (window.location.origin === 'http://ec2co-ecsel-14q0z6yreq0yn-1985279788.us-east-2.elb.amazonaws.com') {
        API_ADDRESS = "http://ec2co-ecsel-14q0z6yreq0yn-1985279788.us-east-2.elb.amazonaws.com:4000";
    }
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
    }
};

export default BackendApi;
