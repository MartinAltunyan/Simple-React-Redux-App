import React, { Component } from "react";
import { connect } from "react-redux";
import { selectBook } from "../actions/index";
import { bindActionCreators } from "redux"; // bineds our action to this component

 class BookList extends Component{
     
    renderList(){
        
        return this.props.books.map((book)=>{
             
            return (
                
                    <li onClick={()=>this.props.selectBook(book)} key={book.title} className="list-group-item">{book.title}</li>
                    
                 
            );
        });
    }
    render(){
        
        return(
            
            <ul className="list-group col-sm-4">
                {this.renderList()}
               
            </ul>
        )
    }
}

function mapStatToProps(state){

    return{
        books:state.books
        
    };
}
//binding action 
// Anything returend from this function will be in our props on the BookList
function mapDispatchToProps(dispatch) {

    //whenever called  selectBook, the result passing to all our reducers

    return bindActionCreators({ selectBook: selectBook },(dispatch))
}
//3 ways conect 
export default connect(mapStatToProps,mapDispatchToProps)(BookList);