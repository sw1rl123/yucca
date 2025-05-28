import React from 'react'
import Header from '../../Layouts/Header/Header'
import Footer from '../../Layouts/Footer/Footer'
import {ReactComponent as ArrowRight} from "../../../assets/icons/arrowRight.svg"
import "./FaQ.css"

function FaQ() {
  return (
    <div className='wrapper'>
       <Header />
       <div className="info__wrapper">
        <h2 className="info__subheading">Вопросы и ответы</h2>
        <p className="info__text">
        В этом разделе мы отвечаем на наиболее часто задаваемые вопросы клиентов. Если вы не нашли ответ на свой вопрос, пожалуйста напишите нам на почту.
        </p>
        <h2 className="info__subheading">Вопросы о доставке</h2>
        <p className="faq__text">
        Что произойдет, если получатель не будет на месте во время доставки? <label className="faq__label"><ArrowRight></ArrowRight><input type="checkbox" className="faq__checkbox" /></label>
        <span className="info__text info__text--dash faq__open-text">В подобной ситуации, курьер постарается договориться с получателем об удобном времени и адресе доставки Вашего заказа * Возможна доплата за доставку в случае, если адрес доставки будет значительно отличаться от указанного изначально в заказе.</span>
        </p>
        <p className="faq__text">
        Как я буду знать, что мой заказ был доставлен? <label className="faq__label"><ArrowRight></ArrowRight><input type="checkbox" className="faq__checkbox" /></label>
        <span className="info__text info__text--dash faq__open-text">Как только заказ доставят получателю, на номер, который Вы указали при оформлении, поступит информация о Выполнении доставки Вашего заказа</span>
        </p>
        <p className="faq__text">
        Возможен ли самовывоз заказанного товара? <label className="faq__label"><ArrowRight></ArrowRight><input type="checkbox" className="faq__checkbox" /></label>
        <span className="info__text info__text--dash faq__open-text">Вы можете самостоятельно забрать заказанные товары в наших магазинах, в городах где присутствует наш цветочный склад. Адрес указан в разделе "Контакты".При оформлении заказа не забудьте выбрать "Самовывоз"</span>
        </p>
        <p className="faq__text">
        Как осуществляется доставка в удаленные районы?<label className="faq__label"><ArrowRight></ArrowRight><input type="checkbox" className="faq__checkbox" /></label>
        <span className="info__text info__text--dash faq__open-text">При полном оформлении заказа выберите "Доставка по Яндекс карте" введите адрес или поставьте точку на карте, сайт автоматически посчитает стоимость доставки. Если данный вариант не доступен, выберите любой другой способ доставки соответствующий вашему адресу доставки. Если подходящего способа доставки нет, выберите любой из предложенных вариантов, менеджер свяжется с вами и скорректирует заказ.</span>
        </p>
        <h2 className="info__subheading">Оформление заказа</h2>
        <p className="faq__text">
        Каков процесс оплаты? Какие формы оплаты вы принимаете?<label className="faq__label"><ArrowRight></ArrowRight><input type="checkbox" className="faq__checkbox" /></label>
        <span className="info__text info__text--dash faq__open-text">После того, как Вы собрали корзину и заполнили данные при оформлении заказа, Вам предлагается выбрать форму оплаты. В нашем интернет-магазине к выбору прилагаются следующие способы оплаты: - Банковская карта (Русская карта, Yandex Pay и Tinkoff Pay) - ЮКасса (Русская карта, SberPay и ЮMoney)- Долями (Русская карта) Оплатите 25%  сейчас, остальное спишется автоматически 3 равными частями интервалом в 2 недели - PayPal (Иностранная карта) Только при наличии аккаунта в PayPal. Ссылка на оплату поступит в смс - Оплата с р/с (Оплата с расчетного счета юридического лица)</span>
        </p>
        <p className="faq__text">
        Могу ли я отменить или изменить заказ после его оформления?<label className="faq__label"><ArrowRight></ArrowRight><input type="checkbox" className="faq__checkbox" /></label>
        <span className="info__text info__text--dash faq__open-text">Вы можете внести изменения в заказ или отменить его в личном кабинете сайта по ссылке, отправленной Вам в смс после оформления заказа. * Важно!!! Изменения к заказу возможно применить до статуса “Обработан”</span>
        </p>
        <p className="faq__text">
        Я не знаю адрес доставки. Что делать?<label className="faq__label"><ArrowRight></ArrowRight><input type="checkbox" className="faq__checkbox" /></label>
        <span className="info__text info__text--dash faq__open-text">В корзине, в блоке "Информация о доставке", выберите "Позвонить получателю для уточнения адреса и времени". Мы позвоним получателю, представимся транспортной компанией и уточним куда можно доставить груз.</span>
        </p>
       </div>
       <Footer></Footer>
    </div>
  )
}

export default FaQ
