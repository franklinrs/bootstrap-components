let toastTrigger = document.getElementById('liveToastBtn')
let toastLiveExample = document.getElementById('liveToast')
if (toastTrigger) {
  toastTrigger.addEventListener('click', function () {
    let toast = new bootstrap.Toast(toastLiveExample)

    toast.show()
  })
}