const dropdownConfig = {
    //pass function to render option in dropdown
    renderOption(movie) {
        //check image source
        const imgSrc = movie.Poster === "N/A" ? " " : movie.Poster;
        return `<img src="${imgSrc}" /> ${movie.Title} (${movie.Year})`;
    },

    //pass title function
    inputValue(movie) {
        return movie.Title;
    },

    //pass fetch data function
    async fetchData(searchTerm) {
        const response = await axios.get("https://www.omdbapi.com/", {
            params: {
                apikey: "32ccc0ba",
                s: searchTerm
            }
        });

        if (response.data.Error) {
            return [];
        }
        return response.data.Search;
    }
};

//Create multiple instance of  widget (dropdown.js) in page divs with diffrnt configs
createDropdown({
    ...dropdownConfig,
    root: document.querySelector(".left-autocomplete"),
    onOptionSelect(movie) {
        document.querySelector(".tutorial").classList.add("is-hidden");
        onMovieSelect(movie, document.querySelector("#left-summary"), "left");
    }
});
createDropdown({
    ...dropdownConfig,
    root: document.querySelector(".right-autocomplete"),
    onOptionSelect(movie) {
        document.querySelector(".tutorial").classList.add("is-hidden");
        onMovieSelect(movie, document.querySelector("#right-summary"), "right");
    }
});

//get movie details
let leftMovie;
let rightMovie;
const onMovieSelect = async (movie, summaryElement, side) => {
    const response = await axios.get("https://www.omdbapi.com/", {
        params: {
            apikey: "32ccc0ba",
            i: movie.imdbID
        }
    });

    //build html
    summaryElement.innerHTML = movieTemplate(response.data);

    if (side == "left") {
        leftMovie = response.data;
    } else {
        rightMovie = response.data;
    }

    if (leftMovie && rightMovie) {
        runComparison();
    }
};

const runComparison = () => {
    const leftSideStats = document.querySelectorAll(
        "#left-summary .notification"
    );
    const rightSideStats = document.querySelectorAll(
        "#right-summary .notification"
    );

    leftSideStats.forEach((leftStat, index) => {
        const rightStat = rightSideStats[index];

        const leftSideValue = parseInt(leftStat.dataset.value);
        const rightSideValue = parseInt(rightStat.dataset.value);

        if (rightSideValue > leftSideValue) {
            leftStat.classList.remove("is-primary");
            leftStat.classList.add("is-warning");
        } else {
            rightStat.classList.remove("is-primary");
            rightStat.classList.add("is-warning");
        }
    });
};

//build movie detail html
const movieTemplate = (movieDetail) => {
    const dollars = parseInt(
        movieDetail.BoxOffice.replace(/\$/g, "").replace(/,/g, "")
    );
    const metascore = parseInt(movieDetail.Metascore);
    const imdbrating = parseFloat(movieDetail.imdbRating);
    const imdbvotes = parseInt(movieDetail.imdbVotes.replace(/,/g, ""));

    const awards = movieDetail.Awards.split(" ").reduce((prev, word) => {
        const value = parseInt(word);
        if (isNaN(value)) {
            return prev;
        } else {
            return prev + value;
        }
    }, 0);

    return `
  <article class="media">
    <figure class="media-left">
      <p class="img">
        <img src="${movieDetail.Poster}"/>
      </p>
    </figure>
    <div class="media-content">
      <div class="content">
        <h1>${movieDetail.Title}</h1>
        <h4>${movieDetail.Genre}</h4>
        <p>${movieDetail.Plot}</p>
      </div>
    </div>
  </article>
  <div>
  <article data-value="${awards}" class="notification is-primary">
    <p class="title">${movieDetail.Awards}</p>
    <p class="subtitle">Awards</p>
  </article>
    <article data-value="${dollars} "class="notification is-primary">
    <p class="title">${movieDetail.BoxOffice}</p>
    <p class="subtitle">Box Office</p>
  </article>
    <article data-value="${metascore}" class="notification is-primary">
    <p class="title">${movieDetail.Metascore}</p>
    <p class="subtitle">Metascore</p>
  </article>
    <article data-value="${imdbrating}" class="notification is-primary">
    <p class="title">${movieDetail.imdbRating}</p>
    <p class="subtitle">IMDB Rating</p>
  </article>
    <article data-value="${imdbvotes}" class="notification is-primary">
    <p class="title">${movieDetail.imdbVotes}</p>
    <p class="subtitle">IMDB Votes</p>
  </article>
  </div>
  `;
};
