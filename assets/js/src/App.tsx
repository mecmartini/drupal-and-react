import * as React from "react";

interface AppProps {
  content: string[];
}

const App: React.FunctionComponent<AppProps> = (props: AppProps) => {
  const { content } = props;

  return (
    <>
      {content.map((element: string, key: number) => {
        const myKey = `item-${key}`;
        return (
          <div key={mykey}>
            <i>{element}</i>
          </div>
        );
      })}
    </>
  );
};

export default App;
