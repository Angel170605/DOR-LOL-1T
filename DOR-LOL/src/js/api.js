const apiUrl = 'https://ddragon.leagueoflegends.com/cdn/13.18.1/data/es_ES/champion.json';

export function getData() {
    return fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => data.data) // Extraemos el objeto "data" del resultado
        .catch((error) => console.error(error));
}