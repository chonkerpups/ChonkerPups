function closeModal(target) {
  document.getElementById(target + "-modal").style.display = "none";
  document.body.style.overflow="scroll";
}

function openModal(target) {
  document.getElementById(target + "-modal").style.display = "flex";
  document.body.style.overflow="hidden";
}