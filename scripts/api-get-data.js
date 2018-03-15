GetData();
async function GetData() {
	let auktion = await fetchData('http://nackowskis.azurewebsites.net/api/Auktion/600/');
	let bud = await fetchData('http://nackowskis.azurewebsites.net/api/Bud/600/6/');


	let firstAuction = document.getElementById("titel");

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
		let textP = document.createTextNode("Start datum: " + currentObject.StartDatum.replace('T',' ') + " Slut datum: " + currentObject.SlutDatum.replace('T',' '));
		auktionP.appendChild(textP);
		auktionDiv.appendChild(auktionP);

		let auktionPrice = document.createElement("p");
		let textPrice = document.createTextNode("Utropspris: " + currentObject.Utropspris);
		auktionPrice.appendChild(textPrice);
		auktionDiv.appendChild(auktionPrice);

		let auktionBtn = document.createElement("button");
		auktionBtn.innerHTML = "Show more";
		auktionBtn.classList.add("btn-style");
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
