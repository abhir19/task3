import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from "../actions/Actions"
import { bindActionCreators } from "redux";
import {Redirect} from 'react-router-dom';
import Clear from './Clear';



class TransactionForm extends Component {

    state = {
        ...this.returnStateObject()
    }

    returnStateObject() {
        if (this.props.currentIndex == -1)
            return {
                Title:'',
                Author:'',
                Category:'',
                Length:'',
                
            }
        else
            return this.props.list[this.props.currentIndex]
    }

    componentDidUpdate(prevProps) {
        if (prevProps.currentIndex != this.props.currentIndex || prevProps.list.length != this.props.list.length) {
            this.setState({ ...this.returnStateObject() })
        }
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
   

    handleSubmit = (e) => {
        e.preventDefault()
        if (this.props.currentIndex == -1)
            this.props.insertTransaction(this.state)
        else
            this.props.updateTransaction(this.state)
          
    }
    OnSubmite =() =>{
        if(true){
            console.log("yes");
            this.props.history.push("/main");
            // return  <Redirect  to="/" />
        }
    }

    render() {
        return (

            <form onSubmit={this.handleSubmit} autoComplete="off" style={{width:'90vw',marginLeft:'20px'}}>
                 <label >Title</label>
                <input className="form-control" name="Title" placeholder="Title" onChange={this.handleInputChange} value={this.state.Title} /><br />
                   <label >Author</label>  
                < input className="form-control" name="Author" placeholder="Author" onChange={this.handleInputChange} value={this.state.Author} /><br />
                 <label > Category</label>  
                < input className="form-control" name="Category" placeholder="Category" onChange={this.handleInputChange} value={this.state.Category} /><br />
                 <label >Length</label>  
                < input className="form-control" name="Length" placeholder="Length" onChange={this.handleInputChange} value={this.state.Length} /><br />
               
                <br/>
                {/* <button className="btn btn-light">Clear</button> */}
                <Clear />
                
                <button className="btn btn-primary"type="submit">Submit</button>
            </form>
        )
    }
}

const mapStateToProps = state => {
    return {
        list: state.list,
        currentIndex: state.currentIndex
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        insertTransaction: actions.insert,
        updateTransaction: actions.update
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TransactionForm)