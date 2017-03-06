(function () {
  const mub = new Mub({
    target: document.getElementById('root')
  });
  mub.set({
    data: {
      header: ['aaa', 'bbb', 'ccc'],
      rows: [
        ['bbbb', 'alksdjflksjdflskdjflj sldkfak sdjlfa sjdfl sdf sdf', 'foo'],
        ['cccc', 'asdlfjasldkfjk lasjdfljs ldkjfalsj dfjsldfjlsa jdflajsdj fsldjfksdjflsdjflskdjf ', 'bar'],
        ['alsdkjfl', 'sjdfljsdfjl asjdfkj lsdjfl sjadlf jsdlkfj lsdjfl sjdfj sldjfls jdfjsd jflsdf ', 'baz']
      ]
    }
  });
})();
