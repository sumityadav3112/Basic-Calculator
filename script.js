let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';
let solValue = '';

for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        if (buttonText == 'X') {
            buttonText = '*';
            screenValue += buttonText;
            solValue += ' X '
            screen.value = solValue;
        }
        else if (buttonText == 'X^2') {
            buttonText = '**2';           //give operator for calculation
            screenValue += buttonText;    //store value for calculation
            solValue += '^2'              //store value to display
            screen.value = solValue;      // to display value
        }
        else if (buttonText == 'pow') {
            buttonText = '**';
            screenValue += buttonText;
            solValue += '^'
            screen.value = solValue;
        }

        else if (buttonText == 'sqrt') {
            screenValue =Math.sqrt(screenValue);
            solValue += '  ^1/2'
            screen.value = solValue;
        }
        
        else if (buttonText == 'AC') {
            screenValue = "";
            solValue = ''
            screen.value = solValue;
        }
        else if (buttonText == '=') {
            screen.value = eval(screenValue);
        }
        else if (buttonText == 'DEL') {
            screenValue=screen.value.slice(0,-1);
            solValue = screen.value.slice(0,-1);
            screen.value = solValue;
        }
        else {
            screenValue += buttonText;
            solValue += buttonText;
            screen.value = solValue;
        }

    })
}

