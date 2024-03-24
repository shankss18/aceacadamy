
function createCard(){
  let subjectname = prompt("Subject Name");
  let timings = prompt("Timings(ex: 11am-12pm)");
  let by = prompt("Name of the tutor");

  if (subjectname == "" || timings == "" || by == ""){
      window.alert('Please enter all the required details');
  }
  else{
    var container = document.getElementById("containers");
    var newCard = document.createElement("div");
    newCard.className = "linkcards";
    newCard.innerHTML = `
          <p class="subname">${subjectname}</p>
          <p class="ano">Timings: ${timings}</p>
          <p class="ano">By: ${by}</p>
          <p class="ano"><a href="">Join now</a></p>
      `;
    
      container.appendChild(newCard);
          }

}