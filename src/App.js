import React, { Component } from 'react';
import Title from './Components/Title';
import Question from './Components/Question';
import Navigation from './Components/Navigation';
import Answer from './Components/Answer';
import './App.css';

class App extends Component {
  state = {
    questions: [
      {
        question: 'Сколько океанов на нашей планете?',
        answer: ['Три', 'Четыре', 'Пять'],
        rightAnswer: 2,
        score: 0,
      },
      {
        question: 'В какой единице измеряется сила тока?',
        answer: ['Вольт', 'Ампер', 'Ватт'],
        rightAnswer: 1,
        score: 0,
      },
      {
        question: 'Сатурн - это какая планета по счету от солнца?',
        answer: ['Третья', 'Восьмая', 'Шестая'],
        rightAnswer: 2,
        score: 0,
      },
      {
        question: 'Какой элемент в таблице Менделеева носит название AG?',
        answer: ['Аргон', 'Серебро', 'Золото'],
        rightAnswer: 1,
        score: 0,
      },
      {
        question: 'Сколько будет 0,2 км в дециметрах?',
        answer: ['20 000 дм', '2 000 дм', '200 дм'],
        rightAnswer: 1,
        score: 0,
      },
      {
        question: 'Самая длинная река на планете?',
        answer: ['Амазонка', 'Нил', 'Енисей'],
        rightAnswer: 0,
        score: 0,
      },
      {
        question: 'Какое число обозначается римскими цифрами LXXVII?',
        answer: ['507', '5007', '77'],
        rightAnswer: 2,
        score: 0,
      },
      {
        question: 'В каком предложении допущена ошибка?',
        answer: [
          'На ней не было чулок',
          'На полке лежала пачка макаронов',
          'Эти крема просрочены',
        ],
        rightAnswer: 1,
        score: 0,
      },
      {
        question: 'Зеленый пигмент, окрашивающий листья растений, называется?',
        answer: ['Хлорофиллипт', 'Хлоропласт', 'Хлорофилл'],
        rightAnswer: 2,
        score: 0,
      },
      {
        question: 'Почему времена года сменяют друг друга?',
        answer: [
          'Из-за удаления и приближения солнца',
          'Из-за наклона земной оси',
          'Из-за вращений Земли вокруг своей оси',
        ],
        rightAnswer: 1,
        score: 0,
      },
      {
        question: 'Сколько хромосом в геноме человека?',
        answer: ['56', '47', '46'],
        rightAnswer: 2,
        score: 0,
      },
    ],
    idx: 0,
  };

  onClickHandler = index => {
    this.setState({ idx: index });
  };
  

  render() {
    return (
      <div className="app">
        <Title />
        <div className="wrapper">
          <Question question={this.state.questions[this.state.idx].question} />
          {this.state.questions[this.state.idx].answer.map(i => {
            return <Answer answer={[i]} />;
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
    );
  }
}

export default App;
