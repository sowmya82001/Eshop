import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useCart } from '../context/CartContext';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './ProductPage.css';

const ProductPage = () => {
  // Sample product data
  const products = [
    {
      id: 1,
      name: 'PUMA SHOES',
      description: 'PUMA Cassia SL Sneakers For Women.',
      price: '₹4500',
      image: 'https://images.unsplash.com/photo-1715692965422-280fe6566146?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHB1bWElMjBzaG9lcyUyMG1lbnxlbnwwfHwwfHx8MA%3D%3D' // Replace with your product image URL
    },
    {
      id: 2,
      name: 'CANON CAMERA',
      description: 'Canon EOS 3000D DSLR Camera 1 Body.',
      price: '₹35500',
      image: 'https://images.unsplash.com/photo-1533246860975-b290a87773d3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZHNsciUyMGNhbWVyYXxlbnwwfHwwfHx8MA%3D%3D' // Replace with your product image URL
    },
    {
      id: 3,
      name: 'WATCH',
      description: 'TIMEX Analog Watch - For Women.',
      price: '₹2000',
      image: 'https://media.istockphoto.com/id/1631723029/photo/a-beautiful-ladies-wrist-watch-artistically-clicked-with-fabric-background.webp?b=1&s=612x612&w=0&k=20&c=eSIXOEtWfO8lGAaGZBfZ4yn9nYK4eJmJdIT4RfzCsos=' // Replace with your product image URL
    },
    {
      id: 4,
      name: 'SLING BAG',
      description: 'Sling Bag For Women.',
      price: '₹13500',
      image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJhZyUyMGd1Y2NpfGVufDB8fDB8fHww' // Replace with your product image URL
    },
    {
      id: 5,
      name: 'NECKLACE',
      description: 'Metal Gold Jewel Set.',
      price: '₹12000',
      image: 'https://media.istockphoto.com/id/1276740597/photo/indian-traditional-gold-necklace.webp?b=1&s=612x612&w=0&k=20&c=S-QnNZKqf2u3L-GIaDiIinNRU74GBWQaIDwY7gYJboY=' // Replace with your product image URL
    },
    {
      id: 6,
      name: 'SHOES',
      description: 'Stylish,Comfortable Sneakers For Men.',
      price: '₹6000',
      image: 'https://media.istockphoto.com/id/1359793160/photo/display-and-sale-of-shoe-models.webp?b=1&s=612x612&w=0&k=20&c=KT3HsbO5N4QM38l6sJd2Bcm0G9RTEeCn1v5ApO0tZiI=' // Replace with your product image URL
    },
    {
      id: 7,
      name: 'BANGLES',
      description: 'Metal Diamond Rhodium Bangle.',
      price: '₹9500',
      image: 'https://media.istockphoto.com/id/1163145560/photo/fancy-designer-bracelets-jewelry-for-woman-fashion.webp?b=1&s=612x612&w=0&k=20&c=3fBNyQd7sZKUt33ReG75jPefBX94u99g445jQg4ZY-4=' // Replace with your product image URL
    },
    {
      id: 8,
      name: 'HAND PURSE',
      description: 'Casual,Party,Formal Clutch.',
      price: '₹1500',
      image: 'https://images.unsplash.com/photo-1529025530948-67e8a5c69b58?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHB1cnNlfGVufDB8fDB8fHww' // Replace with your product image URL
    },
    {
      id: 9,
      name: 'EARRINGS',
      description: 'Latest Stylish Traditional Earrings.',
      price: '₹500',
      image: 'https://media.istockphoto.com/id/1280311090/photo/indian-style-ear-stud-silver-jimikki-with-mirror-patch.webp?b=1&s=612x612&w=0&k=20&c=DvcgFfPthj0mMnpxKY2dbXge8z5IdM4v6oaM8WCOXyo=' // Replace with your product image URL
    },
    {
      id: 10,
      name: 'SMART WATCH',
      description: 'NIKHILX T800 ultra smart watch.',
      price: '₹5500',
      image: 'https://images.unsplash.com/photo-1461141346587-763ab02bced9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c21hcnQlMjB3YXRjaHxlbnwwfHwwfHx8MA%3D%3D' // Replace with your product image URL
    },
    {
      id: 11,
      name: 'SAREES',
      description: 'SHANVIKA Printed Daily Wear Sarees.',
      price: '₹3000',
      image: 'https://media.istockphoto.com/id/89323827/photo/indian-sarees.webp?b=1&s=612x612&w=0&k=20&c=ouzbESXYlAnxoeKl98O-0BsoQrIvBzWX80GsmZYt1E0=' // Replace with your product image URL
    },
    {
      id: 12,
      name: 'JACKET',
      description: 'Men Solid Casual Jacket.',
      price: '₹900',
      image: 'https://media.istockphoto.com/id/1340904443/photo/oversized-hooded-sweatshirt-mockup-for-print.webp?b=1&s=612x612&w=0&k=20&c=wORyP3A4AaDmYjhCeNKF8I9GX1VXkMepVe4UA54klZw=' // Replace with your product image URL
    },
    // Add more products as needed
  ];

  const { addToCart } = useCart(); // Destructure the addToCart function from the context

  return (
    <Container className="mt-5">
      <h1 className="mb-4">Our Products</h1>
      <Row>
        {products.map(product => (
          <Col md={4} key={product.id} className="mb-4">
            <Card className="card">
              <Card.Img variant="top" src={product.image} className="card-img-top" />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
              </Card.Body>
              <Card.Footer className="card-footer">
                <span className="card-price">{product.price}</span>
                <Button variant="primary" className="card-button" onClick={() => addToCart(product)}>
                  Add to Cart
                </Button>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ProductPage;
