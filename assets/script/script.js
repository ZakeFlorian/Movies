fetch("data/movies.json")
  .then(response => response.json())
  .then(data => {
    console.log(data);
    const infosContainer = document.querySelector('#infos');

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
    }
  });