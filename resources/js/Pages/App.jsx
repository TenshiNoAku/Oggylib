import {
  BrowserRouter as Router, Link,
  Routes, Route
} from 'react-router-dom'
import Home from './Pages/Home';
import Mybooks from './Pages/Mybooks';
import Reading from './ComponentsBooks/Reading';
import Allbooks from './ComponentsBooks/Allbooks';
import Endreading from './ComponentsBooks/Endreading';
import Journal from './Pages/Journal';
import Alljournal from './ComponentsJournal/Alljournal';
import Booked from './ComponentsJournal/Booked';
import Free from './ComponentsJournal/Free';
import Latecomers from './ComponentsJournal/Latecomers';
import Readersnow from './ComponentsJournal/Readersnow';
import Comments from './Pages/Comments';
import LoginForm from './Pages/LoginForm';

function App() {
  return (
    <div className="wrapper clear">
      <header className="header">
        <div className="top d-flex justify-between">
          <div className="logo">
            <img width={235} height={57} src="public/img/logo.svg" alt="Логотип" />
          </div>
        <ul className="icon d-flex">
          <li>
            <img width={45} height={45} src="/img/search.svg" alt="Поиск" />
          </li>
          <li>
            <img width={45} height={45} src="/img/favourites.svg" alt="Избранное" />
          </li>
          <li>
            <img width={45} height={45} src="/img/alerts.svg" alt="Оповещения" />
          </li>
          <li>
            <img width={45} height={45} src="/img/user_lk.svg" alt="Лк" />
          </li>
        </ul>
        </div>
      </header>
      <main>
        <div className="App">
          <Router>
            <nav>
              <Link to="/">Главная</Link>
              <Link to="mybooks">Мои книги</Link>
              <Link to="journal">Журнал</Link>
              <Link to="comments">Комментарии</Link>
            </nav>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/mybooks" element={<Mybooks />}>
                <Route path="allbooks" element={<Allbooks />} />
                <Route path="reading" element={<Reading />} />
                <Route path="endreading" element={<Endreading />} />
              </Route>
              <Route path="/journal" element={<Journal />}>
                <Route path="alljournal" element={<Alljournal />} />
                <Route path="booked" element={<Booked />} />
                <Route path="free" element={<Free />} />
                <Route path="latecomers" element={<Latecomers />} />
                <Route path="readersnow" element={<Readersnow />} />
              </Route>
              <Route path="/comments" element={<Comments />} />
            </Routes>
          </Router>
        </div>
      </main>
    </div>
  );
}

export default App;
