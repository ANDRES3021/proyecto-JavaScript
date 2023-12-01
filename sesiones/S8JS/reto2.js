var modal = document.getElementById("modal");

var button = document.getElementsByTagName('button')[0];
var modalImage = document.getElementById("modal-image");
var close = document.getElementsByClassName("close")[0];

button.addEventListener('click', function() {
  modal.style.display = "block";
  modalImage.src = 'https://media.istockphoto.com/id/1130116320/photo/jaime-rook-paipa-boyaca-colombia-main-park.jpg?s=612x612&w=0&k=20&c=TpffaHaUbVDdguhfLHlYYnxwv_sY_MLCEU-zpASJtSc=';
})

close.addEventListener('click', function() {
  modal.style.display = "none";
})