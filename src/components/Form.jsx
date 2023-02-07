import { Button, Form as Formulary, Row, Col } from 'react-bootstrap';
import useCategories from '../hooks/useCategories';

const Form = () => {
  const { categories } = useCategories();

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
            <Formulary.Label htmlFor="category">Categoria</Formulary.Label>
            <Formulary.Select id="category" name="category">
              <option>-- Selecionar Categoria --</option>
              {categories.map(cat => (
                <option key={cat.strCategory} value={cat.strCategory}>
                  {cat.strCategory}
                </option>
              ))}
            </Formulary.Select>
          </Formulary.Group>
        </Col>
      </Row>
      <Row className="justify-content-end">
        <Col md={3}>
          <Button
            variant='danger'
            className='text-uppercase w-100'
          >Buscar Bebidas</Button>
        </Col>
      </Row>
    </Formulary>
  );
};

export default Form;
