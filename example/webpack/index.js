import Taba from '../../dist/taba.umd';

const data = {
  data: {
    body: {
      data: [
        ['alkdjf', 'aldkjfaf', 'aldkjfaf', 'aldkjfaf', 'aldkjfaf', 'aldkjfaf', 'aldkjfaf'],
        ['alkdjf', 'aldkjfaf', 'aldkjfaf', 'aldkjfaf', 'aldkjfaf', 'aldkjfaf', 'aldkjfaf'],
        ['alkdjf', 'aldkjfaf', 'aldkjfaf', 'aldkjfaf', 'aldkjfaf', 'aldkjfaf', 'aldkjfaf'],
        ['alkdjf', 'aldkjfaf', 'aldkjfaf', 'aldkjfaf', 'aldkjfaf', 'aldkjfaf', 'aldkjfaf'],
        ['alkdjf', 'aldkjfaf', 'aldkjfaf', 'aldkjfaf', 'aldkjfaf', 'aldkjfaf', 'aldkjfaf'],
      ],
      fixed: 1
    }
  }
};

const a = new Taba({
  target: document.getElementById('a'),
  data
});
