import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Booklist from './components/Booklist';
import { useEffect, useState } from 'react';
import Addbook from './components/Addbook';
import Editbook from './components/Editbook';
import Footer from './components/Footer';

function App({ books }) {

  const [book, setBook] = useState(books)

  const [editid, setEditid] = useState("");

  const [tempbook, setTempbook] = useState([...book])

  const [search, setSearch] = useState("");

  useEffect(() => {
    let filteredBooks = book.filter((b) => b.title.toLowerCase().includes(search.toLowerCase()) || b.author.toLowerCase().includes(search.toLowerCase()))
    setTempbook(filteredBooks);
  }, [search, book])



  return (
    <div className="container-fluid">
      <Router>
        <Navbar  search={search} setSearch={setSearch} />
        <Routes>
          <Route path='/' element={<Home />} />

          <Route path='/Book-List' element={<Booklist book={book} setBook={setBook} setEditid={setEditid} tempbook={tempbook} />} />

          <Route path='/Addbook' element={<Addbook book={book} setBook={setBook} />} />

          <Route path='/Editbook' element={<Editbook book={book} setBook={setBook} editid={editid} />} />


        </Routes>


      </Router>

      <Footer />

    </div>
  );
}

export default App;