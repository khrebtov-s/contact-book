import React from 'react'
import ReactPaginate from 'react-paginate'
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
    card: null,
    search: ''
    
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
    const sort = this.state.sort === 'asc' ? 'desc' : 'asc'
    const data = Lodash.orderBy(clonedData, sortField, sort);
    this.setState ({data, sort, sortField}) 
  }

  searchHandler = search => {
    this.setState({search});
  }

  onCardSelect = card => {
    this.setState({card});
  }
  getFilteredData() {
    const { data, search } = this.state

    if (!search) {
      return data
    }
    return data.filter(item => {
      return item['name'].toLowerCase().includes(search.toLowerCase())
    })
  }

  render(){
    const filteredData = this.getFilteredData()
  return (
    <div>
      <Navbar 
      data={this.state.data}
      onSort = {this.onSort}
      sort = {this.state.sort}
      sortField = {this.state.sortField}
      onSearch = {this.searchHandler}
      />
      {this.state.card
        ? <EditCardView
          person={this.state.card}
        />
        : true}
      <div className="container">
       { this.state.isLoading
            ? <Loader />
          : <React.Fragment>
            <cardSearch />
            <Cards
              data={this.state.data}
                onCardSelect={this.onCardSelect}
              />
            </React.Fragment>
        }
        {/* { this.state.data.length > pageSize
            ? <ReactPaginate
              previousLabel={'<'}
              nextLabel={'>'}
              breakClassName={'break-me'}
              pageCount={8}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              onPageChange={this.pageChangeHandler}
              containerClassName={'pagination'}
              activeClassName={'active'}
              pageClassName = "page-item"
              pageLinkClassName ="page-link"
              previousClassName = "page-item"
              nextClassName ="page-item"
              previousLinkClassName = "page-link"
              nextLinkClassName="page-link"
            />
            : null
        } */}
      </div>
    </div>
  );
}
}

export default App;
