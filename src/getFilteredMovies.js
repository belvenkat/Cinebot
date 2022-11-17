export default (movies, url, user_age) => {
  console.log("🚀 ~ file: getFilteredMovies.js ~ line 2 ~ movies", movies);
  const filtersApplied = url
    .split("?")[1]
    .split("&")
    .map((each) => {
      const param = each.replace("%22", "").split("=");
      return { [param[0]]: param[1].replace("%22", "") };
    });

  let filteredMovies = [];
  const seletedGenre = filtersApplieds[2]?.genres.toLowerCase();

  if (seletedGenre) {
    filteredMovies = movies.filter((movie) => {
      console.log(
        "🚀 ~ file: getFilteredMovies.js ~ line 20 ~ filteredMovies=movies.filter ~ movie",
        movie.genres
      );
      if (movie.genres.toLowerCase().indexOf(seletedGenre) > -1) {
        return true;
      }
    });
  }
  console.log(
    "🚀 ~ file: getFilteredMovies.js ~ line 24 ~ filteredMovies",
    filteredMovies
  );

  return filteredMovies;
};
