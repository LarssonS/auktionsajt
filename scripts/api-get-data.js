






async function GetData() {

    let auktion = await fetchData('http://nackowskis.azurewebsites.net/api/auktion/600/');

    
    return auktion; 

    
    
};





let myButton = document.getElementById("searchButton");



myButton.addEventListener("click", async function(){

    let searchValue = document.getElementById("search").value;

    

    //var auktionItems = auktion;
    let auktionItems = await GetData();

    let result = auktionItems.filter(b => b.Titel.includes(searchValue));

    auktionItems.forEach(currentObject => {
       
        let searchResultList = document.getElementById("searchResult");

        searchResultList.innerHTML = "";


    for (let auktion of result)
    {

        let newAuktion = document.createElement('p');

        let text = auktion.Titel;

        let textNode = document.createTextNode(text);

        newAuktion .appendChild(textNode);
        searchResultList.appendChild(newAuktion);

    }
    
    })

      
});









async function fetchData(url)
{
    let promise = await fetch(url);

    let data = await promise.json();
    return data;
}













    
  




/*

async function postData()
{
fetch('http://nackowskis.azurewebsites.net/api/auktion/',{
    method: 'Delete',
    body: JSON.stringify({
    "AuktionID": "438",
    "GruppKod": "600"
    }
    ),
     headers: {
    'Accept': 'application/json, text/plain, */
    
    /*
    *', 'Content-Type': 'application/json'
    }
    }).then(function (data) {
    console.log('Request success: ', 'posten skapad');
 });
}
*/

//postData();
        




