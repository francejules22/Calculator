

let displayInput = document.getElementById('calc-display');

//Use Array.from function able to take html collection into array
let calcBtn = Array.from(document.getElementsByClassName('calc-btn'));

//Use map function and apply click even listener to the button in array 
calcBtn.map( button => {
    button.addEventListener('click', (e) => {
        //Using switch statement that check the inner text created 
        switch(e.target.innerText){
            case 'C':
                displayInput.innerText = '';
                break;
            //Using eval method I used this to achieve the functionality in which it takes the string as parameter
            case '=':
                try{
                    displayInput.innerText = eval(displayInput.innerText);
                } catch {
                    displayInput.innerText = "Error!"
                }
                break;
            //Back arrow will clear the last entered character of the user which able to use slice function to remove the last character from display string
            case '←':
                if (displayInput.innerText){
                   displayInput.innerText = displayInput.innerText.slice(0, -1);
                }
                break;
            default:
                displayInput.innerText += e.target.innerText;
        }
    });
});