//GLOBAL VARS

var costChangeRate = 1.1;

//RED VARS

var redEnergy = 0;
var redEnergyDisplay = redEnergy.toFixed(2);
var redEnergyMax = 100;
var redPerSecond = 0;
var redAmount = 0;

var redConversionUpgradeCost = 100;
var redConversionUpgradeCount = 0;

var redDecayRateDownCost = 50;
var redDecayRateDownCount = 0;
var redDecayRate = 3, redDecayRateDisplay = redDecayRate.toFixed(2);

var redChargeRate = 3, redChargeRateDisplay = redChargeRate.toFixed(2);
var redConversionRate = 0;

var redIncreaseChargeCost = 1000;
var redIncreaseChargeCount = 0; 

var redEnergyBar = 0;
var redUnlockBlueCost = 7500;

//BLUE VARS

var blueEnergy = 0;
var blueEnergyDisplay = Math.round(blueEnergy);
var blueEnergyMax = 50;
var bluePerSecond = 0;
var blueAmount = 0;

var blueConversionUpgradeCost = 200;
var blueConversionUpgradeCount = 0;

var blueDecayRateDownCost = 1000;
var blueDecayRateDownCount = 0;
var blueDecayRate = 1.5, blueDecayRateDisplay = blueDecayRate.toFixed(2);

var blueChargeRate = 1.5, blueChargeRateDisplay = blueChargeRate.toFixed(2);
var blueConversionRate = 0;

var blueIncreaseChargeCost = 2500;
var blueIncreaseChargeCount = 0;  

var blueEnergyBar = 0;
var blueUnlockGreenCost = 50000;


//GREEN VARS

var greenEnergy = 0;
var greenEnergyDisplay = Math.round(greenEnergy);
var greenEnergyMax = 200;
var greenPerSecond = 0;
var greenAmount = 0;

var greenConversionUpgradeCost = 300;
var greenConversionUpgradeCount = 0;

var greenDecayRateDownCost = 5000;
var greenDecayRateDownCount = 0;
var greenDecayRate = 1, greenDecayRateDisplay = greenDecayRate.toFixed(2);

var greenChargeRate = 3, greenChargeRateDisplay = greenChargeRate.toFixed(2);
var greenConversionRate = 0;

var greenIncreaseChargeCost = 1000;
var greenIncreaseChargeCount = 0;  

var greenEnergyBar = 0;
var greenUnlockYellowCost = 500000;

window.addEventListener('load',
	function() {
		document.getElementById("redPerSecond").innerHTML = redPerSecond;
		document.getElementById("redEnergyDisplay").innerHTML = redEnergyDisplay;
		document.getElementById("redAmount").innerHTML = redAmount;
		document.getElementById("redConversionUpgradeCost").innerHTML = redConversionUpgradeCost;
		document.getElementById("redDecayRateDownCost").innerHTML = redDecayRateDownCost;
		document.getElementById("redEnergyBarPercent").innerHTML = redEnergyBarPercent;
		document.getElementById("redIncreaseChargeCost").innerHTML = redIncreaseChargeCost;
		document.getElementById("redIncreaseChargeCount").innerHTML = redIncreaseChargeCount;
		document.getElementById("redChargeRate").innerHTML = redChargeRateDisplay;
		document.getElementById("redDecayRate").innerHTML = redDecayRateDisplay;
		document.getElementById("redEnergyMax").innerHTML = redEnergyMax;
		document.getElementById("redUnlockBlueCost").innerHTML = redUnlockBlueCost

		document.getElementById("bluePerSecond").innerHTML = bluePerSecond;
		document.getElementById("blueEnergyDisplay").innerHTML = blueEnergyDisplay;
		document.getElementById("blueAmount").innerHTML = blueAmount;
		document.getElementById("blueConversionUpgradeCost").innerHTML = blueConversionUpgradeCost;
		document.getElementById("blueDecayRateDownCost").innerHTML = blueDecayRateDownCost;
		document.getElementById("blueEnergyBarPercent").innerHTML = blueEnergyBarPercent;
		document.getElementById("blueIncreaseChargeCost").innerHTML = blueIncreaseChargeCost;
		document.getElementById("blueIncreaseChargeCount").innerHTML = blueIncreaseChargeCount;
		document.getElementById("blueChargeRate").innerHTML = blueChargeRateDisplay;
		document.getElementById("blueDecayRate").innerHTML = blueDecayRateDisplay;
		document.getElementById("blueEnergyMax").innerHTML = blueEnergyMax;
		document.getElementById("blueUnlockGreenCost").innerHTML = blueUnlockGreenCost;

		document.getElementById("greenPerSecond").innerHTML = greenPerSecond;
		document.getElementById("greenEnergyDisplay").innerHTML = greenEnergyDisplay;
		document.getElementById("greenAmount").innerHTML = greenAmount;
		document.getElementById("greenConversionUpgradeCost").innerHTML = greenConversionUpgradeCost;
		document.getElementById("greenDecayRateDownCost").innerHTML = greenDecayRateDownCost;
		document.getElementById("greenEnergyBarPercent").innerHTML = greenEnergyBarPercent;
		document.getElementById("greenIncreaseChargeCost").innerHTML = greenIncreaseChargeCost;
		document.getElementById("greenIncreaseChargeCost").innterHTML = greenIncreaseChargeCount;
		document.getElementById("greenChargeRate").innerHTML = greenChargeRateDisplay;
		document.getElementById("greenDecayRate").innerHTML = greenDecayRateDisplay;
		document.getElementById("greenEnergyMax").innerHTML = greenEnergyMax;
		document.getElementById("greenUnlockYellowCost").innerHTML = greenUnlockYellowCost;
}, false);

// global functions

function calcPerSecond() {
	redPerSecond = redConversionRate;
	bluePerSecond = blueConversionRate;
	greenPerSecond = greenConversionRate;
}

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
		redConversionRate = Math.ceil(redEnergyBar / 20) * (redConversionUpgradeCount + 1);
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
		redConversionUpgradeCount++;
	}
}

function redIncreaseCharge() {
	if(blueAmount >= redIncreaseChargeCost) {
		blueAmount = blueAmount - redIncreaseChargeCost;
		redChargeRate = Math.round((redChargeRate + 0.15) * 100) / 100;
		redIncreaseChargeCost = Math.round(redIncreaseChargeCost * costChangeRate);
		redChargeRateDisplay = redChargeRate.toFixed(2);
		redIncreaseChargeCount++;
	}
}

function redDecayRateDown() {
	if(greenAmount >= redDecayRateDownCost) {
		greenAmount = greenAmount - redDecayRateDownCost;
		redDecayRateDownCost = Math.round(redDecayRateDownCost * costChangeRate);
		redDecayRateDownCount++;
		redDecayRate = Math.round((redDecayRate * 0.95) * 100) / 100;
		redDecayRateDisplay = redDecayRate.toFixed(2)
	}
}

function redUnlockBlue() {
	if(redAmount >= redUnlockBlueCost) {
		redAmount = redAmount - redUnlockBlueCost;
		var x = document.getElementsByClassName("blueHidden");
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
		blueConversionRate = Math.ceil(blueEnergyBar / 20) * (blueConversionUpgradeCount + 1);
		blueEnergy = Math.max(blueEnergy - blueDecayRate, 0);
	}
	else {
		blueConversionRate = 0;
	}
}

function blueConversionUpgrade() {
	if(redAmount >= blueConversionUpgradeCost) {
		redAmount = redAmount - blueConversionUpgradeCost;
		blueConversionUpgradeCost = Math.round(blueConversionUpgradeCost * costChangeRate);
		blueConversionUpgradeCount++;
	}
}

function blueIncreaseCharge() {
	if(blueAmount >= blueIncreaseChargeCost) {
		blueAmount = blueAmount - blueIncreaseChargeCost;
		blueChargeRate = Math.round((blueChargeRate + 0.15) * 100) / 100;
		blueIncreaseChargeCost = Math.round(blueIncreaseChargeCost * costChangeRate);
		blueChargeRateDisplay = blueChargeRate.toFixed(2);
		blueIncreaseChargeCount++;
	}
}

function blueDecayRateDown() {
	if(greenAmount >= blueDecayRateDownCost) {
		greenAmount = greenAmount - blueDecayRateDownCost;
		blueDecayRateDownCost = Math.round(blueDecayRateDownCost * costChangeRate);
		blueDecayRateDownCount++;
		blueDecayRate = Math.round((blueDecayRate * 0.95) * 100) / 100;
		blueDecayRateDisplay = blueDecayRate.toFixed(2)
	}
}

function blueUnlockGreen() {
	if(blueAmount >= blueUnlockGreenCost) {
		blueAmount = blueAmount - blueUnlockGreenCost;
		var x = document.getElementsByClassName("greenHidden");
		var i;
		for (i = 0; i < x.length; i++) {
			x[i].style.opacity = "1";
			x[i].style.pointerEvents = "auto";
		document.getElementById("greenUnlock").className = "oneTime";
		}
	}
}

// [[[GREEN CHARGING/BUYING/ETC]]]

function greenCharge() {
	if(greenEnergy + greenChargeRate <= greenEnergyMax) {
		greenEnergy = greenEnergy + greenChargeRate;
	}
	if(greenEnergy + greenChargeRate >= greenEnergyMax) {
		greenEnergy = greenEnergyMax;
	}
}

function greenConvert() {
	if(greenEnergy > 0) {
		greenConversionRate = Math.ceil(greenEnergyBar / 20) * (greenConversionUpgradeCount + 1);
		greenEnergy = Math.max(greenEnergy - greenDecayRate, 0);
	}
	else {
		greenConversionRate = 0;
	}
}

function greenConversionUpgrade() {
	if(redAmount >= greenConversionUpgradeCost) {
		redAmount = redAmount - greenConversionUpgradeCost;
		greenConversionUpgradeCost = Math.round(greenConversionUpgradeCost * costChangeRate);
		greenConversionUpgradeCount++;
	}
}

function greenIncreaseCharge() {
	if(blueAmount >= greenIncreaseChargeCost) {
		blueAmount = blueAmount - greenIncreaseChargeCost;
		greenChargeRate = Math.round((greenChargeRate + 0.15) * 100) / 100;
		greenIncreaseChargeCost = Math.round(greenIncreaseChargeCost * costChangeRate);
		greenChargeRateDisplay = greenChargeRate.toFixed(2);
		greenIncreaseChargeCount++;
	}
}

function greenDecayRateDown() {
	if(greenAmount >= greenDecayRateDownCost) {
		greenAmount = greenAmount - greenDecayRateDownCost;
		greenDecayRateDownCost = Math.round(greenDecayRateDownCost * costChangeRate);
		greenDecayRateDownCount++;
		greenDecayRate = Math.round((greenDecayRate * 0.95) * 100) / 100;
		greenDecayRateDisplay = greenDecayRate.toFixed(2)
	}
}

// write all variables to the page periodically
window.setInterval(function () {
	document.getElementById("redPerSecond").innerHTML = redPerSecond;
	document.getElementById("redAmount").innerHTML = redAmount;
	document.getElementById("redEnergyDisplay").innerHTML = redEnergyDisplay;
	document.getElementById("redConversionUpgradeCost").innerHTML = redConversionUpgradeCost;
	document.getElementById("redConversionUpgradeCount").innerHTML = redConversionUpgradeCount;
	document.getElementById("redDecayRateDownCost").innerHTML = redDecayRateDownCost;
	document.getElementById("redDecayRateDownCount").innerHTML = redDecayRateDownCount;
	document.getElementById("redEnergyBarPercent").innerHTML = redEnergyBar;
	document.getElementById("redIncreaseChargeCost").innerHTML = redIncreaseChargeCost;
	document.getElementById("redIncreaseChargeCount").innerHTML = redIncreaseChargeCount;
	document.getElementById("redChargeRate").innerHTML = redChargeRateDisplay;
	document.getElementById("redDecayRate").innerHTML = redDecayRateDisplay;
	document.getElementById("redUnlockBlueCost").innerHTML = redUnlockBlueCost
	document.getElementById("bluePerSecond").innerHTML = bluePerSecond;
	document.getElementById("blueAmount").innerHTML = blueAmount;
	document.getElementById("blueEnergyDisplay").innerHTML = blueEnergyDisplay;
	document.getElementById("blueConversionUpgradeCost").innerHTML = blueConversionUpgradeCost;
	document.getElementById("blueConversionUpgradeCount").innerHTML = blueConversionUpgradeCount;
	document.getElementById("blueDecayRateDownCost").innerHTML = blueDecayRateDownCost;
	document.getElementById("blueEnergyBarPercent").innerHTML = blueEnergyBar;
	document.getElementById("blueIncreaseChargeCost").innerHTML = blueIncreaseChargeCost;
	document.getElementById("blueIncreaseChargeCount").innerHTML = blueIncreaseChargeCount;
	document.getElementById("blueChargeRate").innerHTML = blueChargeRateDisplay;
	document.getElementById("blueDecayRate").innerHTML = blueDecayRateDisplay;
	document.getElementById("blueDecayRateDownCount").innerHTML = blueDecayRateDownCount;
	document.getElementById("blueUnlockGreenCost").innerHTML = blueUnlockGreenCost;
	document.getElementById("greenPerSecond").innerHTML = greenPerSecond;
	document.getElementById("greenAmount").innerHTML = greenAmount;
	document.getElementById("greenEnergyDisplay").innerHTML = greenEnergyDisplay;
	document.getElementById("greenConversionUpgradeCost").innerHTML = greenConversionUpgradeCost;
	document.getElementById("greenConversionUpgradeCount").innerHTML = greenConversionUpgradeCount;
	document.getElementById("greenDecayRateDownCost").innerHTML = greenDecayRateDownCost;
	document.getElementById("greenDecayRateDownCount").innerHTML = greenDecayRateDownCount;
	document.getElementById("greenEnergyBarPercent").innerHTML = greenEnergyBar;
	document.getElementById("greenIncreaseChargeCost").innerHTML = greenIncreaseChargeCost;
	document.getElementById("greenIncreaseChargeCount").innerHTML = greenIncreaseChargeCount;
	document.getElementById("greenChargeRate").innerHTML = greenChargeRateDisplay;
	document.getElementById("greenDecayRate").innerHTML = greenDecayRateDisplay;
	document.getElementById("greenUnlockYellowCost").innerHTML = greenUnlockYellowCost;

	document.getElementById("redEnergyBar").style.width = redEnergyBar+"%";
	document.getElementById("blueEnergyBar").style.width = blueEnergyBar+"%";
	document.getElementById("greenEnergyBar").style.width = greenEnergyBar+"%";

}, 10);


// For tasks once per second:

window.setInterval(function() {
	redConvert();
	blueConvert();
	greenConvert();
	redAmount = redAmount + redPerSecond;
	blueAmount = blueAmount + bluePerSecond;
	greenAmount = greenAmount + greenPerSecond;
}, 1000);

// For fast updating tasks:

window.setInterval(function() {
	redEnergyBar = Math.round((redEnergy / redEnergyMax) * 100);
	blueEnergyBar = Math.round((blueEnergy / blueEnergyMax) * 100);
	greenEnergyBar = Math.round((greenEnergy / greenEnergyMax) * 100);
	redEnergyDisplay = redEnergy.toFixed(2);
	blueEnergyDisplay = blueEnergy.toFixed(2);
	greenEnergyDisplay = greenEnergy.toFixed(2);
	calcPerSecond();
}, 10);