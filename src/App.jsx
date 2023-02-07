import { Container } from 'react-bootstrap';
import Form from './components/Form';
import DrinkList from './components/DrinkList';
import Modal from './components/Modal';
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
          <Modal />
        </Container>
      </DrinksProvider>
    </CategoriesProvider>
  );
}

export default App;
