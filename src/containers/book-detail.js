import React, { Component } from 'react'
import { connect } from "react-redux";

 class BookDetail extends Component {
  render() {
     if(!this.props.book){
        return <div>Select book</div>
      }
    return (
     
      <div>
        <h3>Dtail for:</h3>
        <div>Title:{this.props.book.title}</div>
        <div>Pages:{this.props.book.pages}</div>
      </div>
    )
  }
 }
function mapStatToProps(state){

    return{
        book:state.activeBook
        
    };
}

export default connect(mapStatToProps)(BookDetail);