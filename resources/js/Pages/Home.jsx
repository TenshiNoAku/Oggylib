import React from 'react'
import './Home.scss';

const books = [
  { title: 'Доставляя счастье', author: 'Абдульманов Сергей' },
  { title: 'Евангелист бизнеса. Рассказы о контент-маркетинге и бренд-журналистике в России', author: 'Адам Робинсон' },
  { title: 'Системное администрирование в Linux', author: 'Адельштайн Том' },
  { title: 'Психбольница в руках пациентов', author: 'Алан Купер' },
  { title: 'Интерфейс. Основы проектирования взаимодействия', author: 'Аллен Дэвид' },
  { title: 'Как поддерживать дела в порядке. Принципы полноценной жизни без стресса', author: 'Анджела Лэйн' },
  { title: 'Ководство', author: 'Артемий Лебедев' },
  { title: 'Оптимизация и продвижение в поисковых системах', author: 'Ашманов Игорь' },
  { title: 'Экстремальное программирование. Разработка через тестирование', author: 'Ашманов Игорь' },
  { title: 'Продавая незримое. Руководство по современному маркетингу услуг', author: 'Бек Кент' },
  { title: 'Игры, в которые играют люди. Люди, которые играют в игры', author: 'Беквит Гарри' },
  { title: 'Оставь свой след. Как построить компанию, которая меняет мир к лучшему', author: 'Берн Эрик' },
  { title: 'Delphi 5. Учебный курс', author: 'Битти Джой' },
  { title: 'Секреты хакеров. Безопасность Linux — готовые решения', author: 'Блейк Майкоски' },
  { title: 'Мифический человеко-месяц, или Как создаются программные системы', author: 'Бобби Вульф' },
  { title: 'На пике: Как поддерживать максимальную эффективность без выгорания', author: 'Бобровский Сергей' },
  { title: 'Грокаем алгоритмы. Иллюстрированное пособие для программистов и любопытствующих ', author: 'Брайан Хатч' },
  { title: 'BIG DATA. Вся технология в одной книге ', author: 'Брукс Фредерик' },
  { title: 'Программирование на JavaScript в примерах и задачах', author: 'Брэд Сталберг' },
  { title: 'Разработка требований к программному обеспечению', author: 'Бхаргава Адитья' },
  { title: 'Статистика и котики', author: 'Васильев Алексей' },
  { title: 'Найти идею: Введение в ТРИЗ — теорию решения изобретательских задач', author: 'Вигерс Карл' },
  { title: 'Уходим в отрыв. Построение эффективной компании', author: 'Владимир Савельев' },
  { title: 'Наука мудрости', author: 'Генрих Альтшуллер' }
];

const Home = () => {
  return (
    <div className="wrapper clear">
      <header className="header">
        <div className="top d-flex justify-between">
          <div className="logo">
            <img width={235} height={57} src="./img/logo.svg" alt="Логотип" />
          </div>
          <ul className="icon d-flex">
            <li>
              <img width={45} height={45} src="./img/search.svg" alt="Поиск" />
            </li>
            <li>
              <img width={45} height={45} src="./img/favourites.svg" alt="Избранное" />
            </li>
            <li>
              <img width={45} height={45} src="./img/alerts.svg" alt="Оповещения" />
            </li>
            <li>
              <img width={45} height={45} src="./img/user_lk.svg" alt="Лк" />
            </li>
          </ul>
        </div>
      </header>
      <div className="Home">
        <div className='editingHomePage'>
          <nav>
          <ul class="topmenu">
          <li><a href="" class="active"><img src="./img/filter.svg" alt="error"></img><span class="fa fa-angle-down"></span></a>
          <ul class="submenu">
           <li><a href="">Жанры</a></li>
            <li><a href="">Теги<span class="fa fa-angle-down"></span></a>
          <ul class="submenu">
            <li><a href="">Архитектура информационных систем</a></li>
            <li><a href="">Искусство программирования</a></li>
            <li><a href="">Роберт Мартин</a></li>
            <li><a href="">Разработка программного обеспечения</a></li>
          </ul>
          </li>
          </ul>
          </li>
          </ul>
          </nav>
          <a href="" class="floating-button">Добавить книгу</a>
        </div>
        <div home_editingBooks>
        </div>
        <div className='home_showcaseBooks'>
          {books.map((book) => (
          <div className='home_anyBooks'>
              <img width={148} src="./img/book_picture.png" alt=""></img>
              <div key={book.title} className='home_gridInsideAnyBooks'>
                <h4>{book.title}</h4>
                <p>{book.author}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='navigationOnCatalog'>
      <ul class="pagination modal-3">
        <li><a href="#" class="prev"><img src="./img/Prev.svg" alt="error"></img></a></li>
        <li><a href="#" class="active">1</a></li>
        <li> <a href="#">2</a></li>
        <li> <a href="#">3</a></li>
        <li> <a href="#">4</a></li>
        <li> <a href="#">5</a></li>
        <li> <a href="#">6</a></li>
        <li> <a href="#">7</a></li>
        <li> <a href="#">8</a></li>
        <li> <a href="#">9</a></li>
        <li><a href="#" class="next"><img src="./img/next.svg"></img></a></li>
        </ul><br></br>
      </div>
      <div className='footer'>
        <ol className='footer_left'>
          <li className='footer_left_1'>
            <img src="img/footer_left_1.svg" alt="error"></img>
            <li className='footer_left_text'>
              <h3 className='footer_left_header'>Офис в Таганроге</h3>
              <p className='footer_left_paragraph'>ул. Петровская, 89Б, ТЦ «Андреевский»</p>
            </li>
          </li>
          <li className='footer_left_2'>
            <img src="img/footer_left_2.svg" alt="error"></img>
            <li className='footer_left_text'>
              <h3 className='footer_left_header'>Офис в Ростове-на-Дону</h3>
              <p className='footer_left_paragraph'>ул. Нижнебульварная, 6, БЦ «5 морей»</p>
            </li>
          </li>
        </ol>
        <ol className='footer_right'>
          <li className='footer_right_number'>+7 495 587-41-27</li>
          <li className='footer_right_mail'><a href="mailto:hello@ogettoweb.com" target="_blank">hello@ogettoweb.com</a></li>
          <li><a href="#"><img src="img/footer_right_1.svg" alt="ERROR" className="footer_right_picture"></img></a></li>
        </ol>
      </div>
    </div >
  )
}

export default Home
