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
    user_age: "",
  });
  const inputRef = useRef(null);

  const [message, setMessage] = useState(controls.start);
  const [selectedMovie, setSelectedMovie] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const bottomRef = useRef(null);
  const [recommandations, setRecommandations] = useState([]);

  useEffect(() => {
    // 👇️ scroll to bottom every time messages change
    // fetchFromDatabase(
    //   "https://cinebot-81244-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json?orderBy=%22language%22&equalTo=%22english%22&genres=%22crime%22"
    // );
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    inputRef?.current?.focus({
      cursor: "start",
    });
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
        setRecommandations(filteredMovies);
      });
  };

  const handleMovieSelection = (movie) => {
    setSelectedMovie(movie);
    setIsModalOpen(true);
  };

  const getFormattedResponse = (text) => {
    return text
      .replace("user_name", userDetails.user_name)
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
      fetchFromDatabase(botResponse.recommandations);
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
    setRecommandations([]);
    setMessage(controls.recommand_a_movie);
    setChatMessages([{ text: controls.startover.response, isBot: true }]);
  };

  return (
    <div className="App">
      <Modal
        width={600}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleOk}
        size="large"
        footer={[
          <Button key="back" onClick={handleOk}>
            Back
          </Button>,
          <Button
            key="submit"
            type="primary"
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
        {/* <div className="mine messages">
          <div className="message last">Dude</div>
        </div>
        <div className="yours messages">
          <div className="message">Hey!</div>
          <div className="message">You there?</div>
          <div className="message last">Hello, how's it going?</div>
        </div>
        <div className="mine messages">
          <div className="message">Great thanks!</div>
          <div className="message last">How about you?</div>
        </div> */}
        {/* {chatMessages.map(({ isBot, text }) => {
          return isBot ? (
            <List.Item
              key={text}
              style={{
                // background: "coral",
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                width: "300px",
                border: "solid 1px #EEE",
                flexDirection: "column",
                padding: "10px"
              }}
            >
              <Avatar>Bot</Avatar>
              <Text type="secondary" style={{ padding: 10 }}>
                {getFormattedResponse(text)}
              </Text>
            </List.Item>
          ) : (
            <List.Item
              key={text}
              style={{
                // background: "yellow",
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center"
              }}
            >
              <Text type="secondary" style={{ padding: 10 }}>
                {getFormattedResponse(text)}
              </Text>
              <Avatar>{userDetails.user_name[0]}</Avatar>
            </List.Item>
          );
        })} */}

        {/* <div>Bot: {message.response}</div> */}
        {message.options.map((option) => {
          if (option.contronType === "input") {
            return (
              <div
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
                    width: "40%",
                    borderBottomColor: "black",
                    borderBottomWidth: "1px",
                    borderLeft: "none",
                    borderRight: "none",
                    borderTop: "none",
                    outline: "none",
                  }}
                  //bordered={false}
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
              key={option.gotoKey}
              style={{ margin: 10 }}
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
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          background: "#ececec",
          width: 500,
          overflowX: "scroll",
        }}
      >
        {recommandations.map(({ posterURL, name, year }, index) => {
          return (
            <Card
              key={name}
              onClick={() => handleMovieSelection(recommandations[index])}
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
      <div ref={bottomRef} />
    </div>
  );
}
