import React, { useState } from "react";

import useKonamiCode from "./konami-code";
import Secret from "./Secret";

export default function App() {
  const [show, setShow] = useState(false);
  const sequence = useKonamiCode(() => setShow(true));

  return (
    <div
      style={{
        margin: "60px 0",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div>{JSON.stringify(sequence)}</div>
      <div>
        {show && <Secret hide={() => setShow(false)}/>}
      </div>
    </div>
  );
}
