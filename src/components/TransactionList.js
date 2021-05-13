import React, { Component } from 'react'
import TransactionForm from './TransactionForm'
import { connect } from "react-redux";
import * as actions from "../actions/Actions"
import { bindActionCreators } from "redux";


class TransactionList extends Component {


    handleEdit = (index) => {
        this.props.updateTransactionIndex(index)
    }

    handleDelete = (index) => {
        this.props.deleteTransaction(index)
    }
    

    render() {
        return (
            <div>
                <h1>Add</h1>
                <TransactionForm />
                
                <hr />
            <table className="table" style={{marginLeft:'100px',width:'90vw'}} >
            <thead>
            <tr>
      <th scope="col">Title</th>
      <th scope="col">Length</th>
      <th scope="col">Category</th>
      <th scope="col">Author</th>
    </tr>
  </thead>
                    <tbody>
                        {this.props.list.map((item, index) => {
                            return <tr key={index}>
                                <td><a style={{'color':'blue'}}href="https://www.pluralsight.com/courses/item.Title" target="_blank">{item.Title}</a></td>
                                <td>{item.Length}</td>
                                <td>{item.Category}</td>
                                <td>{item.Author}</td>

                                
                                <td><button className='btn btn-success'onClick={() => this.handleEdit(index)}>Edit</button></td>
                                <td><button className='btn btn-danger'onClick={() => this.handleDelete(index)}>Delete</button></td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        list: state.list
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        updateTransactionIndex: actions.updateIndex,
        deleteTransaction: actions.Delete
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TransactionList)