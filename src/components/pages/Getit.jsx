import React from "react";
import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Getit = () => {
  const email = "acemalicay19@gmail.com";

  const [state, setstate] = useState(false);

  return (
    <div className="text-[#2C3333] shadow-lg bg-[#00d9ff] rounded-lg px-[2rem] mt-4">
      <CopyToClipboard text={email} onCopy={() => setstate(true)}>
        <button>
          {email} <br /> Click to copy
          {state && (
            <span className="text-yellow-500">
              {" "}
              <br />
              Copied!
            </span>
          )}
        </button>
      </CopyToClipboard>
    </div>
  );
};

export default Getit;
