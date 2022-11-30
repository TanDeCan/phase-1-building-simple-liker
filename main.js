// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const hearts = document.getElementsByClassName('like-glyph')
Array.from(hearts).forEach((el) => {
  el.addEventListener('click', (e) =>{
    mimicServerCall()
    .then(() => {
      color(e.target)
    })
    .catch(() => {
      displayError()
    })
  })
})

function color(ele) {
  if(ele.textContent === EMPTY_HEART) {
    ele.textContent = FULL_HEART
    ele.className = 'activated-heart'
  } else {
    ele.textContent = EMPTY_HEART;
    ele.classList.remove('activated-heart')
  }
  //check text content either empty or full (const)
  //remove full, change text content, remove activated.class
  //activate empty, change text content, .activate class
  // if else statement
}

function displayError(elem){
  const modal = document.querySelector('#modal')
  modal.classList.remove('hidden')
  setTimeout(() => {
    modal.classList.add('hidden')
  }, 3000)
  //from className hidden from modal 
  // setTimeout(3)
}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
