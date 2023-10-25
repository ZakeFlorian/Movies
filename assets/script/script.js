fetch("data/movies.json")
    .then(response => response.json())
    .then(data => {
        console.log(data)
        for (const movie of data.results) {
            document.querySelector('#infos').innerHTML += `
            <div class="col-5 mb-4">
            <div class="card" style="width: 18rem;">
            <img class="imgMovie card-img-top" src="https://image.tmdb.org/t/p/original${movie.poster_path}" alt="affiche film">
  <div class="card-body">
    <h5 class="card-title">${movie.title}</h5>
    <p class="card-text">${movie.release_date}</p>
    <p class="card-text">${movie.vote_average * 10}%</p>
  </div>
  </div>
        `
        }
    })

