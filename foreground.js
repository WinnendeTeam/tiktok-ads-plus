let refreshButton = null;

function refreshLoop() {
	if(refreshButton) {
		refreshButton.click();
		console.log("TikTok Ads+ | Successfully Refreshed.");
		setTimeout(refreshLoop, 60000);
	}
}

function init() {
	let b = document.getElementsByClassName("refresh-btn")[0];
	if(b) {
		console.log("TikTok Ads+ | Injected Successfully!");
		
		refreshButton = b;
		refreshLoop();
	} else {
		console.log("TikTok Ads+ | No Refresh Button Available.");

		setTimeout(init, 1000);
	}
}

console.log("TikTok Ads+ | Extension Loaded!");
init();