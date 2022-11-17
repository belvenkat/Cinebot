export default (movies, url, user_age) => {
  const extractedFilter = url
    .split("?")[1]
    .split("&")
    .map((each) => {
      const param = each.replace("%22", "").split("=");
      return { [param[0]]: param[1].replace("%22", "") };
    });
  console.log(user_age);

  return movies;
};
