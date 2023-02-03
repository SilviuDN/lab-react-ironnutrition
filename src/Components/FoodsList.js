import { Card, Row, Col, Divider, Input, Button } from "antd";
import { Component } from "react";
import FoodBox from "./FoodBox";
import AddFoodForm from "./AddFoodForm";
import SearchFoodForm from "./SearchFoodForm";

import foods from "./../foods.json";

class FoodsList extends Component{
    constructor(props){
        super(props)
        this.state = {
            foodsList: foods
        }
    }

    deleteFood(name){
        this.setState({
            foodsList: this.state.foodsList.filter( el => el.name !== name)
        })
    }

    addFood(food){
        const tempFoodList = [...this.state.foodsList]
        tempFoodList.push(food)
        this.setState({
            foodsList: tempFoodList
        })
    }

    searchFood(searchName){
        const tempFoodList = [...this.state.foodsList]
        this.setState({
            foodsList: tempFoodList.filter( el => el.name.toLowerCase().includes(searchName.toLowerCase()))
            // foodsList: foods.filter( el => el.name.toLowerCase().includes(searchName.toLowerCase()))
        })
    }

    render(){
        return(
            
            <>
                {/* <AddFoodForm addFood={ this.addFood } /> */}
                <SearchFoodForm searchFood = { (searchName) => this.searchFood(searchName) } />
                <AddFoodForm addFood={ (food) => this.addFood(food)} />
                <Row>
                    { this.state.foodsList.map( (el, i) =>            
                        <Col span={4} key={i}>
                            <FoodBox {...el} deleteFood={ () => this.deleteFood(el.name)}/>
                        </Col>            
                    )}
                </Row>
            </>
        )
    }
}

export default FoodsList