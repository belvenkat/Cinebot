const icons = {
  aha: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Aha_OTT_Logo.svg/300px-Aha_OTT_Logo.svg.png",
  prime:
    "https://www.citypng.com/public/uploads/preview/-1159629574507zqo9azzc.png",
  zee5: "https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Zee5_Official_logo.svg/1200px-Zee5_Official_logo.svg.png",
  hotstar:
    "https://www.freelogovectors.net/wp-content/uploads/2021/12/disneyplus-hotstar-logo-freelogovectors.net_.png",
  netflix:
    "https://www.citypng.com/public/uploads/preview/-11594687246vzsjesy7bd.png",
  sonyLIV: "https://i1.sndcdn.com/avatars-000283273259-jk9ism-t500x500.jpg",
};

const getOttIcons = (platform) => {
  return icons[platform];
};
