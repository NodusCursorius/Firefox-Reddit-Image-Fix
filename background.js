// origonal Accept field: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8
const acceptChange = 'image/avif,image/webp,*/*'
const requestFilter = {
	urls: ["https://i.redd.it/*"]
};

// main
handler = function(details) {
	for (const header of details.requestHeaders) {
		// console.log(header.name, header.value);
		if (header.name.toLowerCase() === 'accept') {
			header.value = acceptChange;
			return { requestHeaders: details.requestHeaders };
		}
	}
}

browser.webRequest.onBeforeSendHeaders.addListener(handler, requestFilter, ["blocking", "requestHeaders"]);