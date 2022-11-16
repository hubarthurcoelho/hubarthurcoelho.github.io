/* eslint-disable linebreak-style */
import dragonsPit from '../assets/dragonsPitThumb.png';
import snakeGame from '../assets/snakeGameThumb.png';
import grokkingAlgorithms from '../assets/grokking-algorithms-thumbnail.PNG';

export default [
  {
    id: 1,
    link: 'https://hubarthurcoelho.github.io/dragons-pit',
    english: {
      title: "Dragon's Pit",
      description: 'This was my very first Project, quite challenging...',
    },
    portuguese: {
      title: 'Covil do Dragão',
      description: 'Esse foi meu primeiro projeto',
    },
    image: dragonsPit,
    alt: 'dragons pit',
  },
  {
    id: 2,
    link: 'https://hubarthurcoelho.github.io/snake-game',
    english: {
      title: 'Snake Game',
      description: 'An attempt to create a nostalgic experience',
    },
    portuguese: {
      title: 'Joguinho da Cobra',
      description: 'Uma tentativa de criar uma experiência nostálgica',
    },
    image: snakeGame,
    alt: 'snake game',
  },
  {
    id: 3,
    link: 'https://grokking-algorithms-ac.vercel.app/',
    english: {
      title: 'Grokking Algorithms',
      description: 'My favorite algorithms from the book Grokking Algorithms, by Aditya Bhargava',
    },
    portuguese: {
      title: 'Entendendo Algoritmos',
      description: 'Meus algoritmos favoritos do livro Entendendo Algoritmos, de Aditya Bhargava',
    },
    image: grokkingAlgorithms,
    alt: 'Grokking Algorithms',
  },
];
