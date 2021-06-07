import React, { Component } from 'react';
import Title from './Components/Title';
import Question from './Components/Question';
import Navigation from './Components/Navigation';
import Answer from './Components/Answer';
import './App.css';

const ShowResult = ({ result }) => {
  if (result < 4) {
    return <div className="result">Поздравляю, вы баребух</div>;
  }
  if (result < 7) {
    return <div className="result">Норм типок с района</div>;
  }
  if (result < 9) {
    return <div className="result">Ну такое, ты анимешник штоле?</div>;
  }
  if (result === 11) {
    return <div className="result">Сранный умный!</div>;
  }
};

class App extends Component {
  state = {
    questions: [
      {
        question: 'Сколько океанов на нашей планете?',
        answer: ['Три', 'Четыре', 'Пять'],
        rightAnswer: 2,
        isTrue: false,
        isAnswered: false,
      },
      {
        question: 'В какой единице измеряется сила тока?',
        answer: ['Вольт', 'Ампер', 'Ватт'],
        rightAnswer: 1,
        isTrue: false,
        isAnswered: false,
      },
      {
        question: 'Сатурн - это какая планета по счету от солнца?',
        answer: ['Третья', 'Восьмая', 'Шестая'],
        rightAnswer: 2,
        isTrue: false,
        isAnswered: false,
      },
      {
        question: 'Какой элемент в таблице Менделеева носит название AG?',
        answer: ['Аргон', 'Серебро', 'Золото'],
        rightAnswer: 1,
        isTrue: false,
        isAnswered: false,
      },
      {
        question: 'Сколько будет 0,2 км в дециметрах?',
        answer: ['20 000 дм', '2 000 дм', '200 дм'],
        rightAnswer: 1,
        isTrue: false,
        isAnswered: false,
      },
      {
        question: 'Самая длинная река на планете?',
        answer: ['Амазонка', 'Нил', 'Енисей'],
        rightAnswer: 0,
        isTrue: false,
        isAnswered: false,
      },
      {
        question: 'Какое число обозначается римскими цифрами LXXVII?',
        answer: ['507', '5007', '77'],
        rightAnswer: 2,
        isTrue: false,
        isAnswered: false,
      },
      {
        question: 'В каком предложении допущена ошибка?',
        answer: [
          'На ней не было чулок',
          'На полке лежала пачка макаронов',
          'Эти крема просрочены',
        ],
        rightAnswer: 1,
        isTrue: false,
        isAnswered: false,
      },
      {
        question: 'Зеленый пигмент, окрашивающий листья растений, называется?',
        answer: ['Хлорофиллипт', 'Хлоропласт', 'Хлорофилл'],
        rightAnswer: 2,
        isTrue: false,
        isAnswered: false,
      },
      {
        question: 'Почему времена года сменяют друг друга?',
        answer: [
          'Из-за удаления и приближения солнца',
          'Из-за наклона земной оси',
          'Из-за вращений Земли вокруг своей оси',
        ],
        rightAnswer: 1,
        isTrue: false,
        isAnswered: false,
      },
      {
        question: 'Сколько хромосом в геноме человека?',
        answer: ['56', '47', '46'],
        rightAnswer: 2,
        isTrue: false,
        isAnswered: false,
      },
    ],
    idx: 0,
    result: 0,
  };

  answerHandler = index => {
    const rightAnswer = this.state.questions[this.state.idx].rightAnswer;
    const question = this.state.questions[this.state.idx];
    const questions = [...this.state.questions];
    let idx = this.state.idx;
    let result = this.state.result;

    if (index === rightAnswer) {
      question.isAnswered = true;
      question.isTrue = true;
      result++;
      questions[index] = question;
      this.setState({ questions, result });
      console.log(this.state);
      console.log(this.state.questions.length);
    } else {
      question.isAnswered = true;
      questions[index] = question;
      this.setState({ questions });
      console.log(this.state);
    }

    if (idx < questions.length) {
      idx++;
      this.setState({ idx });
    }
  };

  onClickHandler = index => {
    this.setState({ idx: index });
  };

  render() {
    return (
      <div className="app">
        {this.state.idx === this.state.questions.length ? (
          <ShowResult result={this.state.result} />
        ) : null}
        {this.state.idx < this.state.questions.length ? (
          <div>
            <Title />
            <div className="wrapper">
              <Question
                question={this.state.questions[this.state.idx].question}
              />
              {this.state.questions[this.state.idx].answer.map((i, index) => {
                return (
                  <Answer
                    key={index}
                    answer={[i]}
                    answerHandler={this.answerHandler.bind(this, index)}
                  />
                );
              })}
            </div>
            <div className="pages">
              {this.state.questions.map((i, index) => {
                return (
                  <Navigation
                    key={index}
                    onClick={this.onClickHandler.bind(this, index)}
                    page={index + 1}
                  />
                );
              })}
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default App;
