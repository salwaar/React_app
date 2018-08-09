import React, { Component } from 'react';
import { 
Container,ListGroup,ListGroupItem ,Button } from 'reactstrap';
import {CSSTransition , TransitionGroup} from 'react-transition-group'
 //import uuid from 'uuid';//uudi for ganerating randome ids 
import { connect } from 'react-redux'//allows us to get state from redux into react component 
import { getItems , deleteItem } from '../actions/itemActions' //the function //run it here $* it will dispatch to the reducerfile and return the atates egg.. and bring it to the component 
import PropTypes from 'prop-types'////**the action u bring from redux its will be stored as prop */


////$* life cycle method called run at certine points when the component mount"api req or an action""
class ShoppingList extends Component {
componentDidMount(){
    this.props.getItems();
} 

onDeleteClick= (id) => {
    this.props.deleteItem(id)

}  
//{items} used the {} used to destructring to pull it out of what we put in it
render()
{ 
    const { items } = this.props.item

    return(
        <Container>
        <ListGroup>
        <TransitionGroup className="shopping-list">
        { items.map(({_id ,name }) => 
        (
            <CSSTransition key={_id} timeout={500} classNames ="fade">
            <ListGroupItem>
            <Button className ="remove-btn" color="danger" size="sm"
            onClick={this.onDeleteClick.bind(this, _id)}> &times;
            </Button>
            {name}
            </ListGroupItem>
            </CSSTransition>
         ))}
        </TransitionGroup>

        </ListGroup>
        
        </Container>
    )
}
}
ShoppingList.propTypes={
getItems: PropTypes.func.isRequired,
item: PropTypes.object.isRequired
}
const mapStateToProps = (state) =>(
{item: state.item 

}) // mapStateToProps allows to take item state and map it into component property
//the item in the reducer file 
export default connect (mapStateToProps ,{getItems , deleteItem } ) (ShoppingList)//getItems fron above ,

//render comment //item represennt the whole state object , items is the array inside the state reducerfile *//
