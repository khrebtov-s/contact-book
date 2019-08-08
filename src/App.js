import React from 'react'
import './App.css'
import Loader from './loader/loader'
import Cards from './cards/cards'
import Navbar from './navbar/navbar'
import EditCardView from './EditCardView/EditCardView'
import Lodash from 'lodash'

class App extends React.Component {

  state = {
    isLoading: true,
    data: [],
    sort: 'asc',
    sortField: 'name',
    card: null
  }

  async componentDidMount(){
   const response = await fetch(`http://demo.sibers.com/users`);
   const api_data = await response.json();
    if (localStorage.getItem('data') == null) {
      localStorage.setItem('data', JSON.stringify(api_data)); 
      console.log('Contacts JSON successfully created on localStorage');
    }
   const data = JSON.parse(localStorage.getItem('data'));
   
   this.setState({
     isLoading: false,
     data: Lodash.orderBy(data, this.state.sortField, this.state.sort)
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

  onCardSelect = card => {
    this.setState({card});
  }

  render(){
    
  return (
    <div>
      <Navbar 
      data={this.state.data}
      onSort = {this.onSort}
      sort = {this.state.sort}
      sortField = {this.state.sortField}
      />
      {this.state.card
        ? <EditCardView
          person={this.state.card}
        />
        : true}
      <div className="container">
       { this.state.isLoading
            ? <Loader />
            :
            <Cards
              data = {this.state.data}
              onCardSelect={this.onCardSelect}
            />
        }
      </div>
    </div>
  );
}
}

export default App;
