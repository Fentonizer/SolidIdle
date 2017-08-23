//GLOBAL VARS

var costChangeRate = 1.1;

//RED VARS

var redEnergy = 0;
var redEnergyMax = 100;
var redPerSecond = 0;
var redAmount = 0;

var redConversionUpgradeCost = 100;
var redConversionUpgradeCount = 0;

var redDecayRateDownCost = 500;
var redDecayRateDownCount = 0;
var redDecayRate = 3, redDecayRateDisplay = redDecayRate.toFixed(2);

var redChargeRate = 1, redChargeRateDisplay = redChargeRate.toFixed(2);
var redConversionRate = 0;

var redIncreaseChargeCost = 1000; 

var redEnergyBar = 0;
var redUnlockBlueCost = 7500;

//BLUE VARS

var blueEnergy = 0;
var blueEnergyMax = 100;
var bluePerSecond = 0;
var blueAmount = 0;

var blueConversionUpgradeCost = 100;
var blueConversionUpgradeCount = 0;

var blueDecayRateDownCost = 500;
var blueDecayRateDownCount = 0;
var blueDecayRate = 3, blueDecayRateDisplay = blueDecayRate.toFixed(2);

var blueChargeRate = 1, blueChargeRateDisplay = blueChargeRate.toFixed(2);
var blueConversionRate = 0;

var blueIncreaseChargeCost = 1000; 

var blueEnergyBar = 0;
var blueUnlockGreenCost = 75000;


//GREEN VARS

var greenAmount = 0;

window.addEventListener('load',
	function() {
		// document.getElementById("redUnlockBlueCost").innerHTML = redUnlockBlueCost;
		document.getElementById("redPerSecond").innerHTML = redPerSecond;
		document.getElementById("redAmount").innerHTML = redAmount;
		document.getElementById("redConversionUpgradeCost").innerHTML = redConversionUpgradeCost;
		document.getElementById("redDecayRateDownCost").innerHTML = redDecayRateDownCost;
		document.getElementById("redEnergyBarPercent").innerHTML = redEnergyBarPercent;
		document.getElementById("redIncreaseChargeCost").innerHTML = redIncreaseChargeCost;
		document.getElementById("redChargeRate").innerHTML = redChargeRateDisplay;
		document.getElementById("redDecayRate").innerHTML = redDecayRateDisplay;
		document.getElementById("redUnlockBlueCost").innerHTML = redUnlockBlueCost

		document.getElementById("bluePerSecond").innerHTML = bluePerSecond;
		document.getElementById("blueAmount").innerHTML = blueAmount;
		document.getElementById("blueConversionUpgradeCost").innerHTML = blueConversionUpgradeCost;
		document.getElementById("blueDecayRateDownCost").innerHTML = blueDecayRateDownCost;
		document.getElementById("blueEnergyBarPercent").innerHTML = blueEnergyBarPercent;
		document.getElementById("blueIncreaseChargeCost").innerHTML = blueIncreaseChargeCost;
		document.getElementById("blueChargeRate").innerHTML = blueChargeRateDisplay;
		document.getElementById("blueDecayRate").innerHTML = blueDecayRateDisplay;
		document.getElementById("blueUnlockGreenCost").innerHTML = blueUnlockGreenCost;
		
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
		document.getElementById("redConversionUpgradeCost").innerHTML = redConversionUpgradeCost;
		document.getElementById("redAmount").innerHTML = redAmount;
		document.getElementById("redConversionUpgradeCount").innerHTML = redConversionUpgradeCount;
	}
}

function redIncreaseCharge() {
	if(blueAmount >= redIncreaseChargeCost) {
		blueAmount = blueAmount - redIncreaseChargeCost;
		redChargeRate = Math.round((redChargeRate + 0.15) * 100) / 100;
		redIncreaseChargeCost = Math.round(redIncreaseChargeCost * costChangeRate);
		redChargeRateDisplay = redChargeRate.toFixed(2);
		document.getElementById("redIncreaseChargeCost").innerHTML = redIncreaseChargeCost;
		document.getElementById("blueAmount").innerHTML = blueAmount;
		document.getElementById("redChargeRate").innerHTML = redChargeRateDisplay;
	}
}

function redDecayRateDown() {
	if(greenAmount >= redDecayRateDownCost) {
		greenAmount = greenAmount - redDecayRateDownCost;
		redDecayRateDownCost = Math.round(redDecayRateDownCost * costChangeRate);
		redDecayRateDownCount++;
		redDecayRate = Math.round((redDecayRate * 0.95) * 100) / 100;
		redDecayRateDisplay = redDecayRate.toFixed(2)
		document.getElementById("redDecayRateDownCost").innerHTML = redDecayRateDownCost;
		document.getElementById("redAmount").innerHTML = redAmount;
		document.getElementById("redDecayRateDownCount").innerHTML = redDecayRateDownCount;
		document.getElementById("redDecayRate").innerHTML = redDecayRateDisplay;
	}
}

function calcRedPerSecond() {
	redPerSecond = redConversionRate;
	document.getElementById("redPerSecond").innerHTML = redPerSecond;
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
		document.getElementById("blueConversionUpgradeCost").innerHTML = blueConversionUpgradeCost;
		document.getElementById("redAmount").innerHTML = redAmount;
		document.getElementById("blueConversionUpgradeCount").innerHTML = blueConversionUpgradeCount;
	}
}

function blueIncreaseCharge() {
	if(blueAmount >= blueIncreaseChargeCost) {
		blueAmount = blueAmount - blueIncreaseChargeCost;
		blueChargeRate = Math.round((blueChargeRate + 0.15) * 100) / 100;
		blueIncreaseChargeCost = Math.round(blueIncreaseChargeCost * costChangeRate);
		blueChargeRateDisplay = blueChargeRate.toFixed(2);
		document.getElementById("blueIncreaseChargeCost").innerHTML = blueIncreaseChargeCost;
		document.getElementById("blueAmount").innerHTML = blueAmount;
		document.getElementById("blueChargeRate").innerHTML = blueChargeRateDisplay;
	}
}

function blueDecayRateDown() {
	if(greenAmount >= blueDecayRateDownCost) {
		greenAmount = greenAmount - blueDecayRateDownCost;
		blueDecayRateDownCost = Math.round(blueDecayRateDownCost * costChangeRate);
		blueDecayRateDownCount++;
		blueDecayRate = Math.round((blueDecayRate * 0.95) * 100) / 100;
		blueDecayRateDisplay = blueDecayRate.toFixed(2)
		document.getElementById("blueDecayRateDownCost").innerHTML = blueDecayRateDownCost;
		document.getElementById("blueAmount").innerHTML = blueAmount;
		document.getElementById("blueDecayRateDownCount").innerHTML = blueDecayRateDownCount;
		document.getElementById("blueDecayRate").innerHTML = blueDecayRateDisplay;
	}
}

function calcBluePerSecond() {
	bluePerSecond = blueConversionRate;
	document.getElementById("bluePerSecond").innerHTML = bluePerSecond;
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


// I REMOVED A WHOLE BUNCH OF BLUE SO I CAN JUST COPY RED AND CHANGE THE NAMES
// HERE IS THE BACK UP OF THAT INCASE I MESS IT UP, WHICH I ALMOST CERTAINLY WILL 
// function blueCharge() {
// 	if(blueEnergy + blueChargeRate <= blueEnergyMax) {
// 		blueEnergy = blueEnergy + blueChargeRate;
// 	}
// 	if(blueEnergy + blueChargeRate >= blueEnergyMax) {
// 		blueEnergy = blueEnergyMax;
// 	}
// }

// function blueConvert() {
// 	if(blueEnergy > 0) {
// 		bluePerSecondEnergy = Math.ceil(blueEnergyBar / 20);
// 		blueEnergy--;
// 	} else {
// 		bluePerSecondEnergy = 0;
// 	}
// 	// document.getElementById("blueEnergy").innerHTML = blueEnergy;
// }

// function blueBuyOne() {
// 	if(blueAmount >= blueBuyOneCost) {
// 		blueAmount = blueAmount - blueBuyOneCost;
// 		bluePerSecondAuto = bluePerSecondAuto + 1;
// 		blueBuyOneCost = Math.round(blueBuyOneCost * costChangeRate);
// 		document.getElementById("blueBuyOneCost").innerHTML = blueBuyOneCost;
// 		document.getElementById("blueAmount").innerHTML = blueAmount;
// 	}
// }

// function blueBuyTwo() {
// 	if(blueAmount >= blueBuyTwoCost) {
// 		blueAmount = blueAmount - blueBuyTwoCost;
// 		bluePerSecondAuto = bluePerSecondAuto + 3;
// 		blueBuyTwoCost = Math.round(blueBuyTwoCost * costChangeRate);
// 		document.getElementById("blueBuyTwoCost").innerHTML = blueBuyTwoCost;
// 		document.getElementById("blueAmount").innerHTML = blueAmount;
// 	}
// }

// function blueIncreaseCharge() {
// 	if(blueAmount >= blueIncreaseChargeCost) {
// 		blueAmount = blueAmount - blueIncreaseChargeCost;
// 		blueChargeRate++;
// 		blueIncreaseChargeCost = Math.round(blueIncreaseChargeCost * costChangeRate);
// 		document.getElementById("blueIncreaseChargeCost").innerHTML = blueIncreaseChargeCost;
// 		document.getElementById("blueAmount").innerHTML = blueAmount;
// 	}
// }

// function calcBluePerSecond() {
// 	bluePerSecond = bluePerSecondAuto + bluePerSecondEnergy;
// 	document.getElementById("bluePerSecond").innerHTML = bluePerSecond;
// }

