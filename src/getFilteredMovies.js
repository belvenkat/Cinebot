export default (movies, url, user_age) => {
  console.table("Movies from API", movies);
  let filtersApplied = url
    .split("?")[1]
    .split("&")
    .map((each) => {
      const param = each.replace("%22", "").split("=");
      return { [param[0]]: param[1].replace("%22", "") };
    });

  filtersApplied = Object.assign({}, ...filtersApplied);
  console.log(
    "🚀 ~ file: getFilteredMovies.js ~ line 12 ~ filtersApplied",
    filtersApplied
  );

  const seletedGenre = filtersApplied?.genres.toLowerCase();
  console.log(
    "🚀 ~ file: getFilteredMovies.js ~ line 15 ~ seletedGenre",
    seletedGenre
  );

  let filteredMovies = movies.filter((movie) => {
    if (user_age <= ageFilter.u.age) {
      if (movie?.certification?.toLowerCase() === ageFilter.u.certification) {
        return true;
      }
    } else if (user_age <= ageFilter.ua.age) {
      if (movie?.certification?.toLowerCase() === ageFilter.ua.certification) {
        return true;
      }
    }
    return true;
  });

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

  return filteredMovies;
};

const ageFilter = {
  u: {
    certification: "U",
    age: 12,
  },
  ua: {
    certification: "UA",
    age: 17,
  },
};
