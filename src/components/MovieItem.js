import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";




const MovieItem = ({ movie }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleshow = () => setShow(true);

  return (
    <div className="horizontal-card">
      <Container>
        <Card style={{ width: "10rem"}}>
          <Card.Img variant="top" style={{width: "200px", height: "200px"}} className="img-fluid" src={movie.Poster} />
          <Card.Body className='card-body'>
            <Button variant="outline-light" onClick={handleshow}>
              More details
            </Button>
          </Card.Body>
        </Card>
      <div > 
      <Modal show={show} onHide={handleClose} >
          <Modal.Header closeButton className="bg-dark text-white"> 
            <Modal.Title>{movie.Title}</Modal.Title>
          </Modal.Header >
          <Modal.Body className="bg-dark text-white">
            <p> Year: {movie.Year}</p>
            <p> Type: {movie.Type}</p>
          </Modal.Body>
          <Modal.Footer className="bg-dark text-white">
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            
          </Modal.Footer>
  </Modal>
      </div>

        </Container>
    </div>
  );
};

export default MovieItem;