import express from "express";

const app = express();

const PORT = process.env.PORT || 3000;

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

//get a list of 10 jokes
app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "joke 1",
      content: "joke 1 content",
    },
    {
      id: 2,
      title: "joke 2",
      content: "joke 2 content",
    },
    {
      id: 3,
      title: "joke 3",
      content: "joke 3 content",
    },
    {
      id: 4,
      title: "joke 4",
      content: "joke 4 content",
    },
    {
      id: 5,
      title: "joke 5",
      content: "joke 5 content",
    },
    {
      id: 6,
      title: "joke 6",
      content: "joke 6 content",
    },
    {
      id: 7,
      title: "joke 7",
      content: "joke 7 content",
    },
    {
      id: 8,
      title: "joke 8",
      content: "joke 8 content",
    },
    {
      id: 9,
      title: "joke 9",
      content: "joke 9 content",
    },
    {
      id: 10,
      title: "joke 10",
      content: "joke 10 content",
    },
  ];
  res.send(jokes);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
