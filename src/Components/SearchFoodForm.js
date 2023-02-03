import { Divider, Input } from 'antd';
import { Component } from 'react';

class SearchFoodForm extends Component{
    constructor(props){
        super(props)
        this.state = {
          searchName: ''
        }
    }
    
    handleSearchChange = (e) =>{
        this.setState({
            searchName: e.target.value
        })
    }

    handleFormSubmit = e => {
        e.preventDefault()
        this.props.searchFood(this.state.searchName)
        this.resetSearchInput()
    }

    resetSearchInput = e =>{
      this.setState({
        searchName: ''
    })
    }

  render(){
    return(
    <form onSubmit={(e) => this.handleFormSubmit(e)}>
      <Divider>Search Food Entry</Divider>

      <label>Search for:</label>
      <Input value={undefined} type="text" onChange={(e) => this.handleSearchChange(e)} />

      <button type="submit">Search</button>
    </form>
  );
} 
}

export default SearchFoodForm;