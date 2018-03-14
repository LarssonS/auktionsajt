/*

console.log(auktion);

let myButton = document.getElementById("searchButton");

var auktionItems ={"auktioner": [auktion[0],auktion[1],auktion[15],auktion[16],      
                    auktion[18], auktion[23],auktion[27],auktion[31],
                    auktion[32],auktion[33],auktion[34]
                ]};
console.log(auktionItems);


myButton.addEventListener("click", function(){

    let searchValue = document.getElementById("search").value;

    
    for(currentAuktion of auktionItems.auktioner){
        console.log(currentAuktion);
        //om Fetch delete funktionen börjar fungera let auktionsItems = auktion[i]; 

        let result = auktionItems.auktioner.filter(b => b[i].Titel.includes(searchValue));

    }
    

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

});



*/