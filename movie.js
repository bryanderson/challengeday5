const movies = [
    {
        title: "Avatar",
        releaseDate: "January 1, 2023",
        poster: "ava.jpg",
        popularity: 94,
    },
    {
        title: "Avengers: Endgame",
        releaseDate: "December 1, 2019",
        poster: "aveg.jpg",
        popularity: 90,
    },
    {
        title: "Spider-Man: No Way Home",
        releaseDate: "October 1, 2021",
        poster: "nwh.jpg",
        popularity: 92,
    },
    {
        title: "Frozen II",
        releaseDate: "September 1, 2019",
        poster: "frz.jpg",
        popularity: 80,
    },
    {
        title: "Black Phanter",
        releaseDate: "May 1, 2018",
        poster: "bp.jpg",
        popularity: 82,
    },
    {
        title: "Minions",
        releaseDate: "February 1, 2015",
        poster: "mns.jpg",
        popularity: 84,
    },
    {
        title: "Zootopia",
        releaseDate: "March 1, 2016",
        poster: "ztp.jpg",
        popularity: 78,
    },
    {
        title: "Stand by me Doraemon",
        releaseDate: "November 1, 2014",
        poster: "sbm.jpg",
        popularity: 85,
    },
    {
        title: "Spider-Man: Far from Home",
        releaseDate: "June 1, 2018",
        poster: "ffh.jpg",
        popularity: 88,
    },
    {
        title: "Eternals",
        releaseDate: "July 1, 2021",
        poster: "etn.jpg",
        popularity: 83,
    },
]

// Get Element from the DOM
const movieList = document.getElementById("container");
const sortSelect = document.getElementById("sort-select");

// Init movies
displayMovieList(movies);

// nambahkan addEventListener buat ke elemen sort select ini
sortSelect.addEventListener("change", (e) => {
    const sortValue = e.target.value;

    if (sortValue === "popularity") {
        movies.sort((a, b) => b.popularity - a.popularity);
    }
    console.log(...movies)
    displayMovieList(movies);
});

function displayMovieList(movies) {
    movieList.innerHTML = "";

    movieList.forEach((movie) => {
        const movieImage = document.createElement("img");
        movieImage.src = movie.poster;
        
        const movieTitle = document.createElement("h3");
        movieTitle.textContent = movie.title;

        const movieReleaseDate = document.createElement("p");
        movieReleaseDate.textContent = movie.releaseDate;

        const moviePopularity = document.createAttribute("p");
        moviePopularity.textContent = "Popularity: " + movie.popularity;

        movie.appendChild(movieImage);
        movie.appendChild(movieTitle);
        movie.appendChild(movieReleaseDate);
        movie.appendChild(moviePopularity);

        movieList.appendChild(movie);
    })
}


// function sortMovies() {
//     const sortBy = sortSelect.value;
//     // if (sortBy === "popularity-descending") {
//     //     movieList.sort((a, b) => b.dataset.popularity - a.dataset.popularity);
//     // } else if (sortBy === "popularity-ascending") {
//     //     movieList.sort((a, b) => a.dataset.popularity - b.dataset.popularity);
//     // }
//     movieList.forEach((movie) => { movie.parentElement.appendChild(movie); });
// }