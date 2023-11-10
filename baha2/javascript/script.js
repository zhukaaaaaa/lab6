document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById('display');
    const buttons = document.getElementById('buttons');

    buttons.addEventListener('click', function (e) {
        if (e.target.matches('button')) {
            const buttonText = e.target.innerText;

            if (buttonText === 'C') {
                display.textContent = '';
            } else if (buttonText === '=') {
                try {
                    display.textContent = eval(display.textContent);
                } catch (error) {
                    display.textContent = 'Error';
                }
            } else if (buttonText === '%') {
                // Обработка процента
                display.textContent = parseFloat(display.textContent) / 100;
            } else if (buttonText === '+/-') {
                // Изменение знака
                display.textContent = parseFloat(display.textContent) * -1;
            } else {
                display.textContent += buttonText;
            }
        }
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById('display');
    const buttons = document.getElementById('buttons');

    buttons.addEventListener('click', handleButtonClick);
    document.addEventListener('keydown', handleKeyDown);

    function handleButtonClick(e) {
        if (e.target.matches('button')) {
            handleButtonPress(e.target.innerText);
        }
    }

    function handleKeyDown(e) {
        const key = e.key;

        // Дополнительные проверки, если нужно
        if (key.match(/[0-9%\/*\-+=.]/)) {
            e.preventDefault();
            handleButtonPress(key);
        } else if (key === 'Enter') {
            e.preventDefault();
            handleButtonPress('=');
        } else if (key === 'Backspace') {
            e.preventDefault();
            handleButtonPress('C');
        }
    }

    function handleButtonPress(buttonText) {
        if (buttonText === 'C') {
            display.textContent = '';
        } else if (buttonText === '=') {
            try {
                display.textContent = eval(display.textContent);
            } catch (error) {
                display.textContent = 'Error';
            }
        } else if (buttonText === '%') {
            display.textContent = parseFloat(display.textContent) / 100;
        } else if (buttonText === '+/-') {
            display.textContent = parseFloat(display.textContent) * -1;
        } else {
            display.textContent += buttonText;
        }
    }
});
