import { useState, useRef, useEffect } from "react";
import { Button, List, Card, Avatar, Typography, Input, Image } from "antd";
const { Text, Title } = Typography;
import ottIcons from "./ottIcons.json";

const MovieDetails = ({ label, value }) => {
  return (
    <div style={{ display: "flex", flex: 1 }}>
      <Text
        style={{ display: "flex", flex: 0.5, justifyContent: "flex-start" }}
      >
        {label}
      </Text>
      <Text
        style={{
          display: "flex",
          flex: 1,
          justifyContent: "flex-start",
        }}
      >
        : {value}
      </Text>
    </div>
  );
};

const MovieCard = ({ selectedMovie }) => {
  const {
    actor_name,
    category,
    genres,
    imdb_rating,
    music_director,
    ott_paltform,
    actress_name,
    certification,
    director,
    language,
    name,
    year,
    storyline,
    posterURL,
    platforms,
    platform_links,
    ...rest
  } = selectedMovie;

  const parsedPlatforms = platforms.split(",");
  const parsedPlatformLinks = platform_links.split(",");
  const makeOttLinks = parsedPlatforms.map((platform, index) => {
    return {
      platform,
      link: parsedPlatformLinks[index],
    };
  });
  console.log(
    "🚀 ~ file: MovieCard.js ~ line 57 ~ makeOttLinks ~ makeOttLinks",
    makeOttLinks
  );

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div>
          <Text
            style={{
              fontSize: "25px",
              // marginLeft: 30,
              flex: 1,
              justifyContent: "flex-end",
            }}
          >
            {name}
          </Text>
          <Text>({year})</Text>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flex: 1,
          margin: 10,
          //  flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            flex: 0.5,
            backgroundColor: "#eee",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            width={150}
            src={posterURL}
            style={{
              display: "flex",
              flex: 1,
            }}
          />
        </div>
        <div
          style={{
            flex: 1,
            flexDirection: "column",
            alignItems: "flex-start",
            padding: 16,
          }}
        >
          <MovieDetails label={"Actor Name"} value={actor_name} />
          <MovieDetails label={"Actress Name"} value={actress_name} />
          <MovieDetails label={"Movie Director"} value={director} />
          <MovieDetails label={"Music Director"} value={music_director} />
          <MovieDetails label={"Genres"} value={genres} />
          <MovieDetails label={"Category"} value={category} />
          <MovieDetails label={"IMDB"} value={imdb_rating} />
          <MovieDetails label={"Certification"} value={certification}/>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          //background: "yellow",
          flex: 1,
          flexDirection: "column",
          margin: 5,
          // justifyContent: "flex-end",
        }}
      >
        <div
          style={{
            display: "flex",
            //background: "red",
            flex: 0.3,
            flexDirection: "row",
            justifyContent: "flex-end",
            padding: 3,
          }}
        >
          {makeOttLinks.map(({ platform, link }) => (
            <a href={link} target="_blank">
              <Avatar
                key={platform}
                src={ottIcons[platform]}
                size={"large"}
                style={{ margin: 10 }}
              />
            </a>
          ))}
        </div>
        <div style={{ borderLeft: "1px solid black", padding: 10 }}>
          <Text
            style={{
              alignSelf: "flex-start",
              display: "flex",
              fontSize: "20px",
            }}
          >
            Storyline
          </Text>
          <Text>{storyline}</Text>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
