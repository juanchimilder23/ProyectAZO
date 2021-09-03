/*

JAVASCRIPTMODELOS

const PISCINAS_URL = "https://juanchimilder23.github.io/Proyecto-Json/";

var showSpinner = function () {
    document.getElementById("spinner-wrapper").style.display = "block";
}

var hideSpinner = function () {
    document.getElementById("spinner-wrapper").style.display = "none";
}

var getJSONData = function (url) {
    var result = {};
    showSpinner();
    return fetch(url)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw Error(response.statusText);
            }
        })
        .then(function (response) {
            result.status = 'ok';
            result.data = response;
            hideSpinner();
            return result;
        })
        .catch(function (error) {
            result.status = 'error';
            result.data = error;
            hideSpinner();
            return result;
        });
}

async function getPiscinasData() {
    const piscinasList = await getJSONData(PISCINAS_URL);
    return piscinasList;
}

document.addEventListener("DOMContentLoaded", async function (e) {
    response = await getPiscinasData();
    piscinasList = response.data;
    showPoolsList(piscinasList);
});

function showPoolsList(array) {
    let htmlContentToAppend = "";
    for (let i = 0; i < array.length; i++) {
        let element = array[i];

        htmlContentToAppend += getPiscinasHtml(element)
    }
    document.getElementById("productos").innerHTML = htmlContentToAppend;
}
function getPiscinasHtml(element) {
    return `
             <h3>${element.modelo} </h3>
            <p> ${element.largo} x ${element.ancho} x ${element.profundidad} metros </p>
            ` ;
}
*/
