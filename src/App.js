import "./styles.css";
import { useState, useRef, useEffect } from "react";
import "antd/dist/antd.css";
import {
  Button,
  List,
  Card,
  Avatar,
  Typography,
  Image,
  Modal,
  Input,
} from "antd";
const { Text } = Typography;
const { Meta } = Card;
import controls from "./controls";
import MovieCard from "./MovieCard";
import getFilteredMovies from "./getFilteredMovies";

export default function App() {
  const [chatMessages, setChatMessages] = useState([
    { text: controls.start.response, isBot: true },
  ]);
  const [userDetails, setUserDetails] = useState({
    user_name: "",
    user_age: 17,
  });
  const inputRef = useRef(null);

  const [message, setMessage] = useState(controls.start);
  const [selectedMovie, setSelectedMovie] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const bottomRef = useRef(null);
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    // 👇️ scroll to bottom every time messages change
    // fetchFromDatabase(
    //   "https://cinebot-81244-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json?orderBy=%22language%22&equalTo=%22telugu%22&genres=%22comedy%22"
    // );
    inputRef?.current?.focus({
      cursor: "start",
    });

    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatMessages]);

  const fetchFromDatabase = (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        const flattendResponse = Object.keys(res).map((key) => res[key]);
        const filteredMovies = getFilteredMovies(
          flattendResponse,
          url,
          userDetails.user_age
        );
        setRecommendations(filteredMovies);
      });
  };

  const handleMovieSelection = (movie) => {
    setSelectedMovie(movie);
    setIsModalOpen(true);
  };

  const getFormattedResponse = (text) => {
    return text
      .replace(
        "user_name",
        userDetails.user_name ? userDetails.user_name : "Movie Buff"
      )
      .replace("user_age", userDetails.user_age);
  };

  const handleUserTextInput = (e, option) => {
    if (option.gotoKey === "user_age") {
      if (!isNaN(e.target.value) && e.target.value <= 100) {
        setUserDetails((userDetails) => {
          return {
            ...userDetails,
            [option.gotoKey]: e.target.value,
          };
        });
      }
    } else {
      setUserDetails((userDetails) => {
        return {
          ...userDetails,
          [option.gotoKey]: e.target.value,
        };
      });
    }
  };

  const handleSelection = (botResponse, userResponse) => {
    if (!botResponse.options.length) {
      fetchFromDatabase(botResponse.recommendations);
    }

    setMessage(botResponse);
    setChatMessages([
      ...chatMessages,
      { text: userResponse.label, isBot: false },
      { text: botResponse.response, isBot: true },
    ]);
    window.scrollTo({
      bottom: 0,
      behavior: "smooth",
    });
  };

  const handleOk = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleStartOver = () => {
    setIsModalOpen(false);
    setSelectedMovie({});
    setRecommendations([]);
    setMessage(controls.recommend_a_movie);
    setChatMessages([{ text: controls.startover.response, isBot: true }]);
  };

  return (
    <div className="App">
      <Card
        style={{
          // boxShadow: " -2px 3px 7px -3px rgba(0,0,0,0.57)",
          textAlign: "center",
        }}
      >
        <h1>CineBot </h1>
      </Card>
      <Modal
        width={600}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleOk}
        size="large"
        footer={[
          <Button key="back" onClick={handleOk} shape="round" ref={inputRef}>
            Back
          </Button>,
          <Button
            key="submit"
            type="primary"
            shape="round"
            // loading={loading}
            onClick={handleStartOver}
          >
            Start Over
          </Button>,
        ]}
      >
        <MovieCard selectedMovie={selectedMovie} />
      </Modal>
      <div className="chat">
        {chatMessages.map(({ isBot, text }) => {
          return isBot ? (
            <div
              key={text}
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignSelf: "flex-end",
                  zIndex: 10,
                  margin: 5,
                }}
              >
                <Avatar
                  src={
                    <Image
                      src="https://raw.githubusercontent.com/belvenkat/Cinebot/main/cinebot.jpg"
                      style={{ width: 32 }}
                    />
                  }
                />
              </div>
              <div className="yours messages">
                <div className="message last">
                  <div>{getFormattedResponse(text)}</div>
                </div>
              </div>
            </div>
          ) : (
            <div key={text}>
              <div className="mine messages">
                <div className="message last">
                  {" "}
                  {getFormattedResponse(text)}
                </div>
              </div>
            </div>
          );
        })}
        <div
          style={{
            justifyContent: "flex-end",
            alignItems: "flex-end",
            display: "flex",
            flexWrap: "wrap",
            marginLeft: "40%",
          }}
        >
          {message.options.map((option) => {
            if (option.contronType === "input") {
              return (
                <div
                  key={option.gotoKey}
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  <Input
                    key={option.gotoKey}
                    placeholder="type here"
                    className="user-input"
                    ref={inputRef}
                    style={{
                      //padding: 10,
                      textAlign: "center",
                      width: "60%",
                      borderBottomColor: "black",
                      borderBottomWidth: "1px",
                      borderLeft: "none",
                      borderRight: "none",
                      borderTop: "none",
                      outline: "none",
                    }}
                    onPressEnter={(e) => {
                      setUserDetails((userDetails) => {
                        return {
                          ...userDetails,
                          [option.gotoKey]: e.target.value,
                        };
                      });
                      handleSelection(controls[option.gotoKey], option);
                    }}
                    onChange={(e) => handleUserTextInput(e, option)}
                    value={userDetails[option.gotoKey]}
                  />
                </div>
              );
            }

            return (
              <Button
                ref={inputRef}
                key={option.gotoKey}
                shape="round"
                style={{
                  margin: 10,
                  flex: 1,
                }}
                type="primary"
                onClick={() => {
                  handleSelection(controls[option.gotoKey], option);
                }}
              >
                {getFormattedResponse(option.label)}
              </Button>
            );
          })}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          background: "#ececec",
          width: 400,
          overflowX: "scroll",
        }}
      >
        {recommendations.map(({ posterURL, name, year }, index) => {
          return (
            <Card
              key={name}
              onClick={() => handleMovieSelection(recommendations[index])}
              style={{ margin: 5 }}
              cover={
                <img
                  style={{ width: 240, margin: 10, height: 240 }}
                  alt="movie name"
                  src={posterURL}
                />
              }
            >
              <Meta title={name} description={year} />
            </Card>
          );
        })}
      </div>
      <div ref={bottomRef} style={{ height: 150 }} />
    </div>
  );
}
