import { Container } from 'react-bootstrap';
import Form from './components/Form';
import { CategoriesProvider } from './context/CategoriesProvider';

function App() {
  return (
    <CategoriesProvider>
      <header className="bg-danger text-light py-5 text-center">
        <h1 className="font-weight-bold">Buscador de Bebidas</h1>
      </header>
      <Container className="mt-5">
        <Form />
      </Container>
    </CategoriesProvider>
  );
}

export default App;
