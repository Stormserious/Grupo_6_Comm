// buscador

inputSearch = document.getElementById("buscador");
box_search = document.getElementById("box-search");

// Filtrado de busqueda

document.getElementById("buscador").addEventListener("keyup", buscador_interno);

function buscador_interno (){
  
  filter = inputSearch.value.toLowerCase();
  li = box_search.getElementByTagName("li");

  //Recorriendo elementos a filtrar mediante los "li"

  for(i=0; i < li.length; i++){

    h2 = li[i].getElementByTagName("h2")[0];
    textValue = h2.textContent || h2.innerText;

    if(textValue.toLowerCase().indexOf(filter) > - 1){

      li[i].style.display = '';
      box_search.style.display = "block";

      if(inputSearch.value === ""){
        box_search.style.display = "none";
      }

    }else {
      li[i].style.display = "none";
    }
  }


}