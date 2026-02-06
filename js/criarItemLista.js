import gerarDiaDaSemana from "./gerarDiaDaSemana.js";

const inputItem = document.getElementById("input-item");
let contador = 0;

export function criarItemLista(){
    if (inputItem.value === ""){
        alert("Por favor insira um item!");
        return;
    }
    const itemDaLista = document.createElement("li");
    const containerItemDaLista = document.createElement("div");
    containerItemDaLista.classList.add("lista-item-container");
    const inputCheckbox = document.createElement("input");
    inputCheckbox.type = "checkbox";
    inputCheckbox.id = "checkbox-" + contador++;
    const nomeitem = document.createElement("p");
    nomeitem.innerText = inputItem.value;

    containerItemDaLista.appendChild(inputCheckbox);
    containerItemDaLista.appendChild(nomeitem);

    itemDaLista.appendChild(containerItemDaLista);
    const dataCompleta = gerarDiaDaSemana();

    const itemData = document.createElement("p");
    itemData.innerText = dataCompleta;
    itemData.classList.add("texto-data");
    itemDaLista.appendChild(itemData);

    inputCheckbox.addEventListener("click", function(){
        if (inputCheckbox.checked){
            nomeitem.style.textDecoration = "line-through";
        }else{
            nomeitem.style.textDecoration = "none";
        }
    });

    return itemDaLista;
}