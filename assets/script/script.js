const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MTdjYzc0OTU1MTQ5YmUyM2RmODM4MTNmMjAxYTRlOCIsInN1YiI6IjYyODM5OGJiZWM0NTUyMTAzMmE5NTcxMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.REF4Oi-K06F7Jq8LolG5vPQtyeiGk3nBFdDyL1FLq7E'
  }
};
fetch(`https://api.themoviedb.org/3/movie/now_playing?language=fr-FR&page=1`, options)
  .then(response => response.json())
  .then(data => {
    console.log(data)
    for (const movie of data.results) {
      releaseHTML.innerHTML += `
    <div class="container row">
    <img id="imageList" src="https://image.tmdb.org/t/p/original${movie.poster_path}" alt="affiche film">
    <h5 class="text-center">${movie.title}</h5>
    
    </div>
    `
    }

  })
var searchButton = document.getElementById('searchButton');
searchButton.addEventListener('click', fetchData);

function fetchData() {
  const infosContainer = document.querySelector('#infos');
  infosContainer.innerHTML = ""

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MTdjYzc0OTU1MTQ5YmUyM2RmODM4MTNmMjAxYTRlOCIsInN1YiI6IjYyODM5OGJiZWM0NTUyMTAzMmE5NTcxMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.REF4Oi-K06F7Jq8LolG5vPQtyeiGk3nBFdDyL1FLq7E'
    }
  };
  let movieSearch = document.querySelector('#searchInput').value

  fetch(`https://api.themoviedb.org/3/search/movie?query=${movieSearch}&include_adult=false&language=fr-FR&page=1`, options)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      let index = 0
      for (const movie of data.results) {
        // Convertir la date de sortie au format souhaité
        const releaseDate = new Date(movie.release_date);
        const formattedDate = releaseDate.toLocaleString('fr-FR', {
          day: '2-digit',
          month: 'short',
          year: 'numeric'
        });

        // Créer un lien avec l'ID du film dans l'URL
        const link = document.createElement('a');
        link.href = `profil.html?id=${movie.id}`;
        link.style.textDecoration = 'none';
        // Créer la structure de la carte de film
        const cardHTML = `
        <div class="card mb-3 border-dark shadow-lg" style="width: 18rem;">
          <img class="card-img-top" id="imageList" src="https://image.tmdb.org/t/p/original${movie.poster_path}" alt="affiche film">
          <div class="card-body bg-secondary">
            <h5 class="card-title">${movie.title}</h5>
            <p class="card-text">${formattedDate}</p> 
            <p class="card-text">${movie.vote_average * 10}%</p>
          </div>
        </div>
      `;

        // Assigner la structure HTML au lien
        link.innerHTML = cardHTML;

        // Ajouter le lien au conteneur
        infosContainer.appendChild(link);
        index++
      }
    })
}