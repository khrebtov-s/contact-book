import React from 'react'
import './App.css'
import Loader from './loader/loader'
import Cards from './cards/cards'
import Navbar from './navbar/navbar'
import Lodash from 'lodash'

class App extends React.Component {

  state = {
    isLoading: true,
    data: [],
    sort: 'desc',
    sortField: 'name'
  }

  async componentDidMount(){
   const response = await fetch(`http://demo.sibers.com/users`);
   const data = await response.json();
   
   
   this.setState({
     isLoading: false,
     data
   })
  }

  onSort = sortField => {
    const clonedData = this.state.data.concat();
    const sortType = this.state.sort === 'asc' ? 'desc' : 'asc'

    const orderedData = Lodash.orderBy(clonedData, sortField, sortType);

    this.setState ({
      data: orderedData,
      sort: sortType,
      sortField
    })
  }

  


  render(){
  return (
    <div>
      <Navbar 
      data={this.state.data}
      onSort = {this.onSort}
      />
      <div className="container">
        {
          this.state.isLoading
            ? <Loader />
            :
            <Cards
              data={this.state.data}
            />
        }
      </div>
    </div>
    
  );
}
}

export default App;
