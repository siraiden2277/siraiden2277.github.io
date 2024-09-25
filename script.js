let cookieCount = 0;
let clickValue = 1; // Number of cookies added per click
let autoClickValue = 0; // Number of cookies added per autoclick
let upgradeCost = 10;
let autoClickerCost = 50;

function clickCookie() {
    cookieCount += clickValue;
    updateCookieCount();
}

function updateCookieCount() {
    const cookiesElement = document.getElementById('cookies');
    cookiesElement.textContent = cookieCount + (cookieCount === 1 ? ' cookie' : ' cookies');
}

function buyClickUpgrade() {
    if (cookieCount >= upgradeCost) {
        cookieCount -= upgradeCost;
        clickValue += 1;
        upgradeCost *= 2; // Increase the cost for the next upgrade
        updateCookieCount();
        updateStore();
    } else {
        alert("Not enough cookies to buy the upgrade!");
    }
}

function buyAutoClick() {
    if (cookieCount >= autoClickerCost) {
        cookieCount -= autoClickerCost;
        autoClickValue += 1;
        autoClickerCost *= 2; // Increase the cost for the next auto-clicker
        setInterval(autoClickCookie, 1000); // Set up auto-clicker timer
        updateCookieCount();
        updateStore();
    } else {
        alert("Not enough cookies to buy the auto-clicker!");
    }
}

function autoClickCookie() {
    cookieCount += autoClickValue;
    updateCookieCount();
}

function updateStore() {
    const clickUpgradeButton = document.querySelectorAll("#store-container button")[0];
    clickUpgradeButton.textContent = `Buy Click Upgrade (+${clickValue} cookies per click) - Cost: ${upgradeCost} cookies`;

    const autoClickerButton = document.querySelectorAll("#store-container button")[1];
    autoClickerButton.textContent = `Buy Auto Clicker (+${autoClickValue} cookies per second) - Cost: ${autoClickerCost} cookies`;
}
