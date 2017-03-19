# Taba

<!-- [![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)

[![Build Status](https://travis-ci.org/nju33/taba.svg?branch=master)](https://travis-ci.org/nju33/taba) -->

🔧 Fixed table that works with pure JavaScript


![screenshot](https://github.com/nju33/taba/raw/master/images/screenshot.gif?raw=true)

## Install, or Download

```sh
yarn add taba
npm i -S taba
```

Or access to [releases page](https://github.com/nju33/taba/releases).
Then, download the latest version.

## Usage

```js
import Taba from 'taba';

const data =

new Taba({
  target: getElementById('target')
  data: {
    style: {
      // defaults
      height: 'auto',
      width: '100%',
      cellPadding: '1em',
      baseColor: '#f3f3f3',
      subColor: '#ccc',
      fixedElementColor: '#fff',
      shadowColor: '#222'
    }
    data: {
      header: {
        data: [...],
        fixed: true
      },
      body: {
        data: [
          [...],
          [...],
          [...]
        ],
        // Even though scrolling horizontally,
        // the first column is displayed all the time
        fixed: 1,
        // Zip this.data
        // Using lodash.zip
        zip: false
      },
      footer: {
        data: [...],
        fixed: false
      }
    }
  }
});
```

### Example

- `test/fixtures/index.js`
- `example/webpack/index.js`

## LICENSE

The MIT License (MIT)

Copyright (c) 2017 nju33 <nju33.ki@gmail.com>
