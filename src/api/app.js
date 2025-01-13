import React, { useEffect, useState } from "react";
import { fetchHello } from "./api/api";

const App = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetchHello().then((response) => {
      setMessage(response.data);
    });
  }, []);

  return <div>{message}</div>;
};

export default App;
