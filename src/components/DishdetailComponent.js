import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

class Dishdetail extends Component { 

    constructor(props) {
        super(props);

        };
    

    renderDish(dish) 
      {
       if (dish != null) 
          {
            return( <div className="row">
                    <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg width="100%" src={this.props.dish.image} alt={this.props.dish.name} />
                    <CardBody>
                        <CardTitle>{this.props.dish.name}</CardTitle>
                        <CardText>{this.props.dish.description}</CardText>
                    </CardBody>
                    </Card>
                    </div>
                    <div className="col-12 col-md-5 m-1">              
                        { this.renderComments(this.props.dish.comments) }
                    </div>
                    </div> )
          }
       else
          {
           return (<div></div>)  
          }}

    renderComments(comments)
        {

            const list = comments.map((comment) => {

                if (comment != null) 
                    {
                    return(
                    
                        <li key={comment.id}>
                            <div className="row"> {comment.comment} </div>
                            <div className="row"> --&nbsp;{comment.author} {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date))) } * </div>
                            
                        </li>

                        )
                    }
                else
                    {
                    return (<div></div>) 
                    }
                }
            )
            return (<div className="container">
                        <div><h4>Comments</h4></div>
                        <div>
                            <ul className="list-unstyled">
                            {list} 
                            </ul>
                        </div>
                    </div>)
        }
        

    render() { 

               const dish = this.props.dish
               const dishselected = this.renderDish(dish)

                return ( 
                         <div className="container">
                             {dishselected}
                         </div>
                        )
            }

    }

export default Dishdetail;