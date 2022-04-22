let toastTrigger = document.getElementById('liveToastBtn')
let toastLiveExample = document.getElementById('liveToast')
if (toastTrigger) {
  toastTrigger.addEventListener('click', function () {
    let toast = new bootstrap.Toast(toastLiveExample)

    toast.show()
  })
}

//Toasts code made by Franklin
let toastContainer = document.getElementById('ToastContainer');
let toastTemplate = document.getElementById('liveToast');

//Styles
let styles = [];

let topLeftClass = ["top-0", "start-0"];
let topCenterClass = ["top-0", "start-50", "translate-middle-x"];
let topRightClass = ["top-0", "end-0"];
let centerLeftClass = ["top-50", "start-0","translate-middle-y"];
let centerClass = ["top-50", "start-50","translate-middle"];
let centerRightClass = ["top-50", "end-0", "translate-middle-y"];
let bottomLeftClass = ["bottom-0", "start-0"];
let bottomCenterClass = ["bottom-0", "start-50", "translate-middle-x"];
let bottomRightClass = ["bottom-0", "end-0"];

styles.push(topLeftClass);
styles.push(topCenterClass);
styles.push(topRightClass);
styles.push(centerLeftClass);
styles.push(centerClass);
styles.push(centerRightClass);
styles.push(bottomLeftClass);
styles.push(bottomCenterClass);
styles.push(bottomRightClass);

//Buttons
let buttons = [];

let btnTopLeft = document.getElementById('topLeft');
let btnTopCenter = document.getElementById('topCenter');
let btnTopRight = document.getElementById('topRight');
let btnCenterLeft = document.getElementById('centerLeft');
let btnCenterCenter = document.getElementById('center');
let btnCenterRight = document.getElementById('centerRight');
let btnBottomLeft = document.getElementById('bottomLeft');
let btnBottomCenter = document.getElementById('bottomCenter');
let btnBottomRight = document.getElementById('bottomRight');

buttons.push(btnTopLeft);
buttons.push(btnTopCenter);
buttons.push(btnTopRight);
buttons.push(btnCenterLeft);
buttons.push(btnCenterCenter);
buttons.push(btnCenterRight);
buttons.push(btnBottomLeft);
buttons.push(btnBottomCenter);
buttons.push(btnBottomRight);

//Function to dislay toasts 
function displayToast(style) {
  let container = document.getElementById('ToastContainer');
  container.removeAttribute('class');
  container.setAttribute('class', 'position-fixed p-3')
  style.map(clase => container.classList.add(clase));

  let template = toastTemplate;
  let toast = new bootstrap.Toast(template);
  toast.show()
}

//Initialize Event Listeners 
buttons.map((button,index) => button.addEventListener('click', () => displayToast(styles[index])));
