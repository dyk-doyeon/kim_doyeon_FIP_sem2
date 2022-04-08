(() => {
  // collect the elements we need to interact with
  const videoButton = document.querySelectorAll("#watchButton"),
        videoBox = document.querySelector(".lightbox"),
        promoVideo = videoBox.querySelector("video"),
        closeBtn = videoBox.querySelector(".close");


  //function go here
  function popLightBox() {
    videoBox.classList.add("show-lightbox");
    promoVideo.load();
    // debugger;

    // grab the right video, load it and play it
    promoVideo.play();
  }

  function closeLightBox() {
    videoBox.classList.remove("show-lightbox");
    promoVideo.pause();
    promoVideo.currentTime = 0;
  }


  // add event handling
  videoButton.forEach(videoButtons => videoButtons.addEventListener("click", popLightBox));

  // close the lightbox with the video reaches its end
  promoVideo.addEventListener("ended", closeLightBox);
  closeBtn.addEventListener("click", closeLightBox);


})();
