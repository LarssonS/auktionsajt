GetData();
async function GetData() {
	let auktion = await fetchData('http://nackowskis.azurewebsites.net/api/Auktion/600/');
	let bud = await fetchData('http://nackowskis.azurewebsites.net/api/Bud/600/6/');


	let firstAuction = document.getElementById("titel");

	auktion.forEach(currentObject => {
		let auktionDiv = document.createElement("div");
		auktionDiv.classList.add("auktion-div");

		let auktionH1 = document.createElement("h2");
		let textH1 = document.createTextNode(currentObject.Titel);
		auktionH1.appendChild(textH1);
		auktionDiv.appendChild(auktionH1);

		let auktionH3 = document.createElement("h3");
		let textH3 = document.createTextNode(currentObject.Beskrivning);
		auktionH3.appendChild(textH3);
		auktionDiv.appendChild(auktionH3);

		let auktionSlut = document.createElement("p");
		let auktionStart = document.createElement("p");
		let textStart = document.createTextNode("Start datum: " + currentObject.StartDatum.replace('T',' '));
		let textSlut = document.createTextNode("Slut datum: " + currentObject.SlutDatum.replace('T',' '));
		auktionStart.appendChild(textStart);
		auktionSlut.appendChild(textSlut);
		auktionDiv.appendChild(auktionStart);
		auktionDiv.appendChild(auktionSlut);

		let auktionPrice = document.createElement("p");
		let textPrice = document.createTextNode("Utropspris: " + currentObject.Utropspris);
		auktionPrice.appendChild(textPrice);
		auktionDiv.appendChild(auktionPrice);

        var today = new Date();
        var auctionEndDate = new Date(currentObject.SlutDatum);
		let auktionInput = document.createElement("input");
		let auktionBtn = document.createElement("button");
		auktionBtn.innerHTML = "Lägg bud";
		auktionBtn.classList.add("bid-container");
		auktionInput.classList.add("bid-container");
		auktionBtn.classList.add("bid-button");
		auktionInput.classList.add("input-container");
		firstAuction.appendChild(auktionDiv);
		   if(auctionEndDate > today){
		      auktionDiv.appendChild(auktionInput);
		      auktionDiv.appendChild(auktionBtn);
	    } else {
	    	let auktionText = document.createElement("p");
	    	let textBud = document.createTextNode("KLAR!");
		    auktionText.appendChild(textBud);
		    auktionDiv.appendChild(auktionText);	
	    }
/*        var today = new Date();
        var auctionEndDate = new Date(currentObject.SlutDatum);
        if(auctionEndDate > today){
		let priceFilterButton = document.createElement("button");
		priceFilterButton.innerHTML = "Price";
		priceFilterButton.classList.add("btn-style");
		auktionDiv.appendChild(priceFilterButton);
		firstAuction.appendChild(auktionDiv);
}*/
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

function myFunction() {

  var input = document.getElementById("Search");
  var filter = input.value.toLowerCase();
  var nodes = document.getElementsByClassName('auktion-div');

  for (i = 0; i < nodes.length; i++) {
    if (nodes[i].textContent.toLowerCase().includes(filter)) {
        	nodes[i].style.display = 'block';
    	} 
	else {

      	nodes[i].style.display = 'none';
    }
  }
}

function comparePrice(a,b){

	var valueA = Number(a.querySelectorAll('p')[2].innerHTML.replace("Utropspris: ", ""));
	var valueB = Number(b.querySelectorAll('p')[2].innerHTML.replace("Utropspris: ", ""));;
	

	  if (valueA < valueB){
         return -1;
	  } if (valueA > valueB){
        return 1;
	  }
    return 0;
}

function compareDate(a,b){

	var valueA = new Date(a.querySelectorAll('p')[0].innerHTML.replace("Start datum: ", ""));
	var valueB = new Date(b.querySelectorAll('p')[0].innerHTML.replace("Start datum: ", ""));
	

	  if (valueA < valueB){
         return -1;
	  } if (valueA > valueB){
        return 1;
	  }
    return 0;

}

function sort(orderBy){
	const items = Array.prototype.slice.call(document.querySelectorAll('.auktion-div'));
	document.querySelector('#titel').innerHTML = '';

	if(orderBy === 'price'){
		items.sort(comparePrice);
	}else if (orderBy === 'date') {
		items.sort(compareDate);
	}

//Display for user
for (const item of items){
	document.querySelector('#titel').appendChild(item);
}
}


/*function myFunction() {
    var input = document.getElementById("Search");
    var filter = input.value.toUpperCase();
    var length = document.getElementsByClassName('auktion-div').length;

    for (i=0; i<length; i++){
if(document.getElementsByClassName('auktion-div')[i].innerHTML.toUpperCase().indexOf(filter) > -1) {     
    document.getElementsByClassName("auktion-div")[i].style.display = "block";
    break;
            }
        else{
            document.getElementsByClassName("auktion-div")[i].style.display = "none";
        } 
    }
} */
