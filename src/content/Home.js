import "../App.css";
import { Box } from "grommet";
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
    <div>
      <div className="Box">
        <Box
          animation={"fadeIn"}
          flex="grow"
          round="medium"
          direction="column"
          alignSelf="center"
          justify="center"
          width="50%"
          align="center"
          pad="medium"
          background="dark-2"
          gap="medium"
          fill="vertical"
        >
          <ReactMarkdown class="react-markdown" children={content} />
        </Box>
      </div>
    </div>
  );
}

export default Home;
