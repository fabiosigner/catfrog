import React from 'react';
import HelloWorld from './components/Header'


class App extends React.Component {
  render() {
    return (
      <HelloWorld name={"catfrog"} adress='that'/>
    )
  }
}
export default App;
