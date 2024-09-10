import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card, Button, ListGroup } from 'react-bootstrap';
import { useCart } from '../context/CartContext';

function CartPage() {
  const { cart, removeFromCart } = useCart();
  const navigate = useNavigate(); // Add this line

  const calculateTotal = () => {
    return cart.reduce((acc, item) => acc + parseFloat(item.price.replace('₹', '')) * item.quantity, 0).toFixed(2);
  };

  const navigateToCheckout = () => {
    if (cart.length > 0) {
      navigate('/checkout'); // Use this to navigate to the checkout page
    } else {
      alert('Your cart is empty! Add some products to proceed.');
    }
  };

  return (
    <Container className="mt-5">
      <h1 className="mb-4">Your Cart</h1>
      <Row>
        <Col md={8}>
          <ListGroup>
            {cart.length > 0 ? (
              cart.map((item) => (
                <ListGroup.Item key={item.id}>
                  <Row>
                    <Col md={3}>
                      <img src={item.image} alt={item.name} className="img-fluid" />
                    </Col>
                    <Col md={6}>
                      <h5>{item.name}</h5>
                      <p>{item.description}</p>
                      <p>Price: {item.price}</p>
                      <p>Quantity: {item.quantity}</p>
                    </Col>
                    <Col md={3} className="d-flex flex-column justify-content-center align-items-end">
                      <h6>Total: ₹{(parseFloat(item.price.replace('₹', '')) * item.quantity).toFixed(2)}</h6>
                      <Button variant="danger" onClick={() => removeFromCart(item.id)}>Remove</Button>
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))
            ) : (
              <ListGroup.Item>No items in the cart.</ListGroup.Item>
            )}
          </ListGroup>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Cart Summary</Card.Title>
              <Card.Text>
                <h5>Total Amount: ₹{calculateTotal()}</h5>
              </Card.Text>
              <Button 
                variant="primary" 
                className="w-100" 
                onClick={navigateToCheckout} // Add the onClick handler here
              >
                Proceed to Checkout
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default CartPage;
