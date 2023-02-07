import { Container } from 'react-bootstrap';
import Form from './components/Form';

function App() {
  return (
    <>
      <header className="bg-danger text-light py-5 text-center">
        <h1 className="font-weight-bold">Buscador de Bebidas</h1>
      </header>
      <Container className="mt-5">
        <Form />
      </Container>
    </>
  );
}

export default App;
