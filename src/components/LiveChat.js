import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import EmojiPicker from "emoji-picker-react";

import ChatMessage from "./ChatMessage";

import { addMessage } from "../../store/chatSlice";
import { generateRandomNameAndMessage } from "../../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const inputRef = useRef();
  const [showEmojis, setShowEmojis] = useState(false);
  const chatMessages = useSelector((store) => store.chat.chatMessages);

  useEffect(() => {
    const timer = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomNameAndMessage().author,
          message: generateRandomNameAndMessage().quote,
        })
      );
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleEmotionClick = () => setShowEmojis(true);

  const handleEmojiSelect = (emoji) => {
    if (!inputRef.current.value) {
      inputRef.current.value = emoji;
    } else {
      inputRef.current.value = inputRef.current.value + " " + emoji;
    }
  };

  const handleEmojiPickerClose = () => setShowEmojis(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    dispatch(
      addMessage({
        name: "Bharat Singhani",
        message: inputRef.current.value,
      })
    );

    inputRef.current.value = "";
    setShowEmojis(false);
  };

  return (
    <div className="border border-black/10 rounded-xl h-[100vh] max-h-[493px] relative overflow-hidden">
      <h2 className="leading-none px-6 py-4 border-b border-b-black/10 h-12">
        Live Chat
      </h2>
      <div
        className="p-3 h-[calc(100%_-96px)] flex flex-col-reverse overflow-y-auto"
        onClick={handleEmojiPickerClose}
      >
        <div className="flex flex-col gap-3">
          {!!chatMessages.length &&
            chatMessages.map((message, index) => (
              <ChatMessage
                key={index}
                name={message.name}
                message={message.message}
              />
            ))}
        </div>
      </div>
      <form
        className="h-12 border-t border-t-black/10 p-2 flex items-center justify-between gap-2 relative"
        onSubmit={handleFormSubmit}
      >
        <EmojiPicker
          height={"350px"}
          open={showEmojis}
          reactions={[
            "1f680",
            "1f44d",
            "2764-fe0f",
            "1f603",
            "1f622",
            "1f64f",
            "1f44e",
          ]}
          className="!absolute bottom-14"
          reactionsDefaultOpen={true}
          previewConfig={{ showPreview: false }}
          onEmojiClick={(emojiData) => handleEmojiSelect(emojiData.emoji)}
        />
        <button
          type="button"
          className="h-8 w-8 p-1 border border-black/10 rounded-full cursor-pointer"
          onClick={handleEmotionClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM8 13H16C16 15.2091 14.2091 17 12 17C9.79086 17 8 15.2091 8 13ZM8 11C7.17157 11 6.5 10.3284 6.5 9.5C6.5 8.67157 7.17157 8 8 8C8.82843 8 9.5 8.67157 9.5 9.5C9.5 10.3284 8.82843 11 8 11ZM16 11C15.1716 11 14.5 10.3284 14.5 9.5C14.5 8.67157 15.1716 8 16 8C16.8284 8 17.5 8.67157 17.5 9.5C17.5 10.3284 16.8284 11 16 11Z"></path>
          </svg>
        </button>
        <input
          ref={inputRef}
          className="border border-black/10 px-4 rounded-full text-sm flex-[1_0_auto] h-8"
          type="text"
          placeholder="Add a comment..."
        />
        <button
          type="submit"
          className="mr-2 h-8 w-8 p-1 border border-black/10 rounded-full cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M1.94607 9.31543C1.42353 9.14125 1.4194 8.86022 1.95682 8.68108L21.043 2.31901C21.5715 2.14285 21.8746 2.43866 21.7265 2.95694L16.2733 22.0432C16.1223 22.5716 15.8177 22.59 15.5944 22.0876L11.9999 14L17.9999 6.00005L9.99992 12L1.94607 9.31543Z"></path>
          </svg>
        </button>
      </form>
    </div>
  );
};

export default LiveChat;
