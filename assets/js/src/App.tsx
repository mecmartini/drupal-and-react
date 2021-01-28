import * as React from "react";

interface AppProps {
  content: string[];
}

const App: React.FunctionComponent<AppProps> = (props: AppProps) => {
  const { content } = props;

  return (
    <>
      {content.map((element: string, key: number) => {
        const mykey = `element-${key}`;
        return <div key={mykey}>{element}</div>;
      })}
    </>
  );
};

export default App;
