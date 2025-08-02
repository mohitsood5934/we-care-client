import React, { useState } from "react";
import PropTypes from "prop-types";
import { Typewriter } from "react-simple-typewriter";
import "../css/WeCareAssistant.css";

const WeCareAssistant = (props) => {
  const { name = "" } = props;
  const [input, setInput] = useState("");

  const onInputChangeHandler = (e) => {
    setInput(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      // call api to submit the query
    }
  };

  return (
    <div className="wecare-root">
      <div>
        <p className="intro-text">
          Hi {name}, I'm your WeCare assistant. How can I help you today?
        </p>

        <div className="assistant-message">
          <div
            className="avatar"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBrshSbxLqQhbFZkcXkh0jRrfUwXWvfxWwn89Jj0EYeLQ3-kQty83y4B4Ano-Fkic3Q8h0IHlZxt_1zR6_gg7oCekwMNBtH5DR0lfN6YNPrNtu6gRVwTkiz4CHHQd77Vg_y7NYeylaaFTr2sE7USIL9eoQJq_8ek2J6LIY_1dWwewmzJ5POVu8PDPnKmRxMS3YCr3uAuSTAOriXP-EEWzy6DSJl7LBZqATfOTC3wutLZJNQw4HuhxJ--tNNey2sj5Z3sB3crJKrZou4")',
            }}
          ></div>
          <div className="message-content">
            <p className="assistant-name">WeCare Assistant</p>
            <p className="assistant-text">
              <Typewriter
                words={[
                  "I can help you with a variety of HR-related questions, such as benefits, payroll, time off, and more. Just type your question below, and I'll do my best to assist you.",
                ]}
                loop={1}
                cursor
                cursorStyle="|"
                typeSpeed={50}
                deleteSpeed={0}
                delaySpeed={1000}
              />
            </p>
          </div>
        </div>
      </div>

      <div className="chat-input__wrpr">
        <div className="input-section">
          <div className="input-wrapper">
            <input
              className="input-field"
              type="text"
              placeholder="Ask me anything..."
              value={input}
              onChange={(e) => onInputChangeHandler(e)}
              onKeyDown={(e) => handleKeyDown(e)}
            />
            <div className="input-icon-wrapper">
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,16V158.75l-26.07-26.06a16,16,0,0,0-22.63,0l-20,20-44-44a16,16,0,0,0-22.62,0L40,149.37V56ZM40,172l52-52,80,80H40Zm176,28H194.63l-36-36,20-20L216,181.38V200ZM144,100a12,12,0,1,1,12,12A12,12,0,0,1,144,100Z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

WeCareAssistant.propTypes = {
  name: PropTypes.string,
};

export default WeCareAssistant;
