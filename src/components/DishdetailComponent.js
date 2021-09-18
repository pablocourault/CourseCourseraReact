import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

    function RenderDish({dish}) 
      {
        return (
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                    </Card>
                </div>
               )
        }

    function RenderComments({comments})
        {

        const list = comments.map((comment) => {

            if (comment != null) 
                {
                return (            
                        <li key={comment.id}>
                        <div className="row"> {comment.comment} </div>
                        <div className="row"> --&nbsp;{comment.author} {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date))) } </div>  
                        </li>
                        )
                }
                return null
            }
            )

            return (
                    <div className="col-12 col-md-5 m-1">
                        <div><h4>Comments</h4></div>
                        <div> 
                            <ul className="list-unstyled">
                                {list} 
                            </ul>
                        </div>
                    </div>
                    )
        }
        

    const DishDetail = (props) => { 

            if (props.dish != null)

                return ( 
                         <div className="container">
                             <div className="row">
                                 < RenderDish dish={props.dish} />
                                 < RenderComments comments={props.dish.comments} />
                             </div>
                         </div>
                        );
            else
                return (<div></div>)
        }

export default DishDetail;