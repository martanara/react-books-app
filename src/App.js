import BooksList from './components/Bookslist';
import BookForm from './components/BookForm';

const App = () => {
  return (
    <div>
      <h1>Books App</h1>
      <BooksList />
      <BookForm />
    </div>
  );
}

export default App;