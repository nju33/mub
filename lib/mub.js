import Table from './components/Table.html';
// import {} from './helpers';
import store from './store';
import style from './style.css';

const defaultOpts = {
};

export default class Mub {
  constructor(id) {
    this.target = document.getElementById(id);
    this.element = new Table({target: this.target});
  }

  setData(data) {
    this.element.set({data});
  }
}

// new Table({
//   target: document.getElementById('root')
// });
