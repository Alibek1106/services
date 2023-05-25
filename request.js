const requestHasBeenSent = document.querySelector('.request-has-been-sent');


const CHAT_ID = "-1001909609485"
const TOKEN = "6285062213:AAHt25P3NkBMxtytAurDkkEuiLZzaUZtZ7A";

const URL_API = `https://api.telegram.org/bot${ TOKEN }/sendMessage`;

document.getElementById('request-form').addEventListener('submit', function(e) {
    e.preventDefault();

    let message = `<b>Заявка с сайта!</b>\n`;
    message += `<b>Отправитель: </b> ${ this.name.value }\n`;
    message += `<b>Телефон: </b> ${this.phone.value }\n`;
    message += `<b>Почта: </b> ${ this.email.value }\n`;
    message += `<b>Сообщение: </b> ${ this.message.value }`;

    axios.post(URL_API, {
        chat_id: CHAT_ID,
        parse_mode: 'html',
        text: message,
    });

    requestHasBeenSent.style.transform = "translateX(0)"
    setTimeout(() => requestHasBeenSent.style.transform = "translateX(200%)", 1500)
});