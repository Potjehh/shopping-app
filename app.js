(function () { //s ovim smo napravili samopozivajucu anonimnu funkciju, moze i bez tog, zbog tog se varijable u ovoj funkciji nece kositi s varijablama u nekim drugim funkcijama koje bi stavili/napravili
  var list = document.querySelector("ul"); //odabir ul elementa i spremanje u varijablu list
  list.style.listStyleType = "none"; // mijenja stil liste tako da se uklanjaju bilo kakve ikone navedene pored svakog elementa liste.
  var addButton = document.querySelector(".addButton"); //odabire element s klasom "addButton" u HTML dokumentu i sprema ga u varijablu addButton
  addButton.style.width = 80 + "px";
  addButton.style.height = 70 + "px";


  var input = document.querySelector("input");
  input.style.width = 240 + "px";
  input.style.height = 71 + "px";
  input.style.border = 10 + "px" + "black";



  function createItem(text) { // definiram funkciju createItem 
    var item = document.createElement("li"); //kreiramo novi li element i spremamo ga u varijablu item
    item.innerText = text; //  postavlja sadržaj teksta unutar novog "li" elementa na ono što je spremljeno u text varijabli.
    addRemoveButton(item); //dodajem addRemoveButton funkciju
    addCheckbox(item); //dodajem addCheckbox funkciju
    list.appendChild(item); // dodajemo li element postojećoj ul listi

  }

  function addItem() {
    var text = input.value; //varijabla text dobiva onu vrijednost koju unesemo
    createItem(text);
    input.value = ""; //postaviti da je polje prazno ponovno pri unosu

  }

  addButton.addEventListener("click", addItem);

  function removeItem(event) {
    var removeButton = event.target; //https://www.youtube.com/watch?v=XF1_MlZ5l6M
    removeButton.parentNode.remove();
  }

  function addRemoveButton(item) {
    var removeButton = document.createElement("div"); //kreiraj novi div element

    removeButton.className = "removeButton"; //novom div elementu dodijeli css oblikovanju (nova klasa) => kreirano je css oblikovanje za mali crveni kvadratić

    removeButton.addEventListener("click", removeItem); // poziva se na funkciju removeItem iz 23. retka
    item.appendChild(removeButton); //elementu liste dodaj novi element
    //pozovi funkciju prilikom kreiranja novog li elementa
  }


  function markDone(event) { // Funkcija za označavanje elementa li kada se klikne na checkbox i krizanje elementa kao rijesenog
    var checkbox = event.target; //https://www.youtube.com/watch?v=XF1_MlZ5l6M
    var item = checkbox.parentNode; //odabir parent elementa sa parentNode

    if (checkbox.checked) {
      item.style.textDecoration = "line-through";
    } else {
      item.style.textDecoration = "none";
    }
  };

  function addCheckbox(item) {
    var check = document.createElement("input");//kreiraj novi element za checkbox i spremi u varijablu check
    check.setAttribute("type", "checkbox");//oblikuj element kao checkbox pomocu setAttribute
    check.addEventListener("click", markDone);//dodaj novi eventListener na taj checkox koji će oblikovati text da bude precrtan
    item.insertBefore(check, item.firstChild); //ubacuje novi node odnosno checkbox (check) prije vec postojeceg child node-a. insertBefore zahtjeva dva parametra, novi node (check) i stari na cije mjesto se ubacuje (item.firstChild) ako nema drugog parametra ubacit ce na kraj
  }
})();













