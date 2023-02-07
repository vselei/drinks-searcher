import { Container } from 'react-bootstrap';
import DrinkList from './components/DrinkList';
import Form from './components/Form';
import { CategoriesProvider } from './context/CategoriesProvider';
import { DrinksProvider } from './context/DrinksProvider';

function App() {
  return (
    <CategoriesProvider>
      <DrinksProvider>
        <header className="bg-danger text-light py-5 text-center">
          <h1 className="font-weight-bold">Buscador de Bebidas</h1>
        </header>
        <Container className="mt-5">
          <Form />
          <DrinkList />
        </Container>
      </DrinksProvider>
    </CategoriesProvider>
  );
}

export default App;
