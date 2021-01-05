import React, {Component} from 'react';
import './App.css';
import Header from './Header/Header';
import List from './List/List';
import SubmitForm from './SubmitForm/SubmitForm';

class App extends Component {
  render(){
    return (
      <div className="App">
        <Header/>
        <List/>
        <SubmitForm/>
      </div>
    )
  } 
}

export default App;
