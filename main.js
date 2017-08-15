//GLOBAL VARS

var costChangeRate = 1.1;

//RED VARS

var redEnergy = 0;
var redEnergyMax = 100;
var redPerSecond = 0;
var redAmount = 0;
var redPerSecondAuto = 0;
var redBuyOneCost = 100;
var redBuyTwoCost = 500;
var redChargeRate = 2;
var redIncreaseChargeCost = 1000; 
var redPerSecondEnergy = 0;
var redEnergyBar = 0;
var redUnlockBlueCost = 7500;

//BLUE VARS

var blueEnergy = 0;
var blueEnergyMax = 100;
var bluePerSecond = 0;
var blueAmount = 0;
var bluePerSecondAuto = 0;
var blueBuyOneCost = 150;
var blueBuyTwoCost = 750;
var blueChargeRate = 1;
var blueIncreaseChargeCost = 2000; 
var bluePerSecondEnergy = 0;
var blueEnergyBar = 0;

window.addEventListener('load',
	function() {
		// document.getElementById("").innerHTML = ;
		document.getElementById("redPerSecond").innerHTML = redPerSecond;
		document.getElementById("redAmount").innerHTML = redAmount;
		document.getElementById("redBuyOneCost").innerHTML = redBuyOneCost;
		document.getElementById("redBuyTwoCost").innerHTML = redBuyTwoCost;
		document.getElementById("redEnergyBarPercent").innerHTML = redEnergyBarPercent;
		document.getElementById("redIncreaseChargeCost").innerHTML = redIncreaseChargeCost;
		document.getElementById("bluePerSecond").innerHTML = bluePerSecond;
		document.getElementById("blueAmount").innerHTML = blueAmount;
		document.getElementById("blueBuyOneCost").innerHTML = blueBuyOneCost;
		document.getElementById("blueBuyTwoCost").innerHTML = blueBuyTwoCost;
		document.getElementById("blueEnergyBarPercent").innerHTML = blueEnergyBarPercent;
		document.getElementById("blueIncreaseChargeCost").innerHTML = blueIncreaseChargeCost;
}, false);

// [[[RED CHARGING/BUYING/ETC]]]

function redCharge() {
	if(redEnergy + redChargeRate <= redEnergyMax) {
		redEnergy = redEnergy + redChargeRate;
	}
	if(redEnergy + redChargeRate >= redEnergyMax) {
		redEnergy = redEnergyMax;
	}
}

function redConvert() {
	if(redEnergy > 0) {
		redPerSecondEnergy = Math.ceil(redEnergyBar / 20);
		redEnergy--;
	} else {
		redPerSecondEnergy = 0;
	}
}

function redBuyOne() {
	if(redAmount >= redBuyOneCost) {
		redAmount = redAmount - redBuyOneCost;
		redPerSecondAuto = redPerSecondAuto + 1;
		redBuyOneCost = Math.round(redBuyOneCost * costChangeRate);
	}
	document.getElementById("redBuyOneCost").innerHTML = redBuyOneCost;
	document.getElementById("redAmount").innerHTML = redAmount;
}

function redBuyTwo() {
	if(redAmount >= redBuyTwoCost) {
		redAmount = redAmount - redBuyTwoCost;
		redPerSecondAuto = redPerSecondAuto + 3;
		redBuyTwoCost = Math.round(redBuyTwoCost * costChangeRate);
	}
	document.getElementById("redBuyTwoCost").innerHTML = redBuyTwoCost;
	document.getElementById("redAmount").innerHTML = redAmount;
}

function redIncreaseCharge() {
	if(blueAmount >= redIncreaseChargeCost) {
		blueAmount = blueAmount - redIncreaseChargeCost;
		redChargeRate++;
		redIncreaseChargeCost = Math.round(redIncreaseChargeCost * costChangeRate);
	}
	document.getElementById("redIncreaseChargeCost").innerHTML = redIncreaseChargeCost;
	document.getElementById("redAmount").innerHTML = redAmount;
}

function calcRedPerSecond() {
	redPerSecond = redPerSecondAuto + redPerSecondEnergy;
	document.getElementById("redPerSecond").innerHTML = redPerSecond;
}

function redUnlockBlue() {
	if(redAmount >= redUnlockBlueCost) {
		redAmount = redAmount - redUnlockBlueCost;
		var x = document.getElementsByClassName("blue");
		var i;
		for (i = 0; i < x.length; i++) {
			x[i].style.opacity = "1";
			x[i].style.pointerEvents = "auto";
		}
	}
}

// [[[BLUE CHARGING/BUYING/ETC]]]

function blueCharge() {
	if(blueEnergy + blueChargeRate <= blueEnergyMax) {
		blueEnergy = blueEnergy + blueChargeRate;
	}
	if(blueEnergy + blueChargeRate >= blueEnergyMax) {
		blueEnergy = blueEnergyMax;
	}
}

function blueConvert() {
	if(blueEnergy > 0) {
		bluePerSecondEnergy = Math.ceil(blueEnergyBar / 20);
		blueEnergy--;
	} else {
		bluePerSecondEnergy = 0;
	}
	// document.getElementById("blueEnergy").innerHTML = blueEnergy;
}

function blueBuyOne() {
	if(blueAmount >= blueBuyOneCost) {
		blueAmount = blueAmount - blueBuyOneCost;
		bluePerSecondAuto = bluePerSecondAuto + 1;
		blueBuyOneCost = Math.round(blueBuyOneCost * costChangeRate);
	}
	document.getElementById("blueBuyOneCost").innerHTML = blueBuyOneCost;
	document.getElementById("blueAmount").innerHTML = blueAmount;
}

function blueBuyTwo() {
	if(blueAmount >= blueBuyTwoCost) {
		blueAmount = blueAmount - blueBuyTwoCost;
		bluePerSecondAuto = bluePerSecondAuto + 3;
		blueBuyTwoCost = Math.round(blueBuyTwoCost * costChangeRate);
	}
	document.getElementById("blueBuyTwoCost").innerHTML = blueBuyTwoCost;
	document.getElementById("blueAmount").innerHTML = blueAmount;
}

function blueIncreaseCharge() {
	if(blueAmount >= blueIncreaseChargeCost) {
		blueAmount = blueAmount - blueIncreaseChargeCost;
		blueChargeRate++;
		blueIncreaseChargeCost = Math.round(blueIncreaseChargeCost * costChangeRate);
	}
	document.getElementById("blueIncreaseChargeCost").innerHTML = blueIncreaseChargeCost;
	document.getElementById("blueAmount").innerHTML = blueAmount;
}

function calcBluePerSecond() {
	bluePerSecond = bluePerSecondAuto + bluePerSecondEnergy;
	document.getElementById("bluePerSecond").innerHTML = bluePerSecond;
}

// For tasks once per second:

window.setInterval(function() {
	redConvert();
	blueConvert();
	redAmount = redAmount + redPerSecond;
	blueAmount = blueAmount + bluePerSecond;
	document.getElementById("redAmount").innerHTML = redAmount;
	document.getElementById("blueAmount").innerHTML = blueAmount;
}, 1000);

// For fast updating tasks:

window.setInterval(function() {
	redEnergyBar = Math.round((redEnergy / redEnergyMax) * 100);
	blueEnergyBar = Math.round((blueEnergy / blueEnergyMax) * 100);
	document.getElementById("redEnergyBar").style.width = redEnergyBar+"%";
	document.getElementById("blueEnergyBar").style.width = blueEnergyBar+"%";
	document.getElementById("redEnergyBarPercent").innerHTML = redEnergyBar;
	document.getElementById("blueEnergyBarPercent").innerHTML = blueEnergyBar;
	calcRedPerSecond();
	calcBluePerSecond();
}, 10);
