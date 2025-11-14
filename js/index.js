window.onload = function () {

    let intervalCronometro;
    const inputHoras = document.getElementById('inputHours');
    const inputMinutes = document.getElementById('inputMinutes');
    const inputSecounds = document.getElementById('inputSecounds');

    const btnEdit = document.getElementById('btnEdit');
    const btnReset = document.getElementById('btnReset');
    const btnStop = document.getElementById('btnStop');
    const btnRunCronometro = document.getElementById('btnRunCronometro');

    inputHoras.setAttribute('disabled', 'disabled');
    inputMinutes.setAttribute('disabled', 'disabled');
    inputSecounds.setAttribute('disabled', 'disabled');
    btnStop.setAttribute('disabled', 'disabled');

    btnEdit.addEventListener('click', () => {
        inputHoras.removeAttribute('disabled');
        inputMinutes.removeAttribute('disabled');
        inputSecounds.removeAttribute('disabled');
    });

    btnReset.addEventListener('click', () => {
        inputHoras.value = "00";
        inputMinutes.value = "00";
        inputSecounds.value = "00";
    });

    btnRunCronometro.addEventListener('click', () => {
        btnStop.removeAttribute('disabled');
        btnEdit.setAttribute('disabled', 'disabled');
        btnReset.setAttribute('disabled', 'disabled');
        btnRunCronometro.setAttribute('disabled', 'disabled');
        inputHoras.setAttribute('disabled', 'disabled');
        inputMinutes.setAttribute('disabled', 'disabled');
        inputSecounds.setAttribute('disabled', 'disabled');

        let hours = parseInt(inputHoras.value);
        let minutes = parseInt(inputMinutes.value);
        let secounds = parseInt(inputSecounds.value);

        let vetColors = ['rgb(3, 71, 12)', 'rgb(168, 27, 8)'];

        intervalCronometro = setInterval(() => {
            if (secounds <= 10 && minutes == 0 && hours == 0) {
                secounds % 2 == 0 ? document.querySelector('body').style.background = vetColors[0] :
                    document.querySelector('body').style.background = vetColors[1];

                if (secounds == 0) {
                    clearInterval(intervalCronometro);
                    document.querySelector('body').style.background = 'rgb(38, 2, 49)';
                    btnStop.setAttribute('disabled', 'disabled');
                    btnEdit.removeAttribute('disabled');
                    btnReset.removeAttribute('disabled');
                    btnRunCronometro.removeAttribute('disabled');
                }
            }

            if (secounds > 0)
                secounds--;
            if (minutes > 0 && secounds == 0) {
                minutes--;
                secounds = 59;
            }
            if (hours > 0 && minutes == 0 && secounds == 0) {
                hours--;
                minutes = 59;
                secounds = 59;
            }

            inputHoras.value = hours.toString().padStart('2', '0');
            inputMinutes.value = minutes.toString().padStart('2', '0');
            inputSecounds.value = secounds.toString().padStart('2', '0');

        }, 1000);

    });

    btnStop.addEventListener("click", () => {
        clearInterval(intervalCronometro);
        btnStop.setAttribute('disabled', 'disabled');
        btnEdit.removeAttribute('disabled');
        btnReset.removeAttribute('disabled');
        btnRunCronometro.removeAttribute('disabled');
    });
}