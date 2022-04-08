(() => {
  const badges = document.querySelectorAll(".badgeContainer"),
				theBanner = document.querySelector("#bannerImages"),
				textInfo = document.querySelector(".textEl");

  const coolaText = [
    `COOLA always strives to create a healthy beer experience that realizes a delightful and cool lifestyle. We are ALWAYS trying to develop organic products that you enjoy drinking.`,

    `Did you happen to know? Every time you order our product, you're helping our local farmers and giving some funding to support our agricultural communities! That is, you can enjoy our organic beer and be the sponsor of our society!`,

    `If you join the COOLA club and become a special member: COOLA, you can be the first to get many chances for our events, news, and promotion!`,

    `BE FIRST! You can get all the news about our COOLA first.
     GET VARIOUS CHANCES! You can get a 5% discount coupon once a month.
     PARTICIPATE IN MANY EVENTS! If you have participated in the event at least once, you will get a 10% discount.
     GET CUOPONS! If you collect ten stamps, you get a discount of 3 dollars. `,
  ];

  //function go here
	function animateBanners() {
		theBanner.style.right = `${this.dataset.offset * 300}px`;

    getHouseName(this.dataset.offset);
  }

	function getHouseName(index) {
		textInfo.textContent = coolaText[index];
	}

	// add event handling
	badges.forEach(badge => badge.addEventListener('click', animateBanners));

	animateBanners.call(badges[0]);


})();
