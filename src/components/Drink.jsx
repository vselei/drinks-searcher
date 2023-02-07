import { Card, Col, Button } from 'react-bootstrap';
import useDrinks from '../hooks/useDrinks';

const Drink = ({ drink }) => {
  const { handleModalClick, handleClickDrinkId } = useDrinks();

  return (
    <Col md={6} lg={3}>
      <Card className="mb-4">
        <Card.Img
          variant="top"
          src={drink.strDrinkThumb}
          alt={`${drink.strDrink}`}
        />
        <Card.Body>
          <Card.Title>{drink.strDrink}</Card.Title>
          <Button
            onClick={() => {
              handleModalClick();
              handleClickDrinkId(drink.idDrink);
            }}
            variant="danger"
            className="w-100 text-uppercase mt-2"
          >
            Ver Receita
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Drink;
