import React from "react";

const Game = ({question, onClickVariant, step, questionsLen}) => {
    const pers = Math.round(step / questionsLen * 100);
    return(
        <>
            <div className="progress">
                <div style={{width: `${pers}%`}} className="progress__inner"></div>
            </div>
            <h1>{question.title}</h1>
            <ul>
                {question.variants.map((text, index) => (
                    <li onClick={() => onClickVariant(index)} key={text}>{text}</li>
                ))}
            </ul>
        </>
    );
}

export default Game