export const senderEnums = {
  VISITOR: "Visitor",
  OPERATOR: "Operator",
};

const RESPONSES = [
  "OK, let me check that out for you",
  "Message received. I'll see what I can do.",
  "ok, thank you.",
  "I understand.",
  "Hmm, I'm not sure I understand, can you rephrase that?",
  "Right ok, let me sort that out for you.",
];

const GREETINGS = [
  "Hello there, welcome to the site. How may I help you?",
  "Good day! How are you?",
  "Hello, what can I do for you?",
  "Hi and welcome!",
  "Greetings :-)",
];

const ANSWERS = [
  "Thank you for your question.",
  "OK, let me check that out for you",
  "A very good question! Let me have a look...",
  "Hmm, ok give me a minute and I'll sort that out.",
  "Yes, I think so.",
];

export const operatorChat = () => {
  return RESPONSES[Math.floor(Math.random() * RESPONSES.length)];
};
export const operatorAnswerChat = () => {
  return ANSWERS[Math.floor(Math.random() * RESPONSES.length)];
};
export const operatorGreetingChat = () => {
  return GREETINGS[Math.floor(Math.random() * RESPONSES.length)];
};

export const timeAgo = (dateString) => {
  const date = new Date(dateString);
  const DAY_IN_MS = 86400000; // 24 * 60 * 60 * 1000
  const today = new Date();
  const seconds = Math.round((today - date) / 1000);

  if (seconds < 20) {
    return "just now";
  } else if (seconds < 60) {
    return "about a minute ago";
  }

  const minutes = Math.round(seconds / 60);
  if (minutes < 60) {
    return `${minutes} minutes ago`;
  }

  const isToday = today.toDateString() === date.toDateString();
  if (isToday) {
    return "Today";
  }

  const yesterday = new Date(today - DAY_IN_MS);
  const isYesterday = yesterday.toDateString() === date.toDateString();
  if (isYesterday) {
    return "Yesterday";
  }

  const daysDiff = Math.round((today - date) / (1000 * 60 * 60 * 24));
  if (daysDiff < 30) {
    return `${daysDiff} days ago`;
  }

  const monthsDiff =
    today.getMonth() -
    date.getMonth() +
    12 * (today.getFullYear() - date.getFullYear());
  if (monthsDiff < 12) {
    return `${monthsDiff} months ago`;
  }

  const yearsDiff = today.getYear() - date.getYear();

  return `${yearsDiff} years ago`;
};

export const createMarkup = (message) => {
  return { __html: message };
};

export const messageInstance = (message, sender) => {
  const d = new Date();
  return {
    message,
    datetime: new Date(d.setTime(d.getTime() + 4000)).toISOString(),
    from: sender,
  };
};

/**
 * Replace \n with <br/> tag to maintain carriage return pressed by end user
 * @param message
 * @returns
 */
export const replaceCarriageReturn = (message = "") => {
  return message.indexOf("\n") !== -1
    ? message.replaceAll(/\n/g, "<br/>")
    : message;
};
