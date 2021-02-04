var mainApp = {};

(function(){
var uid = null;
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.
          uid = user.uid;
        } else {
            uid = null;
            window.location.replace("unauthenticatedMain.html");
        }
      });
    
    function logOut(){
        firebase.auth().signOut();
    }

    mainApp.logOut = logOut;
})()

let btnAdd = document.querySelector('button')
let table = document.querySelector('table')

let shippedInput = document.querySelector('#date_shipped');
let arrivalInput = document.querySelector('#date_arrival');
let fromInput = document.querySelector('#from');
let toInput = document.querySelector('#to');
let quantityInput = document.querySelector('#quantity');

btnAdd.addEventListener('click',() => {
  let date_shipped = shippedInput.value;
  let date_arrival = arrivalInput.value;
  let from = fromInput.value;
  let to = toInput.value;
  let quantity = quantityInput.value;
  
  let template = `
                <tr>
                  <td>${date_shipped}</td>
                  <td>${date_arrival}</td>
                  <td>${from}</td>
                  <td>${to}</td>
                  <td>${quantity}</td>
                </tr>`;
  table.innerHTML += template; 
});