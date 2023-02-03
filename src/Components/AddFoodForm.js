import { Divider, Input, Col } from 'antd';
import { Component } from 'react';
import Button from './Button';

class AddFoodForm extends Component{
    constructor(props){
        super(props)
        this.state = {
            enableSearch: false,
            name: '',
            image: '',
            calories: '',
            servings: ''
        }
    }

    toggleSearch = () => {
      this.setState({
        enableSearch: !this.state.enableSearch,
      });
    };
    
    handleInputChange = (e) =>{
        const {value: inputValue, name: inputName} = e.target
        console.log(`Baga ${inputValue} in ${inputName}.`)
        this.setState({
            [inputName]: inputValue
        })
    }

    handleFormSubmit = e => {
        e.preventDefault()
        this.props.addFood(this.state)
        this.toggleSearch()
        this.resetForm()
    }

    resetForm(){
        this.setState({
            name: '',
            image: '',
            calories: '',
            servings: ''
        })
    }

  render(){
    return(
    <>
        {!this.state.enableSearch && (
          <Button toggleSearch={() => this.toggleSearch()} />
        )}
        {this.state.enableSearch && (
            <form onSubmit={(e) => this.handleFormSubmit(e)}>
                <Divider>Add Food Entry</Divider>

                <Col span = {6}>
                    <label>Name</label>
                    <Input value={this.state.name} type="text" name = "name" onChange={(e) => this.handleInputChange(e)} span={6}/>



                    <label>Image</label>
                    <Input value={this.state.image} type="text" name = "image" onChange={(e) => this.handleInputChange(e)} />

                    <label>Calories</label>
                    <Input value={this.state.calories} type="text" name = "calories" onChange={(e) => this.handleInputChange(e)} />

                    <label>Servings</label>
                    <Input value={this.state.servings} type="text" name = "servings" onChange={(e) => this.handleInputChange(e)} />

                    <button type="submit">Create</button>
                </Col>
            </form>
        )}
    </>

  );
} 
}

export default AddFoodForm;