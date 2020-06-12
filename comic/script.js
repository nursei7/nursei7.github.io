/*perform events once the entire file has loaded*/
window.addEventListener("load", function() {
	
	/*sounds on hover in POV1 scene1*/
	let panel4 = document.getElementById("panel4").contentDocument;
	let ring = panel4.getElementById("phone");
	let sRing = document.getElementById("s-ring");
	ring.style.cursor = 'pointer';
	ring.addEventListener('mouseenter', () => {
		sRing.play();
	})
	ring.addEventListener('mouseleave', () => {
		sRing.pause();
	})
	let car = panel4.getElementById("car");
	let sCar = document.getElementById("s-car");
	car.style.cursor = 'pointer';
	car.addEventListener('mouseenter', () => {
		sCar.play();
	})
	car.addEventListener('mouseleave', () => {
		sCar.pause();
	})

	/*POV1 scene2*/
	let panel5 = document.getElementById("panel5").contentDocument;
	let party = panel5.getElementById("disco");
	let sParty = document.getElementById("s-party");
	party.style.cursor = 'pointer';
	party.addEventListener('mouseenter', () => {
		sParty.play();
	})
	party.addEventListener('mouseleave', () => {
		sParty.pause();
	})

	/*POV1 scene4a*/
	let panel7a = document.getElementById("Cpanel1").contentDocument;
	let heart = panel7a.getElementById("heart");
	let sHeart = document.getElementById("s-heart");
	heart.style.cursor = 'pointer';
	heart.addEventListener('mouseenter', () => {
		sHeart.play();
	})
	heart.addEventListener('mouseleave', () => {
		sHeart.pause();
	})

	/*POV1 scene5a*/
	let panel8a = document.getElementById("Cpanel").contentDocument;
	let phone2 = panel8a.getElementById("phone");
	let sPhone2 = document.getElementById("s-phone2");
	phone2.style.cursor = 'pointer';
	phone2.addEventListener('mouseenter', () => {
		sPhone2.play();
	})
	phone2.addEventListener('mouseleave', () => {
		sPhone2.pause();
	})

	/*POV1 scene6a*/
	let panel9a = document.getElementById("Cpanel2").contentDocument;
	let knock2 = panel9a.getElementById("doorknob");
	let sKnock2 = document.getElementById("s-knock2");
	knock2.style.cursor = 'pointer';
	knock2.addEventListener('mouseenter', () => {
		sKnock2.play();
	})
	knock2.addEventListener('mouseleave', () => {
		sKnock2.pause();
	})
	let owl = panel9a.getElementById("moon");
	let sOwl = document.getElementById("s-owl");
	owl.style.cursor = 'pointer';
	owl.addEventListener('mouseenter', () => {
		sOwl.play();
	})
	owl.addEventListener('mouseleave', () => {
		sOwl.pause();
	})

	/*POV1 scene6b*/
	let panel9b = document.getElementById("Dpanel2").contentDocument;
	let parade = panel9b.getElementById("parade");
	let sParade = document.getElementById("s-parade");
	parade.style.cursor = 'pointer';
	parade.addEventListener('mouseenter', () => {
		sParade.play();
	})
	parade.addEventListener('mouseleave', () => {
		sParade.pause();
	})



	/*POV2 scene1*/
	let panel1 = document.getElementById("panel1").contentDocument;
	let radio = panel1.getElementById("radio");
	let sRadio = document.getElementById("s-radio");
	radio.style.cursor = 'pointer';
	radio.addEventListener('mouseenter', () => {
		sRadio.play();
	})
	radio.addEventListener('mouseleave', () => {
		sRadio.pause();
	})

	/*POv2 scene2*/
	let panel2 = document.getElementById("panel2").contentDocument;
	let paper = panel2.getElementById("paper");
	let sPaper = document.getElementById("s-paper");
	paper.style.cursor = 'pointer';
	paper.addEventListener('mouseenter', () => {
		sPaper.play();
	})
	paper.addEventListener('mouseleave', () => {
		sPaper.pause();
	})
	let what = panel2.getElementById("speech");
	let sWhat = document.getElementById("s-what");
	what.style.cursor = 'pointer';
	what.addEventListener('mouseenter', () => {
		sWhat.play();
	})
	what.addEventListener('mouseleave', () => {
		sWhat.pause();
	})

	/*POV2 scene4a*/
	let panel4a = document.getElementById("Apanel1").contentDocument;
	let phone = panel4a.getElementById("phone");
	let sPhone = document.getElementById("s-phone");
	phone.style.cursor = 'pointer';
	phone.addEventListener('mouseenter', () => {
		sPhone.play();
	})
	phone.addEventListener('mouseleave', () => {
		sPhone.pause();
	})

	/*POV2 scene 5a*/
	let panel5a = document.getElementById("Apanel2").contentDocument;
	let knock = panel5a.getElementById("doorknob");
	let sKnock = document.getElementById("s-knock");
	knock.style.cursor = 'pointer';
	knock.addEventListener('mouseenter', () => {
		sKnock.play();
	})
	knock.addEventListener('mouseleave', () => {
		sKnock.pause();
	})

	/*POV2 scene6a*/
	let panel6a = document.getElementById("Apanel3").contentDocument;
	let rain = panel6a.getElementById("raindrops");
	let sRain = document.getElementById("s-rain");
	rain.style.cursor = 'pointer';
	rain.addEventListener('mouseenter', () => {
		sRain.play();
	})
	rain.addEventListener('mouseleave', () => {
		sRain.pause();
	})
	let rain2 = panel6a.getElementById("window");
	rain2.style.cursor = 'pointer';
	rain2.addEventListener('mouseenter', () => {
		sRain.play();
	})
	rain2.addEventListener('mouseleave', () => {
		sRain.pause();
	})
	let dog = panel6a.getElementById("dog");
	let sDog = document.getElementById("s-dog");
	dog.style.cursor = 'pointer';
	dog.addEventListener('mouseenter', () => {
		sDog.play();
	})
	dog.addEventListener('mouseleave', () => {
		sDog.pause();
	})

	/*POV2 scene6b*/
	let panel6b = document.getElementById("Bpanel3").contentDocument;
	let haha = panel6b.getElementById("haha");
	let sHaha = document.getElementById("s-haha");
	haha.style.cursor = 'pointer';
	haha.addEventListener('mouseenter', () => {
		sHaha.play();
	})
	haha.addEventListener('mouseleave', () => {
		sHaha.pause();
	})
	let dog2 = panel6b.getElementById("dog");
	let sDog2 = document.getElementById("s-dog2");
	dog2.style.cursor = 'pointer';
	dog2.addEventListener('mouseenter', () => {
		sDog2.play();
	})
	dog2.addEventListener('mouseleave', () => {
		sDog2.pause();
	})
})
