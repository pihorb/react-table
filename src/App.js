import React, { Component } from 'react'
import _ from 'lodash'

import Loader from './Components/Loader'
import Table from './Components/Table'
import DetailRowView from './Components/DetailRowView'
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      data: [],
      sort: 'asc',
      sortField: 'id',
      row: null,
    }
  }

  async componentDidMount() {
    const response = await fetch(
      `http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`
    )
    const data = await response.json()

    this.setState({
      isLoading: false,
      data: _.orderBy(data, this.state.sortField, this.state.sort),
    })
  }

  onSort = (sortField) => {
    let sortType = null
    const clonedData = this.state.data.concat()
    
    if(this.state.sortField !== sortField) {
      sortType = 'asc'
    } else {
      sortType = this.state.sort === 'asc' ? 'desc' : 'asc'
    }
    
    const orderedData = _.orderBy(clonedData, sortField, sortType)
    
    this.setState({
      data: orderedData,
      sort: sortType,
      sortField
    })
  }

  onRowSelect = (row) => {
    this.setState({ row })
  }

  render() {
    return (
      <div className="container">
        {
          this.state.isLoading 
            ? <Loader /> 
            : <Table 
                data={this.state.data} 
                onSort={this.onSort}
                sort={this.state.sort}
                sortField={this.state.sortField}
                onRowSelect={this.onRowSelect}
              />
        }

        {
          this.state.row
            ? <DetailRowView person={this.state.row} />
            : null
        }
      </div>
    )
  }
}

export default App
