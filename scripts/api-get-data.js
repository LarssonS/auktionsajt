GetData();
async function GetData()
{
  let response = await FetchData ("http://nackowskis.azurewebsites.net/api/auktion/600/")
  console.log(response);

//let parseResponse = JSON.stringify(response);

for (var i = 0; i < response.length; i++) {
  response[i]

    let auktionUl=document.createElement("ul");
    let auktionPTag = document.createElement("li");
    let auktionText = document.createTextNode(response[i].AuktionID + response[i].Beskrivning +response[i].SlutDatum + response [i].StartDatum + response[i].Titel + response[i].Utropspris);
    auktionUl.appendChild(auktionPTag);
    auktionUl.appendChild(auktionUl)
    document.body.appendChild(auktionUl);
}

/*  let auktionPTag = document.createElement("p");
  let auktionText = document.createTextNode(response[i].AuktionID + response[i].Beskrivning +response[i].SlutDatum + response [i].StartDatum + response[i].Titel + response[i].Utropspris);
  auktionPTag.appendChild(auktionText);
  document.body.appendChild(auktionPTag);
}
  /*for (var auktion of response)
  {
    let auktionPTag = document.createElement("p");
    let auktionText = document.createTextNode(auktion);
    auktionPTag.appendChild(auktionText);
    document.body.appendChild(auktionPTag);
  }*/
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
deleteData();
