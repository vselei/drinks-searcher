import { useState } from 'react';
import { Button, Form as Formulary, Row, Col, Alert } from 'react-bootstrap';
import useCategories from '../hooks/useCategories';

const Form = () => {
  const [search, setSearch] = useState({
    name: '',
    category: ''
  });
  const [alert, setAlert] = useState('');

  const { categories } = useCategories();

  const handleSubmit = e => {
    e.preventDefault();

    if (Object.values(search).includes('')) {
      setAlert('Todos os campos são obrigatórios');
      return;
    }
    setAlert('');
  };

  return (
    <Formulary onSubmit={handleSubmit}>
      {alert && (
        <Alert variant="danger" className="text-center">
          {alert}
        </Alert>
      )}
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
              name="name"
              onChange={e =>
                setSearch({
                  ...search,
                  [e.target.name]: e.target.value
                })
              }
              value={search.name}
            />
          </Formulary.Group>
        </Col>
        <Col md={6}>
          <Formulary.Group className="mb-3">
            <Formulary.Label htmlFor="category">Categoria</Formulary.Label>
            <Formulary.Select
              id="category"
              name="category"
              onChange={e =>
                setSearch({
                  ...search,
                  [e.target.name]: e.target.value
                })
              }
              value={search.category}
            >
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
            type="submit"
            variant="danger"
            className="text-uppercase w-100"
          >
            Buscar Bebidas
          </Button>
        </Col>
      </Row>
    </Formulary>
  );
};

export default Form;
