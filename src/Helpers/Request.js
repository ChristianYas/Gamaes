export default function Request(typeofrequest, options) {
  let endpoint = "https://free-to-play-games-database.p.rapidapi.com/api/games";
  const API_KEY = "7b9fd2e8a6msh871dc98c0c06c2fp1fbc3djsna56e26c201b8";
  let methods =  {
    method: "GET",
    headers: {
      "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      "x-rapidapi-key": API_KEY,
    }
  }

  if (typeofrequest === "especificgame") {
    endpoint = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${options.id}`;
  }

  if(typeofrequest === 'multipleTags'){

    let {geneross,flags} = options

    let tags = ''

    geneross.map(el =>{
      tags += `${el}.`
    })
    
    endpoint = `https://free-to-play-games-database.p.rapidapi.com/api/filter?tag=${tags}&platform=pc&sort-by=${flags}`
  }

  return fetch(endpoint,methods)
    .then((res) => (res.ok ? res.json() : Promise.reject(res)))
    .then((data) => data)
    .catch((err) => err);
}
