const teams = [
    {
        "team_id": 33,
        "name": "Manchester United",
        "code": "MUN",
        "logo": "https://media.api-football.com/teams/33.png",
        "country": "England",
        "is_national": false,
        "founded": 1878,
        "venue_name": "Old Trafford",
        "venue_surface": "grass",
        "venue_address": "Sir Matt Busby Way",
        "venue_city": "Manchester",
        "venue_capacity": 76212
    },
    {
        "team_id": 46,
        "name": "Leicester",
        "code": null,
        "logo": "https://media.api-football.com/teams/46.png",
        "country": "England",
        "is_national": false,
        "founded": 1884,
        "venue_name": "King Power Stadium",
        "venue_surface": "grass",
        "venue_address": "Filbert Way",
        "venue_city": "Leicester, Leicestershire",
        "venue_capacity": 32262
    },
    {
        "team_id": 34,
        "name": "Newcastle",
        "code": null,
        "logo": "https://media.api-football.com/teams/34.png",
        "country": "England",
        "is_national": false,
        "founded": 1892,
        "venue_name": "St. James' Park",
        "venue_surface": "grass",
        "venue_address": "St. James&apos; Street",
        "venue_city": "Newcastle upon Tyne",
        "venue_capacity": 52389
    },
    {
        "team_id": 47,
        "name": "Tottenham",
        "code": null,
        "logo": "https://media.api-football.com/teams/47.png",
        "country": "England",
        "is_national": false,
        "founded": 1882,
        "venue_name": "Tottenham Hotspur Stadium",
        "venue_surface": "grass",
        "venue_address": "Bill Nicholson Way, 748 High Road",
        "venue_city": "London",
        "venue_capacity": 62062
    },
    {
        "team_id": 35,
        "name": "Bournemouth",
        "code": null,
        "logo": "https://media.api-football.com/teams/35.png",
        "country": "England",
        "is_national": false,
        "founded": 1899,
        "venue_name": "Vitality Stadium",
        "venue_surface": "grass",
        "venue_address": "Dean Court, Kings Park",
        "venue_city": "Bournemouth, Dorset",
        "venue_capacity": 12000
    },
    {
        "team_id": 43,
        "name": "Cardiff",
        "code": null,
        "logo": "https://media.api-football.com/teams/43.png",
        "country": "Wales",
        "is_national": false,
        "founded": 1889,
        "venue_name": "Cardiff City Stadium",
        "venue_surface": "grass",
        "venue_address": "Leckwith Road",
        "venue_city": "Caerdydd",
        "venue_capacity": 33280
    },
    {
        "team_id": 36,
        "name": "Fulham",
        "code": null,
        "logo": "https://media.api-football.com/teams/36.png",
        "country": "England",
        "is_national": false,
        "founded": 1879,
        "venue_name": "Craven Cottage",
        "venue_surface": "grass",
        "venue_address": "Stevenage Road",
        "venue_city": "London",
        "venue_capacity": 25700
    },
    {
        "team_id": 52,
        "name": "Crystal Palace",
        "code": null,
        "logo": "https://media.api-football.com/teams/52.png",
        "country": "England",
        "is_national": false,
        "founded": 1905,
        "venue_name": "Selhurst Park",
        "venue_surface": "grass",
        "venue_address": "Holmesdale Road",
        "venue_city": "London",
        "venue_capacity": 26309
    },
    {
        "team_id": 37,
        "name": "Huddersfield",
        "code": null,
        "logo": "https://media.api-football.com/teams/37.png",
        "country": "England",
        "is_national": false,
        "founded": 1908,
        "venue_name": "John Smith's Stadium",
        "venue_surface": "grass",
        "venue_address": "Stadium Way",
        "venue_city": "Huddersfield, West Yorkshire",
        "venue_capacity": 24554
    },
    {
        "team_id": 49,
        "name": "Chelsea",
        "code": null,
        "logo": "https://media.api-football.com/teams/49.png",
        "country": "England",
        "is_national": false,
        "founded": 1905,
        "venue_name": "Stamford Bridge",
        "venue_surface": "grass",
        "venue_address": "Fulham Road",
        "venue_city": "London",
        "venue_capacity": 41841
    },
    {
        "team_id": 38,
        "name": "Watford",
        "code": null,
        "logo": "https://media.api-football.com/teams/38.png",
        "country": "England",
        "is_national": false,
        "founded": 1881,
        "venue_name": "Vicarage Road",
        "venue_surface": "grass",
        "venue_address": "Vicarage Road",
        "venue_city": "Watford",
        "venue_capacity": 21577
    },
    {
        "team_id": 51,
        "name": "Brighton",
        "code": null,
        "logo": "https://media.api-football.com/teams/51.png",
        "country": "England",
        "is_national": false,
        "founded": 1901,
        "venue_name": "The American Express Community Stadium",
        "venue_surface": "grass",
        "venue_address": "Village Way",
        "venue_city": "Falmer, East Sussex",
        "venue_capacity": 30750
    },
    {
        "team_id": 39,
        "name": "Wolves",
        "code": null,
        "logo": "https://media.api-football.com/teams/39.png",
        "country": "England",
        "is_national": false,
        "founded": 1877,
        "venue_name": "Molineux Stadium",
        "venue_surface": "grass",
        "venue_address": "Waterloo Road",
        "venue_city": "Wolverhampton, West Midlands",
        "venue_capacity": 31700
    },
    {
        "team_id": 45,
        "name": "Everton",
        "code": null,
        "logo": "https://media.api-football.com/teams/45.png",
        "country": "England",
        "is_national": false,
        "founded": 1878,
        "venue_name": "Goodison Park",
        "venue_surface": "grass",
        "venue_address": "Goodison Road",
        "venue_city": "Liverpool",
        "venue_capacity": 40569
    },
    {
        "team_id": 40,
        "name": "Liverpool",
        "code": null,
        "logo": "https://media.api-football.com/teams/40.png",
        "country": "England",
        "is_national": false,
        "founded": 1892,
        "venue_name": "Anfield",
        "venue_surface": "grass",
        "venue_address": "Anfield Road",
        "venue_city": "Liverpool",
        "venue_capacity": 55212
    },
    {
        "team_id": 48,
        "name": "West Ham",
        "code": null,
        "logo": "https://media.api-football.com/teams/48.png",
        "country": "England",
        "is_national": false,
        "founded": 1895,
        "venue_name": "London Stadium",
        "venue_surface": "grass",
        "venue_address": "Marshgate Lane, Stratford",
        "venue_city": "London",
        "venue_capacity": 60000
    },
    {
        "team_id": 41,
        "name": "Southampton",
        "code": null,
        "logo": "https://media.api-football.com/teams/41.png",
        "country": "England",
        "is_national": false,
        "founded": 1885,
        "venue_name": "St. Mary's Stadium",
        "venue_surface": "grass",
        "venue_address": "Britannia Road",
        "venue_city": "Southampton, Hampshire",
        "venue_capacity": 32689
    },
    {
        "team_id": 44,
        "name": "Burnley",
        "code": null,
        "logo": "https://media.api-football.com/teams/44.png",
        "country": "England",
        "is_national": false,
        "founded": 1882,
        "venue_name": "Turf Moor",
        "venue_surface": "grass",
        "venue_address": "Harry Potts Way",
        "venue_city": "Burnley",
        "venue_capacity": 22546
    },
    {
        "team_id": 42,
        "name": "Arsenal",
        "code": null,
        "logo": "https://media.api-football.com/teams/42.png",
        "country": "England",
        "is_national": false,
        "founded": 1886,
        "venue_name": "Emirates Stadium",
        "venue_surface": "grass",
        "venue_address": "Queensland Road",
        "venue_city": "London",
        "venue_capacity": 60383
    },
    {
        "team_id": 50,
        "name": "Manchester City",
        "code": null,
        "logo": "https://media.api-football.com/teams/50.png",
        "country": "England",
        "is_national": false,
        "founded": 1880,
        "venue_name": "Etihad Stadium",
        "venue_surface": "grass",
        "venue_address": "Rowsley Street",
        "venue_city": "Manchester",
        "venue_capacity": 55097
    }
];

const leagues = {
    "api":
        {
            "results": 94, "leagues": {
                "1": {
                    "league_id": "1",
                    "name": "2018 Russia World Cup",
                    "country": "World",
                    "season": "2018",
                    "season_start": "2018-06-14",
                    "season_end": "2018-07-15",
                    "logo": "https://www.api-football.com/public/leagues/1.png",
                    "standings": false
                },
                "85": {
                    "league_id": "85",
                    "name": "A PFG",
                    "country": "Bulgaria",
                    "season": "2018",
                    "season_start": "2018-07-20",
                    "season_end": "2019-03-16",
                    "logo": "https://www.api-football.com/public/leagues/85.jpg",
                    "standings": true
                },
                "18": {
                    "league_id": "18",
                    "name": "Allsvenskan",
                    "country": "Sweden",
                    "season": "2018",
                    "season_start": "2018-04-01",
                    "season_end": "2018-11-11",
                    "logo": "https://www.api-football.com/public/leagues/18.gif",
                    "standings": true
                },
                "50": {
                    "league_id": "50",
                    "name": "Allsvenskan",
                    "country": "Sweden",
                    "season": "2017",
                    "season_start": "2017-04-01",
                    "season_end": "2017-11-05",
                    "logo": "https://www.api-football.com/public/leagues/50.gif",
                    "standings": true
                },
                "75": {
                    "league_id": "75",
                    "name": "Allsvenskan",
                    "country": "Sweden",
                    "season": "2016",
                    "season_start": "2016-04-02",
                    "season_end": "2016-11-06",
                    "logo": "https://www.api-football.com/public/leagues/75.gif",
                    "standings": true
                },
                "8": {
                    "league_id": "8",
                    "name": "Bundesliga 1",
                    "country": "Germany",
                    "season": "2018",
                    "season_start": "2018-08-24",
                    "season_end": "2019-05-18",
                    "logo": "https://www.api-football.com/public/leagues/8.png",
                    "standings": true
                },
                "35": {
                    "league_id": "35",
                    "name": "Bundesliga 1",
                    "country": "Germany",
                    "season": "2017",
                    "season_start": "2017-08-18",
                    "season_end": "2018-05-12",
                    "logo": "https://www.api-football.com/public/leagues/35.png",
                    "standings": true
                },
                "54": {
                    "league_id": "54",
                    "name": "Bundesliga 1",
                    "country": "Germany",
                    "season": "2016",
                    "season_start": "2016-08-26",
                    "season_end": "2017-05-20",
                    "logo": "https://www.api-football.com/public/leagues/54.png",
                    "standings": true
                },
                "9": {
                    "league_id": "9",
                    "name": "Bundesliga 2",
                    "country": "Germany",
                    "season": "2018",
                    "season_start": "2018-08-03",
                    "season_end": "2019-05-19",
                    "logo": "https://www.api-football.com/public/leagues/9.jpg",
                    "standings": true
                },
                "36": {
                    "league_id": "36",
                    "name": "Bundesliga 2",
                    "country": "Germany",
                    "season": "2017",
                    "season_start": "2017-07-28",
                    "season_end": "2018-05-13",
                    "logo": "https://www.api-football.com/public/leagues/36.jpg",
                    "standings": true
                },
                "55": {
                    "league_id": "55",
                    "name": "Bundesliga 2",
                    "country": "Germany",
                    "season": "2016",
                    "season_start": "2016-08-05",
                    "season_end": "2017-05-21",
                    "logo": "https://www.api-football.com/public/leagues/55.jpg",
                    "standings": true
                },
                "31": {
                    "league_id": "31",
                    "name": "Champions League",
                    "country": "World",
                    "season": "2017",
                    "season_start": "2017-09-12",
                    "season_end": "2018-05-26",
                    "logo": "https://www.api-football.com/public/leagues/31.png",
                    "standings": false
                },
                "52": {
                    "league_id": "52",
                    "name": "Champions League",
                    "country": "World",
                    "season": "2016",
                    "season_start": "2016-09-13",
                    "season_end": "2017-06-03",
                    "logo": "https://www.api-football.com/public/leagues/52.png",
                    "standings": false
                },
                "3": {
                    "league_id": "3",
                    "name": "Championship",
                    "country": "England",
                    "season": "2018",
                    "season_start": "2018-08-03",
                    "season_end": "2019-05-05",
                    "logo": "https://www.api-football.com/public/leagues/3.png",
                    "standings": true
                },
                "38": {
                    "league_id": "38",
                    "name": "Championship",
                    "country": "England",
                    "season": "2017",
                    "season_start": "2017-08-04",
                    "season_end": "2018-05-06",
                    "logo": "https://www.api-football.com/public/leagues/38.png",
                    "standings": true
                },
                "57": {
                    "league_id": "57",
                    "name": "Championship",
                    "country": "England",
                    "season": "2016",
                    "season_start": "2016-08-05",
                    "season_end": "2017-05-07",
                    "logo": "https://www.api-football.com/public/leagues/57.png",
                    "standings": true
                },
                "89": {
                    "league_id": "89",
                    "name": "Coppa Italia",
                    "country": "Italy",
                    "season": "2017",
                    "season_start": "2017-07-29",
                    "season_end": "2018-05-09",
                    "logo": "https://www.api-football.com/public/leagues/89.png",
                    "standings": false
                },
                "90": {
                    "league_id": "90",
                    "name": "Coppa Italia",
                    "country": "Italy",
                    "season": "2016",
                    "season_start": "2016-08-05",
                    "season_end": "2017-05-17",
                    "logo": "https://www.api-football.com/public/leagues/90.png",
                    "standings": false
                },
                "21": {
                    "league_id": "21",
                    "name": "Eerste Divisie",
                    "country": "Netherlands",
                    "season": "2018",
                    "season_start": "2018-08-17",
                    "season_end": "2019-05-03",
                    "logo": "https://www.api-football.com/public/leagues/21.png",
                    "standings": true
                },
                "47": {
                    "league_id": "47",
                    "name": "Eerste Divisie",
                    "country": "Netherlands",
                    "season": "2017",
                    "season_start": "2017-08-18",
                    "season_end": "2018-04-28",
                    "logo": "https://www.api-football.com/public/leagues/47.png",
                    "standings": true
                },
                "72": {
                    "league_id": "72",
                    "name": "Eerste Divisie",
                    "country": "Netherlands",
                    "season": "2016",
                    "season_start": "2016-08-05",
                    "season_end": "2017-05-05",
                    "logo": "https://www.api-football.com/public/leagues/72.png",
                    "standings": true
                },
                "16": {
                    "league_id": "16",
                    "name": "Ekstraklasa",
                    "country": "Poland",
                    "season": "2018",
                    "season_start": "2018-07-20",
                    "season_end": "2019-04-13",
                    "logo": "https://www.api-football.com/public/leagues/16.png",
                    "standings": true
                },
                "15": {
                    "league_id": "15",
                    "name": "Eliteserien",
                    "country": "Norway",
                    "season": "2018",
                    "season_start": "2018-03-11",
                    "season_end": "2018-11-30",
                    "logo": "https://www.api-football.com/public/leagues/15.png",
                    "standings": true
                },
                "45": {
                    "league_id": "45",
                    "name": "Eliteserien",
                    "country": "Norway",
                    "season": "2017",
                    "season_start": "2017-04-01",
                    "season_end": "2017-11-26",
                    "logo": "https://www.api-football.com/public/leagues/45.png",
                    "standings": true
                },
                "70": {
                    "league_id": "70",
                    "name": "Eliteserien",
                    "country": "Norway",
                    "season": "2016",
                    "season_start": "2016-03-11",
                    "season_end": "2016-11-06",
                    "logo": "https://www.api-football.com/public/leagues/70.png",
                    "standings": true
                },
                "10": {
                    "league_id": "10",
                    "name": "Eredivisie",
                    "country": "Netherlands",
                    "season": "2018",
                    "season_start": "2018-08-10",
                    "season_end": "2019-05-12",
                    "logo": "https://www.api-football.com/public/leagues/10.png",
                    "standings": true
                },
                "46": {
                    "league_id": "46",
                    "name": "Eredivisie",
                    "country": "Netherlands",
                    "season": "2017",
                    "season_start": "2017-08-11",
                    "season_end": "2018-05-06",
                    "logo": "https://www.api-football.com/public/leagues/46.png",
                    "standings": true
                },
                "71": {
                    "league_id": "71",
                    "name": "Eredivisie",
                    "country": "Netherlands",
                    "season": "2016",
                    "season_start": "2016-08-05",
                    "season_end": "2017-05-14",
                    "logo": "https://www.api-football.com/public/leagues/71.png",
                    "standings": true
                },
                "51": {
                    "league_id": "51",
                    "name": "Euro Championship",
                    "country": "World",
                    "season": "2016",
                    "season_start": "2016-06-10",
                    "season_end": "2016-07-10",
                    "logo": "https://www.api-football.com/public/leagues/51.png",
                    "standings": false
                },
                "32": {
                    "league_id": "32",
                    "name": "Europa League",
                    "country": "World",
                    "season": "2017",
                    "season_start": "2017-09-14",
                    "season_end": "2018-05-16",
                    "logo": "https://www.api-football.com/public/leagues/32.png",
                    "standings": false
                },
                "53": {
                    "league_id": "53",
                    "name": "Europa League",
                    "country": "World",
                    "season": "2016",
                    "season_start": "2016-09-15",
                    "season_end": "2017-05-24",
                    "logo": "https://www.api-football.com/public/leagues/53.png",
                    "standings": false
                },
                "13": {
                    "league_id": "13",
                    "name": "J. League Div.1",
                    "country": "Japan",
                    "season": "2018",
                    "season_start": "2018-02-23",
                    "season_end": "2018-12-01",
                    "logo": "https://www.api-football.com/public/leagues/13.png",
                    "standings": true
                },
                "43": {
                    "league_id": "43",
                    "name": "J. League Div.1",
                    "country": "Japan",
                    "season": "2017",
                    "season_start": "2017-02-25",
                    "season_end": "2017-12-02",
                    "logo": "https://www.api-football.com/public/leagues/43.png",
                    "standings": true
                },
                "68": {
                    "league_id": "68",
                    "name": "J. League Div.1",
                    "country": "Japan",
                    "season": "2016",
                    "season_start": "2016-02-27",
                    "season_end": "2016-11-03",
                    "logo": "https://www.api-football.com/public/leagues/68.png",
                    "standings": true
                },
                "14": {
                    "league_id": "14",
                    "name": "J. League Div.2",
                    "country": "Japan",
                    "season": "2018",
                    "season_start": "2018-02-25",
                    "season_end": "2018-11-17",
                    "logo": "https://www.api-football.com/public/leagues/14.png",
                    "standings": true
                },
                "44": {
                    "league_id": "44",
                    "name": "J. League Div.2",
                    "country": "Japan",
                    "season": "2017",
                    "season_start": "2017-02-26",
                    "season_end": "2017-11-19",
                    "logo": "https://www.api-football.com/public/leagues/44.png",
                    "standings": true
                },
                "69": {
                    "league_id": "69",
                    "name": "J. League Div.2",
                    "country": "Japan",
                    "season": "2016",
                    "season_start": "2016-02-28",
                    "season_end": "2016-11-20",
                    "logo": "https://www.api-football.com/public/leagues/69.png",
                    "standings": true
                },
                "34": {
                    "league_id": "34",
                    "name": "Jupiler Pro League",
                    "country": "Belgium",
                    "season": "2018",
                    "season_start": "2018-07-27",
                    "season_end": "2019-03-16",
                    "logo": "https://www.api-football.com/public/leagues/34.png",
                    "standings": true
                },
                "39": {
                    "league_id": "39",
                    "name": "Jupiler Pro League",
                    "country": "Belgium",
                    "season": "2017",
                    "season_start": "2017-07-28",
                    "season_end": "2018-03-11",
                    "logo": "https://www.api-football.com/public/leagues/39.png",
                    "standings": true
                },
                "60": {
                    "league_id": "60",
                    "name": "Jupiler Pro League",
                    "country": "Belgium",
                    "season": "2016",
                    "season_start": "2016-07-29",
                    "season_end": "2017-03-12",
                    "logo": "https://www.api-football.com/public/leagues/60.png",
                    "standings": true
                },
                "12": {
                    "league_id": "12",
                    "name": "Liga de Honra",
                    "country": "Portugal",
                    "season": "2018",
                    "season_start": "2018-08-12",
                    "season_end": "2019-05-19",
                    "logo": "https://www.api-football.com/public/leagues/12.jpeg",
                    "standings": true
                },
                "49": {
                    "league_id": "49",
                    "name": "Liga de Honra",
                    "country": "Portugal",
                    "season": "2017",
                    "season_start": "2017-08-06",
                    "season_end": "2018-05-13",
                    "logo": "https://www.api-football.com/public/leagues/49.jpeg",
                    "standings": true
                },
                "74": {
                    "league_id": "74",
                    "name": "Liga de Honra",
                    "country": "Portugal",
                    "season": "2016",
                    "season_start": "2016-08-06",
                    "season_end": "2017-05-21",
                    "logo": "https://www.api-football.com/public/leagues/74.jpeg",
                    "standings": true
                },
                "4": {
                    "league_id": "4",
                    "name": "Ligue 1",
                    "country": "France",
                    "season": "2018",
                    "season_start": "2018-08-10",
                    "season_end": "2019-05-25",
                    "logo": "https://www.api-football.com/public/leagues/4.svg",
                    "standings": true
                },
                "22": {
                    "league_id": "22",
                    "name": "Ligue 1",
                    "country": "France",
                    "season": "2017",
                    "season_start": "2017-08-04",
                    "season_end": "2018-05-19",
                    "logo": "https://www.api-football.com/public/leagues/22.svg",
                    "standings": true
                },
                "23": {
                    "league_id": "23",
                    "name": "Ligue 1",
                    "country": "France",
                    "season": "2016",
                    "season_start": "2016-08-12",
                    "season_end": "2017-05-20",
                    "logo": "https://www.api-football.com/public/leagues/23.svg",
                    "standings": true
                },
                "5": {
                    "league_id": "5",
                    "name": "Ligue 2",
                    "country": "France",
                    "season": "2018",
                    "season_start": "2018-07-27",
                    "season_end": "2019-09-21",
                    "logo": "https://www.api-football.com/public/leagues/5.png",
                    "standings": true
                },
                "24": {
                    "league_id": "24",
                    "name": "Ligue 2",
                    "country": "France",
                    "season": "2017",
                    "season_start": "2017-07-28",
                    "season_end": "2018-05-11",
                    "logo": "https://www.api-football.com/public/leagues/24.png",
                    "standings": true
                },
                "25": {
                    "league_id": "25",
                    "name": "Ligue 2",
                    "country": "France",
                    "season": "2016",
                    "season_start": "2016-07-29",
                    "season_end": "2017-05-19",
                    "logo": "https://www.api-football.com/public/leagues/25.png",
                    "standings": true
                },
                "17": {
                    "league_id": "17",
                    "name": "Premier",
                    "country": "Wales",
                    "season": "2018",
                    "season_start": "2018-08-10",
                    "season_end": "2019-01-12",
                    "logo": "https://www.api-football.com/public/leagues/17.png",
                    "standings": true
                },
                "79": {
                    "league_id": "79",
                    "name": "Premier",
                    "country": "Iceland",
                    "season": "2018",
                    "season_start": "2018-04-27",
                    "season_end": "2018-09-29",
                    "logo": "https://www.api-football.com/public/leagues/79.gif",
                    "standings": true
                },
                "80": {
                    "league_id": "80",
                    "name": "Premier",
                    "country": "Iceland",
                    "season": "2017",
                    "season_start": "2017-04-30",
                    "season_end": "2017-09-30",
                    "logo": "https://www.api-football.com/public/leagues/80.gif",
                    "standings": true
                },
                "81": {
                    "league_id": "81",
                    "name": "Premier",
                    "country": "Iceland",
                    "season": "2016",
                    "season_start": "2016-05-01",
                    "season_end": "2016-10-01",
                    "logo": "https://www.api-football.com/public/leagues/81.gif",
                    "standings": true
                },
                "2": {
                    "league_id": "2",
                    "name": "Premier League",
                    "country": "England",
                    "season": "2018",
                    "season_start": "2018-08-10",
                    "season_end": "2019-05-12",
                    "logo": "https://www.api-football.com/public/leagues/2.png",
                    "standings": true
                },
                "37": {
                    "league_id": "37",
                    "name": "Premier League",
                    "country": "England",
                    "season": "2017",
                    "season_start": "2017-08-11",
                    "season_end": "2018-05-13",
                    "logo": "https://www.api-football.com/public/leagues/37.png",
                    "standings": true
                },
                "56": {
                    "league_id": "56",
                    "name": "Premier League",
                    "country": "England",
                    "season": "2016",
                    "season_start": "2016-08-13",
                    "season_end": "2017-05-21",
                    "logo": "https://www.api-football.com/public/leagues/56.png",
                    "standings": true
                },
                "91": {
                    "league_id": "91",
                    "name": "Premiership",
                    "country": "Scotland",
                    "season": "2018",
                    "season_start": "2018-08-04",
                    "season_end": "2019-04-06",
                    "logo": "https://www.api-football.com/public/leagues/91.png",
                    "standings": true
                },
                "92": {
                    "league_id": "92",
                    "name": "Premiership",
                    "country": "Scotland",
                    "season": "2017",
                    "season_start": "2017-08-05",
                    "season_end": "2018-05-13",
                    "logo": "https://www.api-football.com/public/leagues/92.png",
                    "standings": true
                },
                "93": {
                    "league_id": "93",
                    "name": "Premiership",
                    "country": "Scotland",
                    "season": "2016",
                    "season_start": "2016-08-06",
                    "season_end": "2017-05-21",
                    "logo": "https://www.api-football.com/public/leagues/93.png",
                    "standings": true
                },
                "11": {
                    "league_id": "11",
                    "name": "Primeira Liga",
                    "country": "Portugal",
                    "season": "2018",
                    "season_start": "2018-08-12",
                    "season_end": "2019-05-19",
                    "logo": "https://www.api-football.com/public/leagues/11.png",
                    "standings": true
                },
                "48": {
                    "league_id": "48",
                    "name": "Primeira Liga",
                    "country": "Portugal",
                    "season": "2017",
                    "season_start": "2017-08-06",
                    "season_end": "2018-05-13",
                    "logo": "https://www.api-football.com/public/leagues/48.png",
                    "standings": true
                },
                "73": {
                    "league_id": "73",
                    "name": "Primeira Liga",
                    "country": "Portugal",
                    "season": "2016",
                    "season_start": "2016-08-12",
                    "season_end": "2017-05-21",
                    "logo": "https://www.api-football.com/public/leagues/73.png",
                    "standings": true
                },
                "27": {
                    "league_id": "27",
                    "name": "Primera B Nacional",
                    "country": "Argentina",
                    "season": "2017",
                    "season_start": "2017-09-16",
                    "season_end": "2018-04-30",
                    "logo": "https://www.api-football.com/public/leagues/27.png",
                    "standings": true
                },
                "59": {
                    "league_id": "59",
                    "name": "Primera B Nacional",
                    "country": "Argentina",
                    "season": "2016",
                    "season_start": "2016-08-27",
                    "season_end": "2017-07-31",
                    "logo": "https://www.api-football.com/public/leagues/59.png",
                    "standings": true
                },
                "26": {
                    "league_id": "26",
                    "name": "Primera Division",
                    "country": "Argentina",
                    "season": "2017",
                    "season_start": "2017-08-26",
                    "season_end": "2018-05-15",
                    "logo": "https://www.api-football.com/public/leagues/26.png",
                    "standings": true
                },
                "30": {
                    "league_id": "30",
                    "name": "Primera Division",
                    "country": "Spain",
                    "season": "2017",
                    "season_start": "2017-08-18",
                    "season_end": "2018-05-20",
                    "logo": "https://www.api-football.com/public/leagues/30.png",
                    "standings": true
                },
                "58": {
                    "league_id": "58",
                    "name": "Primera Division",
                    "country": "Argentina",
                    "season": "2016",
                    "season_start": "2016-08-27",
                    "season_end": "2017-06-28",
                    "logo": "https://www.api-football.com/public/leagues/58.png",
                    "standings": true
                },
                "64": {
                    "league_id": "64",
                    "name": "Primera Division",
                    "country": "Spain",
                    "season": "2016",
                    "season_start": "2016-08-19",
                    "season_end": "2017-05-21",
                    "logo": "https://www.api-football.com/public/leagues/64.png",
                    "standings": true
                },
                "76": {
                    "league_id": "76",
                    "name": "Primera Division",
                    "country": "Costa-Rica",
                    "season": "2018",
                    "season_start": "2018-07-22",
                    "season_end": "2018-11-11",
                    "logo": "https://www.api-football.com/public/leagues/76.png",
                    "standings": true
                },
                "77": {
                    "league_id": "77",
                    "name": "Primera Division",
                    "country": "Costa-Rica",
                    "season": "2017",
                    "season_start": "2017-07-30",
                    "season_end": "2018-04-19",
                    "logo": "https://www.api-football.com/public/leagues/77.png",
                    "standings": true
                },
                "78": {
                    "league_id": "78",
                    "name": "Primera Division",
                    "country": "Costa-Rica",
                    "season": "2016",
                    "season_start": "2016-07-17",
                    "season_end": "2017-04-16",
                    "logo": "https://www.api-football.com/public/leagues/78.png",
                    "standings": true
                },
                "86": {
                    "league_id": "86",
                    "name": "Primera Division",
                    "country": "Argentina",
                    "season": "2018",
                    "season_start": "2018-08-11",
                    "season_end": "2019-04-06",
                    "logo": "https://www.api-football.com/public/leagues/86.png",
                    "standings": true
                },
                "87": {
                    "league_id": "87",
                    "name": "Primera Division",
                    "country": "Spain",
                    "season": "2018",
                    "season_start": "2018-08-19",
                    "season_end": "2019-05-19",
                    "logo": "https://www.api-football.com/public/leagues/87.png",
                    "standings": true
                },
                "33": {
                    "league_id": "33",
                    "name": "Segunda Division",
                    "country": "Spain",
                    "season": "2017",
                    "season_start": "2017-08-18",
                    "season_end": "2018-06-02",
                    "logo": "https://www.api-football.com/public/leagues/33.jpg",
                    "standings": true
                },
                "65": {
                    "league_id": "65",
                    "name": "Segunda Division",
                    "country": "Spain",
                    "season": "2016",
                    "season_start": "2016-08-19",
                    "season_end": "2017-06-11",
                    "logo": "https://www.api-football.com/public/leagues/65.jpg",
                    "standings": true
                },
                "88": {
                    "league_id": "88",
                    "name": "Segunda Division",
                    "country": "Spain",
                    "season": "2018",
                    "season_start": "2018-08-19",
                    "season_end": "2019-06-09",
                    "logo": "https://www.api-football.com/public/leagues/88.jpg",
                    "standings": true
                },
                "6": {
                    "league_id": "6",
                    "name": "Serie A",
                    "country": "Brazil",
                    "season": "2018",
                    "season_start": "2018-04-14",
                    "season_end": "2018-12-02",
                    "logo": "https://www.api-football.com/public/leagues/6.png",
                    "standings": true
                },
                "28": {
                    "league_id": "28",
                    "name": "Serie A",
                    "country": "Italy",
                    "season": "2017",
                    "season_start": "2017-08-19",
                    "season_end": "2018-05-20",
                    "logo": "https://www.api-football.com/public/leagues/28.png",
                    "standings": true
                },
                "41": {
                    "league_id": "41",
                    "name": "Serie A",
                    "country": "Brazil",
                    "season": "2017",
                    "season_start": "2017-05-13",
                    "season_end": "2017-12-03",
                    "logo": "https://www.api-football.com/public/leagues/41.png",
                    "standings": true
                },
                "62": {
                    "league_id": "62",
                    "name": "Serie A",
                    "country": "Brazil",
                    "season": "2016",
                    "season_start": "2016-05-14",
                    "season_end": "2016-12-11",
                    "logo": "https://www.api-football.com/public/leagues/62.png",
                    "standings": true
                },
                "66": {
                    "league_id": "66",
                    "name": "Serie A",
                    "country": "Italy",
                    "season": "2016",
                    "season_start": "2016-08-20",
                    "season_end": "2017-05-28",
                    "logo": "https://www.api-football.com/public/leagues/66.png",
                    "standings": true
                },
                "94": {
                    "league_id": "94",
                    "name": "Serie A",
                    "country": "Italy",
                    "season": "2018",
                    "season_start": "2018-08-19",
                    "season_end": "2019-05-26",
                    "logo": "https://www.api-football.com/public/leagues/66.png",
                    "standings": true
                },
                "7": {
                    "league_id": "7",
                    "name": "Serie B",
                    "country": "Brazil",
                    "season": "2018",
                    "season_start": "2018-04-14",
                    "season_end": "2018-11-24",
                    "logo": "https://www.api-football.com/public/leagues/7.PNG",
                    "standings": true
                },
                "29": {
                    "league_id": "29",
                    "name": "Serie B",
                    "country": "Italy",
                    "season": "2017",
                    "season_start": "2017-08-25",
                    "season_end": "2018-05-18",
                    "logo": "https://www.api-football.com/public/leagues/29.jpg",
                    "standings": true
                },
                "42": {
                    "league_id": "42",
                    "name": "Serie B",
                    "country": "Brazil",
                    "season": "2017",
                    "season_start": "2017-05-13",
                    "season_end": "2017-11-25",
                    "logo": "https://www.api-football.com/public/leagues/42.PNG",
                    "standings": true
                },
                "63": {
                    "league_id": "63",
                    "name": "Serie B",
                    "country": "Brazil",
                    "season": "2016",
                    "season_start": "2016-05-14",
                    "season_end": "2016-11-26",
                    "logo": "https://www.api-football.com/public/leagues/63.PNG",
                    "standings": true
                },
                "67": {
                    "league_id": "67",
                    "name": "Serie B",
                    "country": "Italy",
                    "season": "2016",
                    "season_start": "2016-08-26",
                    "season_end": "2017-05-18",
                    "logo": "https://www.api-football.com/public/leagues/67.jpg",
                    "standings": true
                },
                "82": {
                    "league_id": "82",
                    "name": "Super League",
                    "country": "China",
                    "season": "2018",
                    "season_start": "2018-03-02",
                    "season_end": "2018-11-11",
                    "logo": "https://www.api-football.com/public/leagues/82.jpg",
                    "standings": true
                },
                "83": {
                    "league_id": "83",
                    "name": "Super League",
                    "country": "China",
                    "season": "2017",
                    "season_start": "2017-03-03",
                    "season_end": "2017-11-04",
                    "logo": "https://www.api-football.com/public/leagues/83.jpg",
                    "standings": true
                },
                "84": {
                    "league_id": "84",
                    "name": "Super League",
                    "country": "China",
                    "season": "2016",
                    "season_start": "2016-03-04",
                    "season_end": "2016-10-30",
                    "logo": "https://www.api-football.com/public/leagues/84.jpg",
                    "standings": true
                },
                "20": {
                    "league_id": "20",
                    "name": "Superligaen",
                    "country": "Denmark",
                    "season": "2018",
                    "season_start": "2018-07-13",
                    "season_end": "2019-03-17",
                    "logo": "https://www.api-football.com/public/leagues/20.png",
                    "standings": true
                },
                "19": {
                    "league_id": "19",
                    "name": "Vyscha Liga",
                    "country": "Belarus",
                    "season": "2018",
                    "season_start": "2018-03-30",
                    "season_end": "2018-12-02",
                    "logo": "https://www.api-football.com/public/leagues/19.png",
                    "standings": true
                },
                "40": {
                    "league_id": "40",
                    "name": "Vyscha Liga",
                    "country": "Belarus",
                    "season": "2017",
                    "season_start": "2017-04-01",
                    "season_end": "2017-11-26",
                    "logo": "https://www.api-football.com/public/leagues/40.png",
                    "standings": true
                },
                "61": {
                    "league_id": "61",
                    "name": "Vyscha Liga",
                    "country": "Belarus",
                    "season": "2016",
                    "season_start": "2016-04-01",
                    "season_end": "2016-11-27",
                    "logo": "https://www.api-football.com/public/leagues/61.png",
                    "standings": true
                }
            }
        }
};

const MockApi = {
    getTeam: (index) => {
        return teams[index];
    },
    getFavoritesLeagues() {
        const ids = ["2", "35", "55", "30"];
        return ids.map(id => leagues.api.leagues[id]);
    },
    getLeague: (id) => {
        return leagues.api.leagues[String(id)];
    }
};

export default MockApi;
