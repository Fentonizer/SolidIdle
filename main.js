//GLOBAL VARS

var costChangeRate = 1.1;

//RED VARS

var redEnergy = 0;
var redEnergyMax = 100;
var redPerSecond = 0;
var redAmount = 0;

var redConversionUpgradeCost = 100;
var redBuildingOneCount = 0;
var redBuyTwoCost = 500;
var redBuildingTwoCount = 0;
var redChargeRate = 1, redChargeRateDisplay = redChargeRate.toFixed(1);
var redConversionRate = 0;
var redDecayRate = 3, redDecayRateDisplay = redDecayRate.toFixed(1);
var redIncreaseChargeCost = 1000; 

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
		document.getElementById("redConversionUpgradeCost").innerHTML = redConversionUpgradeCost;
		document.getElementById("redBuyTwoCost").innerHTML = redBuyTwoCost;
		document.getElementById("redEnergyBarPercent").innerHTML = redEnergyBarPercent;
		document.getElementById("redIncreaseChargeCost").innerHTML = redIncreaseChargeCost;
		document.getElementById("redChargeRate").innerHTML = redChargeRateDisplay;
		document.getElementById("redDecayRate").innerHTML = redDecayRateDisplay;
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
		redConversionRate = Math.ceil(redEnergyBar / 20) * (redBuildingOneCount + 1);
		redEnergy = Math.max(redEnergy - redDecayRate, 0);
	}
	else {
		redConversionRate = 0;
	}
}

function redConversionUpgrade() {
	if(redAmount >= redConversionUpgradeCost) {
		redAmount = redAmount - redConversionUpgradeCost;
		redConversionUpgradeCost = Math.round(redConversionUpgradeCost * costChangeRate);
		redBuildingOneCount++;
		document.getElementById("redConversionUpgradeCost").innerHTML = redConversionUpgradeCost;
		document.getElementById("redAmount").innerHTML = redAmount;
		document.getElementById("redBuildingOneCount").innerHTML = redBuildingOneCount;
	}
}

function redBuyTwo() {
	if(redAmount >= redBuyTwoCost) {
		redAmount = redAmount - redBuyTwoCost;
		redBuyTwoCost = Math.round(redBuyTwoCost * costChangeRate);
		redBuildingTwoCount++;
		redDecayRate = Math.round((redDecayRate * 0.95) * 100) / 100;
		document.getElementById("redBuyTwoCost").innerHTML = redBuyTwoCost;
		document.getElementById("redAmount").innerHTML = redAmount;
		document.getElementById("redBuildingTwoCount").innerHTML = redBuildingTwoCount;
		document.getElementById("redDecayRate").innerHTML = redDecayRateDisplay;
	}
}

function redIncreaseCharge() {
	if(blueAmount >= redIncreaseChargeCost) {
		blueAmount = blueAmount - redIncreaseChargeCost;
		redChargeRate = Math.round((redChargeRate + 0.2) * 100) / 100;
		redIncreaseChargeCost = Math.round(redIncreaseChargeCost * costChangeRate);
		document.getElementById("redIncreaseChargeCost").innerHTML = redIncreaseChargeCost;
		document.getElementById("redAmount").innerHTML = redAmount;
		document.getElementById("redChargeRate").innerHTML = redChargeRateDisplay;
	}
}

function calcRedPerSecond() {
	redPerSecond = redConversionRate;
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
		document.getElementById("blueUnlock").className = "oneTime";
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
		document.getElementById("blueBuyOneCost").innerHTML = blueBuyOneCost;
		document.getElementById("blueAmount").innerHTML = blueAmount;
	}
}

function blueBuyTwo() {
	if(blueAmount >= blueBuyTwoCost) {
		blueAmount = blueAmount - blueBuyTwoCost;
		bluePerSecondAuto = bluePerSecondAuto + 3;
		blueBuyTwoCost = Math.round(blueBuyTwoCost * costChangeRate);
		document.getElementById("blueBuyTwoCost").innerHTML = blueBuyTwoCost;
		document.getElementById("blueAmount").innerHTML = blueAmount;
	}
}

function blueIncreaseCharge() {
	if(blueAmount >= blueIncreaseChargeCost) {
		blueAmount = blueAmount - blueIncreaseChargeCost;
		blueChargeRate++;
		blueIncreaseChargeCost = Math.round(blueIncreaseChargeCost * costChangeRate);
		document.getElementById("blueIncreaseChargeCost").innerHTML = blueIncreaseChargeCost;
		document.getElementById("blueAmount").innerHTML = blueAmount;
	}
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
