import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import {AiOutlinePlus, AiOutlineMinus} from "react-icons/ai"



class ProductCard extends Component {
 
    render() { 
        const {image, name, desc, quantity} = this.props.product;

        return (
            <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={image} style={{height: "18rem", objectFit: "cover"}} />
                <Card.Body>
                    <Card.Title> {name} </Card.Title>
                    <Card.Text>
                        {desc}
                    </Card.Text>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="w-50 d-flex justify-content-between align-items-center">
                            <Button variant="secondary" size="small"> <AiOutlineMinus/> </Button>
                            <div> 0 </div>
                            <Button variant="secondary" size="small"> <AiOutlinePlus/> </Button>
                        </div>
                        <div>
                            {
                                quantity > 0 ? <Badge bg="success"> In Stock </Badge> : <Badge bg="danger"> Out of Stock </Badge>
                                
                            }
                        </div>
                    </div>
                    
                </Card.Body>
            </Card>
        );
    }
}
 
export default ProductCard;