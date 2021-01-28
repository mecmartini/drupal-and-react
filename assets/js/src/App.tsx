import * as React from "react";

interface AppProps {
  content: string[];
}

const App:React.FunctionComponent<AppProps> = (props) => {
  const { content } = props;

  return (
      <>
          {content.map( ( element: string, key: number) => (
            <div key={key}>
              {element}
            </div>
          ))}
      </>
  );
}

export default App;
