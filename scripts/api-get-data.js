GetData();
async function GetData() {
	let auktion = await fetchData('http://nackowskis.azurewebsites.net/api/Auktion/600/');
	console.log(auktion);

	let firstAuction = document.getElementById("titel");
	let bidAuction = document.getElementById("bid");

	auktion.forEach(currentObject => {
		let auktionDiv = document.createElement("div");
		auktionDiv.classList.add("auktion-div");

		let auktionH1 = document.createElement("h1");
		let textH1 = document.createTextNode(currentObject.Titel);
		auktionH1.appendChild(textH1);
		auktionDiv.appendChild(auktionH1);

		let auktionH3 = document.createElement("h3");
		let textH3 = document.createTextNode(currentObject.Beskrivning);
		auktionH3.appendChild(textH3);
		auktionDiv.appendChild(auktionH3);

		let auktionP = document.createElement("p");
		let textP = document.createTextNode("Start datum: " + currentObject.StartDatum + " Slut datum: " + currentObject.SlutDatum);
		auktionP.appendChild(textP);
		auktionDiv.appendChild(auktionP);

		let auktionPrice = document.createElement("p");
		let textPrice = document.createTextNode("Utropspris: " + currentObject.Utropspris);
		auktionPrice.appendChild(textPrice);
		auktionDiv.appendChild(auktionPrice);

		let auktionBtn = document.createElement("input");
		auktionBtn.type = "submit";
		auktionBtn.value = "Show bids";
		auktionBtn.classList.add("btn-style");

		auktionBtn.addEventListener("click", async function() {
			var currentBidSearch = 'http://nackowskis.azurewebsites.net/api/Bud/600/' + currentObject.AuktionID + "/";	
			var currentBidSearchResult = await apiCall(currentBidSearch);
			

			currentBidSearchResult.sort((a, b) => a.Summa < b.Summa);
			currentBidSearchResult.forEach(currentBid => {
				var bidDiv = document.createElement("div");
				
				var bidP = document.createElement("p");
				var bidTextP = document.createTextNode("Bud: " + currentBid.Summa + " kr");
				bidP.appendChild(bidTextP);
				bidDiv.appendChild(bidP);
				auktionDiv.appendChild(bidDiv);
			})
		})

		auktionDiv.appendChild(auktionBtn);
		firstAuction.appendChild(auktionDiv);
	})
}

async function fetchData(url)
{
	let promise = await fetch(url);
	let data = await promise.json();
	return data;
}

async function apiCall (stringUrl) {
	let auctionBid = await fetchData(stringUrl);
	return auctionBid;
}

function deleteData(){
	fetch("http://nackowskis.azurewebsites.net/api/auktion/600/459",{
		method: 'DELETE',
		body: JSON.stringify({
			"AuktionID": 459,
			"Gruppkod": 600,
		}),
		headers: {
			'Accept': 'application/json, text/plain, */*',
			'Content-Type': 'application/json'
		}
	}).then(function (data) {
		console.log('Request success: ', 'posten skapad');
	})
}
/*deleteData();*/
