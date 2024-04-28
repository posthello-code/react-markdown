import "../App.css";
import { Box } from "grommet";

export const IntroText = function () {
  return;
};

function Home() {
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
          <h1>Inheritance and the prototype chain In programming.</h1>
          <body>
            Inheritance refers to passing down characteristics from a parent to
            a child so that a new piece of code can reuse and build upon the
            features of an existing one. JavaScript implements inheritance by
            using
            <a
              href={
                "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#objects"
              }
            >
              {" "}
              objects
            </a>
            . Each object has an internal link to another object called its
            prototype. That prototype object has a prototype of its own, and so
            on until an object is reached with null as its prototype. By
            definition, null has no prototype and acts as the final link in this
            prototype chain. It is possible to mutate any member of the
            prototype chain or even swap out the prototype at runtime, so
            concepts like static dispatching do not exist in JavaScript.
            JavaScript is a bit confusing for developers experienced in
            class-based languages (like Java or C++), as it is dynamic and does
            not have static types. While this confusion is often considered to
            be one of JavaScript's weaknesses, the prototypal inheritance model
            itself is, in fact, more powerful than the classic model. It is, for
            example, fairly trivial to build a classic model on top of a
            prototypal model — which is how classes are implemented. Although
            classes are now widely adopted and have become a new paradigm in
            JavaScript, classes do not bring a new inheritance pattern. While
            classes abstract most of the prototypal mechanism away,
            understanding how prototypes work under the hood is still useful.
          </body>
        </Box>
      </div>
    </div>
  );
}

export default Home;
