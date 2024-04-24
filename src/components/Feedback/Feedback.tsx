import { useState } from "react";

import "./styles.css";
import Button from "../Button/Button";

function Feedback() {
  const [like, setLike] = useState<number>(0);
  const [dislike, setDislike] = useState<number>(0);

  const addLike = (): void => {
    setLike((prevValue) => prevValue + 1);
  };

  const addDislike = (): void => {
    setDislike((prevValue) => prevValue + 1);
  };

  const resetResults = (): void => {
    setLike(0);
    setDislike(0);
  };

  return (
    <div className="feedback-container">
      <div className="feedback-result-container">
        <div className="like-dislike-container">
          <Button name="Like" onButtonClick={addLike} />
          <div className="result">{like}</div>
        </div>
        <div className="like-dislike-container">
          <Button name="Dislike" onButtonClick={addDislike} />
          <div className="result">{dislike}</div>
        </div>
      </div>
      <Button name="Reset Results" onButtonClick={resetResults} />
    </div>
  );
}

export default Feedback;
