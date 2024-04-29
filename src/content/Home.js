import "../App.css";
import { Main, Box } from "grommet";
import ReactMarkdown from "react-markdown";
import markdownContent from "./Home.md";
import { useState, useEffect } from "react";

function Home() {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch(markdownContent)
      .then((res) => res.text())
      .then((md) => {
        setContent(md);
      });
  }, []);

  return (
    <Main>
      <Box background="#4f5b65" fill round gap="10px" pad="10px">
        <ReactMarkdown children={content} />
      </Box>
    </Main>
  );
}

export default Home;
