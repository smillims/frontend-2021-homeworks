export default class {
    constructor() {
        console.log('About Controller is ready');
    }

    get() {
        return `
            <h1 class='title title--underline'>About</h1>

            <div class='qa'>
                <div class='qa__item'>
                    <h3 class='title title--underline'>О чём этот сайт?</h3>
                    <p class='qa__text'>Данный сайт не несёт никакой информационной ценности. Он создан с целью практики технической реализации управлением содержимим страницы программными средствами с помощью языка программирования JS.</p>
                </div>

                <div class='qa__item'>
                    <h3 class='title title--underline'>Почему текст на сайте имеет такие дурацкие длинные формулировки?</h3>
                    <p class='qa__text'>Это сделано с целью максимально полно занять страницу хоть каким-то связным контентом для этого не жалко каких-либо длиннющих-скучнющих слов:)</p>
                </div>

                <div class='qa__item'>
                    <h3 class='title title--underline'>Почему сайт имеет такой плохой дизайн?</h3>
                    <p class='qa__text'>Всё очень просто... У автора нету никаких здравых идей на этот счёт, а время идёт, дедлайн приближается. Вот и родилось это детище, порождение Ехидны и котого ещё из греческой мифологии))) Наслаждайтесь!)</p>
                </div>

                <div class='qa__item'>
                    <h3 class='title title--underline'>Что дальше?</h3>
                    <p class='qa__text'>С этим сайтом хочеться полноценно реализовать функционал контроллеров, сейчас они вообще никакие. Также планируеться добавить шаблонизатор и грамотный рендер который будет обновлять контент страницы без бессмысленных нагрузок. А вообще дальше будет следующий таск)))</p>
                </div>
            </div>

        `;
    }
}

