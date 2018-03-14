GetData();
async function GetData()
{
  let response = await FetchData ("http://nackowskis.azurewebsites.net/api/auktion/600/")
  console.log(response);

//let parseResponse = JSON.stringify(response);

for (var i = 0; i < response.length; i++) {
  response[i]

  let auktionh1=document.createElement("h1");
  let auktionh1Text=document.createTextNode(response[i].Beskrivning);
  auktionh1.appendChild(auktionh1Text);
  document.body.appendChild(auktionh1);

  let auktionText=document.createElement("p");
  let auktionPtag=document.createTextNode(response[i].SlutDatum + response [i].StartDatum + response[i].Titel + response[i].Utropspris]);
  auktionPtag.appendChild(auktionDiv);
document.body.appe
  let auktionDiv=document.createElement("div");
  auktionDiv.appendChild(auktionh1);
  document.body.appendChild(auktionDiv);

}

}

async function FetchData(url)
{
  let promise = await fetch (url);
  let data = await promise.json();
  return data;
}

function postData(){
fetch("http://nackowskis.azurewebsites.net/api/auktion/",{
 method: 'POST',
 body: JSON.stringify({
      "AuktionID": 3,
      "Titel": "Glass",
       "Beskrivning": "blablabla",
       "StartDatum": "2018-01-10T00:00:00",
       "SlutDatum": "2018-01-10T00:00:00",
       "Gruppkod": 600,
       "Utropspris": 300,
     }),

 headers: {
 'Accept': 'application/json, text/plain, */*',
 'Content-Type': 'application/json'
 }
 }).then(function (data) {
 console.log('Request success: ', 'posten skapad');
})
}
//postData();

//Funktion för att ta bort data
function deleteData(){
fetch("http://nackowskis.azurewebsites.net/api/auktion/600/471",{
 method: 'DELETE',
 body: JSON.stringify({
      "AuktionID": 471,
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
//deleteData();
