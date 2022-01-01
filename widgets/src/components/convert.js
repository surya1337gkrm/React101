import React, {useState, useEffect} from "react";
import axios from "axios";
const Convert = ({language, text}) => {
  const [translate, setTranslate] = useState("");
  const [debouncedTerm, setDebouncedTerm] = useState(text);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedTerm(text);
    }, 500);

    return () => {
      clearTimeout(timerId);
    };
  }, [text]);

  useEffect(() => {
    const doTranslation = async () => {
      const {data} = await axios.post(
        "https://translation.googleapis.com/language/translate/v2",
        {},
        {
          params: {
            q: debouncedTerm,
            target: language.value,
            key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM",
          },
        }
      );

      setTranslate(data.data.translations[0].translatedText);
    };
    if (debouncedTerm) {
      doTranslation();
    }
  }, [language, debouncedTerm]);

  return (
    <div>
      <h1 className="ui header">{translate}</h1>
    </div>
  );
};

export default Convert;
