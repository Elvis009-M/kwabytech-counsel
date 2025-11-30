
/*  -----    MAIN PAGE TEMPLATE      ------*/


const body = document.querySelector('body') ;
const buttonSwitch = document.querySelector('#mode-switch'); 



/*  -----   CODE FOR DAY/NIGHT MODE    -----   */

buttonSwitch.addEventListener('click', () => {
 
 modeSwitch() ;
})


const modeSwitch = () => {
  if(buttonSwitch.classList == 'day' ) {
    body.style.backgroundColor = 'white' ;
    body.style.color = 'black' ;
    buttonSwitch.classList.remove('day') ;
    buttonSwitch.classList.add('night') ;
    buttonSwitch.style.animation = 'go 1s 1s 2' ;
  }
  else if(buttonSwitch.classList == 'night' ) {
    body.style.backgroundColor = 'black' ;
    body.style.color = 'white' ;
    buttonSwitch.classList.remove('night') ;
    buttonSwitch.classList.add('day') ;
    buttonSwitch.style.animation = 'go 1s 1s 2' ;
  }
 buttonSwitch.style.animation = `go 1s ease-out 1s ` ;
}













async function action () {

    try {
        
        const response = await fetch( 'https://api.adviceslip.com/advice') 

        if(!response.ok) {
            throw new Error("Could not fetch resource");
        }

        const data = await response.json();
        const adviceContent = data.slip.advice
        const adviceSpace = document.querySelector('.quotes-container p')
        adviceSpace.innerHTML = adviceContent

    }

    catch (error) {
        console.error(error) ;
    }



}