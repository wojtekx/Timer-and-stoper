/*-------------------------------- odliczanie czasu do określonej daty: -------------------------*/
const count = () => {
    const nowTime = new Date();
    const endTime = new Date('2019-08-31 14:00:00').getTime();
    let day = Math.floor(endTime / (1000 * 60 * 60 * 24) - nowTime / (1000 * 60 * 60 * 24));
    let hours = Math.floor(endTime / (1000 * 60 * 60) - nowTime / (1000 * 60 * 60)) % 24;
    let minutes = Math.floor(endTime / (1000 * 60) - nowTime / (1000 * 60)) % 60;
    let secound = Math.floor(endTime / 1000 - nowTime / 1000) % 60;

    document.querySelector('#result').textContent = `Czas do końca to: ${day} dni, ${hours} godzin, ${minutes} minut i ${secound} sekund ;)`;
}
setInterval(count, 1000);

/*---------------------------------  Stoper: -------------------------------------------*/

const startBtn = document.querySelector('#start');
const resetBtn = document.querySelector('#reset');
const stoper = document.querySelector('#stoper');
let index = "";
let s = 0;
let ms = 0;

const start = () => {
    stoper.classList.toggle('true');
    if (stoper.classList.contains('true')) {
        index = setInterval(() => {
            ms++;
            if (ms == 100) {
                ms = 0;
                s++;
            };
            if (ms < 10) ms = "0" + ms;
            stoper.textContent = `${s}:${ms}`;
        }, 10)
        startBtn.textContent = "Pause";
    }
    else {
        clearInterval(index);
        startBtn.textContent = "Start";
        const li = document.createElement('li');
        li.textContent = `${s}:${ms}`;
        document.querySelector('#lapTime').appendChild(li);
    };
}

const reset = () => {
    stoper.textContent = '0:00';
    s = 0;
    ms = 0;
    clearInterval(index);
    stoper.classList.remove('true');
    document.querySelector('#lapTime').textContent = "";
}

startBtn.addEventListener('click', start);
resetBtn.addEventListener('click', reset);

