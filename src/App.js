import React from 'react';
import './App.css';
import Loader from './loader/loader';
import Cards from './cards/cards'

class App extends React.Component {

  state = {
    isLoading: true,
    data: []
  }

  async componentDidMount(){
   const response = await fetch(`http://demo.sibers.com/users`);
   const data = await response.json();
   
   
   this.setState({
     isLoading: false,
     data
   })
  }

  render(){
  return (
    <div className="container">
      {
        this.state.isLoading
          ? <Loader />
          : <Cards 
          data = {this.state.data}
          />
      }
    </div>
  );
}
}

export default App;
