import React, { useState } from 'react'
import Header from '../../Layouts/Header/Header'
import Footer from '../../Layouts/Footer/Footer'
import {ReactComponent as Close} from "../../../assets/icons/close.svg"
import "./Contacts.css"

function Contacts() {

  const [openForm, setOpenForm] = useState(false);

  const open = () => {
    setOpenForm(!openForm);
  }

  return (
    <div className='wrapper'>
      {openForm && <div className="contacts__from-bg">
        <div className="contacts__form">
          <Close onClick={(e) => open()} className='contacts__icon'></Close>
          <h2 className="contacts__form__heading">Форма обратной связи</h2>
          <label className="contacts__label">Имя<input type="text" className="contacts__input" placeholder='Иванов Иван Иванович' /></label>
          <div className="contacts__inputs">
            <label className="contacts__label">Email<input type="text" className="contacts__input" placeholder='example@example.com' /></label>
            <label className="contacts__label">Телефон<input type="text" className="contacts__input" placeholder='+7 (999) 999 99-99' /></label>
          </div>
          <label className="contacts__label">Сообщение<textarea type="text" className="contacts__teaxtarea" placeholder='Напишите что-нибудь' /></label>
          <button onClick={(e) => open()} className="contacts__button--form">Отправить</button>
        </div>
      </div>}
       <Header />
       <div className="contacts__wrapper">
          <div>
            <h2 className="contacts__heading">Для покупателей</h2>
            <span className="contacts__span">По России</span>
            <p className="contacts__text">+7 (999) 999 99-99</p>
            <span className="contacts__span">По Москве</span>
            <p className="contacts__text">+7 (555) 555 55-55</p>
            <span className="contacts__span">По любым вопросам</span>
            <p className="contacts__text">yuccastore@gmail.com</p>
          </div>
          <div>
            <h2 className="contacts__heading">Узнать о свободных вакансиях</h2>
            <span className="contacts__span">Анкета для заполнения</span>
            <p className="contacts__text">Yandex Form</p>
            <span className="contacts__span">По вопросам к вакансиям</span>
            <p className="contacts__text">yuccaмvacancy@gmail.com</p>
          </div>
          <div>
            <h2 className="contacts__heading">Для сотрудничества</h2>
            <span className="contacts__span">По России</span>
            <p className="contacts__text">+7 (121) 212 12-12</p>
            <span className="contacts__span">По Москве</span>
            <p className="contacts__text">+7 (232) 323 23-23</p>
            <span className="contacts__span">Поставщикам</span>
            <p className="contacts__text">yuccastore@gmail.com</p>
          </div>
       </div>
       <button onClick={(e) => open()} className="contacts__button">Форма обратной связи</button>
       <Footer></Footer>
    </div>
  )
}

export default Contacts
