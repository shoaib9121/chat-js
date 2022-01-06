export const fetchChatHistory = async () => {
  var d = new Date();
  d.setTime(d.getTime() - 200000);
  var chats = [];
  chats.push({
    datetime: new Date(d.setTime(d.getTime() + 2000)).toISOString(),
    message: "hello",
    from: "Visitor",
  });
  chats.push({
    datetime: new Date(d.setTime(d.getTime() + 4000)).toISOString(),
    message: "Hi, how can I help you?",
    from: "Operator",
  });
  chats.push({
    datetime: new Date(d.setTime(d.getTime() + 4000)).toISOString(),
    message: "I'm looking for a size 7, but can't find it",
    from: "Visitor",
  });
  chats.push({
    datetime: new Date(d.setTime(d.getTime() + 4000)).toISOString(),
    message: "Ok, one moment I'll check the stock",
    from: "Operator",
  });
  chats.push({
    datetime: new Date(d.setTime(d.getTime() + 10000)).toISOString(),
    message:
      "I'm sorry, there is no sie 7 available in that colour. There are some in red and blue however",
    from: "Operator",
  });
  chats.push({
    datetime: new Date(d.setTime(d.getTime() + 4000)).toISOString(),
    message: "Oh great, thank you",
    from: "Visitor",
  });
  chats.push({
    datetime: new Date(d.setTime(d.getTime() + 4000)).toISOString(),
    message: "my pleasure :-)",
    from: "Operator",
  });
  return chats;
};
