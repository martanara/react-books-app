import { useDispatch, useSelector } from 'react-redux'
import { getAllBooks, removeBook } from '../redux/booksRedux';

const BooksList = () => {

  const dispatch = useDispatch();

  const books = useSelector(state => getAllBooks(state));

  const remove = bookId => {
    dispatch(removeBook(bookId))
  };

  return (
    <ul>
      {books.map(book => <li key={book.id}>{book.title} by {book.author} <button onClick={() => remove(book.id)}>Remove</button></li>)}
    </ul>
  );
}

export default BooksList;