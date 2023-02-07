import { Button, Form as Formulary, Row, Col } from 'react-bootstrap';

const Form = () => {
  return (
    <Formulary>
      <Row>
        <Col md={6}>
          <Formulary.Group className="mb-3">
            <Formulary.Label htmlFor="drink-name">
              Nome da bebida
            </Formulary.Label>
            <Formulary.Control
              id="drink-name"
              type="text"
              placeholder="Ex. Tequila, Vodka, etc"
              name="drink-name"
            />
          </Formulary.Group>
        </Col>
        <Col md={6}>
          <Formulary.Group className="mb-3">
            <Formulary.Label htmlFor="category">
              Categoria
            </Formulary.Label>
            <Formulary.Select id='category' name='category'>
              <option>-- Selecionar Categoria --</option>
            </Formulary.Select>
          </Formulary.Group>
        </Col>
      </Row>
    </Formulary>
  );
};

export default Form;
