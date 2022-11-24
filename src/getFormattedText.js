const getFormattedText = (text, user_name, user_age) => {
  return text
    .replace("user_name", user_name ? user_name : "Movie Buff")
    .replace("user_age", user_age);
};

export default getFormattedText;
