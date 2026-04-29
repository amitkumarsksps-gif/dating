document.addEventListener("DOMContentLoaded", function () {

  function openMenu(){
    document.getElementById("sidebar").style.left = "0";
    document.getElementById("overlay").style.display = "block";
  }

  function closeMenu(){
    document.getElementById("sidebar").style.left = "-260px";
    document.getElementById("overlay").style.display = "none";
  }

  // 🔥 wait for header load
  setTimeout(() => {

    const menuBtn = document.querySelector(".menu-btn");
    const overlay = document.getElementById("overlay");

    if(menuBtn){
      menuBtn.addEventListener("click", openMenu);
    }

    if(overlay){
      overlay.addEventListener("click", closeMenu);
    }

  }, 300); // small delay to ensure header loaded

});