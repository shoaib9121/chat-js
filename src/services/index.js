export const fetchChatHistory = async () => {
  let d = new Date(new Date().getTime() - 59 * 60 * 1000); // previous hour of current datetime
  let chats = [];
  chats.push({
    datetime: new Date(subtractDateTime(d.getTime(), 24 * 2)).toISOString(),
    message: "hello",
    from: "Visitor",
  });
  chats.push({
    datetime: new Date(subtractDateTime(d.getTime(), 24 * 2)).toISOString(),
    message: "Hi, how can I help you?",
    from: "Operator",
  });
  chats.push({
    datetime: new Date(subtractDateTime(d.getTime(), 24)).toISOString(),
    message: "I'm looking for a size 7, but can't find it",
    from: "Visitor",
  });
  chats.push({
    datetime: new Date(subtractDateTime(d.getTime(), 24)).toISOString(),
    message: "Ok, one moment I'll check the stock",
    from: "Operator",
  });
  chats.push({
    datetime: new Date(subtractDateTime(d.getTime(), 24)).toISOString(),
    message:
      "I'm sorry, there is no sie 7 available in that colour. There are some in red and blue however",
    from: "Operator",
  });
  chats.push({
    datetime: new Date(subtractDateTime(d.getTime(), 1)).toISOString(),
    message: "Oh great, thank you",
    from: "Visitor",
  });
  chats.push({
    datetime: new Date(subtractDateTime(d.getTime(), 1)).toISOString(),
    message: "my pleasure :-)",
    from: "Operator",
  });
  return chats;
};

const subtractDateTime = (datetime, factor = 0) => {
  return datetime - factor * 60 * 60 * 1000;
};
