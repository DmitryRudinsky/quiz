import React, { useState } from 'react';
import './styles/style.scss'
import Game from './components/Game';
import Result from './components/Result';


const questions = [
  {
    title: 'React - это ... ?',
    variants: ['библиотека', 'фреймворк', 'приложение'],
    correct: 0,
  },
  {
    title: 'Компонент - это ... ',
    variants: ['приложение', 'часть приложения или страницы', 'то, что я не знаю что такое'],
    correct: 1,
  },
  {
    title: 'Что такое JSX?',
    variants: [
      'Это простой HTML',
      'Это функция',
      'Это тот же HTML, но с возможностью выполнять JS-код',
    ],
    correct: 2,
  },
];

function App() {

  const [step, setStep] = useState(0);
  const [correct, setCorrect] = useState(0);
  const question = questions[step]
  const questionsLen = questions.length;
  const onClickVariant = (index) =>{
    setStep(step + 1);

    if(index == question.correct){
      setCorrect(correct + 1);
    }
  }

  return (
    <div className="App">
      {step != questionsLen 
      ? (<Game questionsLen={questionsLen} step={step} onClickVariant={onClickVariant} question={question}/>) 
      : (<Result questionsLen={questionsLen} correct={correct}/>)}
    </div>
  );
}

export default App;