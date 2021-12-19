(function whitepaperLoad(){
  if (window.location.href.indexOf('whitepaper') !==  -1) {
    document.getElementById("whitepaper" + "-modal").style.display = "flex";
    document.body.style.overflow="hidden";
  }  
})()

function closeModal(target) {
  document.getElementById(target + "-modal").style.display = "none";
  document.body.style.overflow="scroll";
}

function openModal(target) {
  document.getElementById(target + "-modal").style.display = "flex";
  document.body.style.overflow="hidden";
}

