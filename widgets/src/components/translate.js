// AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM

import React, {useState} from "react";
import Dropdown from "./dropdown";
import Convert from "./convert";

const options = [
  {label: "Afrikaans", value: "af"},
  {label: "Arabic", value: "ar"},
  {label: "Hindi", value: "hi"},
];

const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState("");
  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter a Text</label>
          <input
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
        </div>
      </div>
      <Dropdown
        options={options}
        selected={language}
        onSelectedChange={setLanguage}
        label="Select a Language"
      />

      <hr />
      <h3 className="ui header">Output</h3>
      <Convert text={text} language={language} />
    </div>
  );
};

export default Translate;
