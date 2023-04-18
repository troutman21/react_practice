import React from 'react';

const App = () => {
  fetch('/foo')
    .then(res => res.json())
    .then(data => console.log('data', data))
    .catch(err => console.error(`err: ${err}`));
  return <h1
    style={{color:'red'}}
  >Hello World</h1>
};

export default App;