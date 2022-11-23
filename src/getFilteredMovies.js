export default (movies, url, user_age) => {
  console.log(
    "🚀 ~ file: getFilteredMovies.js ~ line 2 ~ movies, url, user_age",
    movies,
    url,
    user_age
  );
  let filtersApplied = url
    .split("?")[1]
    .split("&")
    .map((each) => {
      const param = each.replace("%22", "").split("=");
      return { [param[0]]: param[1].replace("%22", "") };
    });
  console.log(
    "🚀 ~ file: getFilteredMovies.js ~ line 15 ~ filtersApplied",
    filtersApplied
  );

  filtersApplied = Object.assign({}, ...filtersApplied);

  const seletedGenre = filtersApplied?.genres?.toLowerCase();
  let filteredMovies = getFilteredMoviesByAge(movies, user_age);

  console.log("Movies after Age Filter", filteredMovies);

  if (seletedGenre) {
    filteredMovies = filteredMovies.filter((movie) => {
      if (movie.genres.toLowerCase().indexOf(seletedGenre) > -1) {
        return true;
      }
    });
  }
  console.log(
    "🚀 ~ file: getFilteredMovies.js ~ line 24 ~ filteredMovies",
    filteredMovies
  );

  return filteredMovies.sort(() => Math.random() - 0.5);
};

const getFilteredMoviesByAge = (movies, age) => {
  const filteredMovies = movies.filter((movie) => {
    if (age > 17) {
      return true;
    } else if (age <= 17 && age >= 8) {
      return (
        movie.certification.toLowerCase() == "u" ||
        movie.certification.toLowerCase() == "ua"
      );
    } else if (age <= 7) {
      return movie.certification.toLowerCase() == "u";
    }
  });

  return filteredMovies;
};
