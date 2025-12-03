export const capabilities = {
	"browserName": "Firefox",
	"browserVersion": "145.0",
	"LT:Options": {
		"username": "svibandrei",
		"accessKey": "LT_OweuQa1W3rnN1NC5K3y52ZWp2IDGRoKcWCCns3YvHm1vvCz",
		"platformName": "Windows 11",
		"build": "Headless build",
		"project": "My JS Automation",
		"name": "Selenium test",
		"w3c": true,
		"plugin": "node_js-node_js",
		"headless": false

	}
}

Array.prototype.duplicate = function() {
	return[...this, ...this]
};

let digits = [1, 2, 3, 4, 5];
console.log(digits.duplicate())