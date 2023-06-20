document.addEventListener('DOMContentLoaded', function() {
  var element = document.getElementById('AppClientFullscreenButton');
  if (element) {
    element.remove();
  }
});


var currentBlock = 1;
var totalBlocks = 4;
var previousButton = document.getElementById('previousButton');
var nextButton = document.getElementById('nextButton');



// Afficher le premier bloc par défaut
showBlock(currentBlock);

function showPreviousBlock() {

    var previousBlock = currentBlock - 1;
    if (previousBlock < 1) {
      previousBlock = totalBlocks;
    }
    showBlock(previousBlock);
    --iii;
   console.log(iii);
 
}
var iii=0;
// var j=Array();
function showNextBlock() {
  var block1=document.getElementById("headnav");
  var duree=document.getElementById("timer").innerText;
  // j.add(duree);alert(currentBlock)
  if(currentBlock==3){
   
       block1.style.display="none";
  }
  localStorage.setItem("time"+iii,duree);
  const dropelements = document.getElementsByClassName('dropelement');
  if(!dropelements[iii].querySelector('div')){
  var nextBlock = currentBlock + 1;
  ++iii;
  if (nextBlock > totalBlocks) {
    nextBlock = 1;
  }
  showBlock(nextBlock);
  resetTimer();
  document.getElementById("cacheall").style.width="100%";
 }
 document.getElementById("shema1").innerHTML="Shéma 01 <br> <br> "+localStorage.getItem("time0");
 document.getElementById("shema2").innerHTML="Shéma 02 <br>  <br> "+localStorage.getItem("time1");
 document.getElementById("shema3").innerHTML="Shéma 03 <br>  <br> "+localStorage.getItem("time2");

}

function showBlock(blockNumber) {
  // Masquer le bloc actuel
  document.getElementById("block" + currentBlock).style.display = "none";

  // Afficher le nouveau bloc
  document.getElementById("block" + blockNumber).style.display = "block";

  currentBlock = blockNumber;

  // Gérer l'état des boutons de navigation
  previousButton.disabled = currentBlock === 1;
  nextButton.disabled = currentBlock === totalBlocks;
}


/* code block drop*/
var audio = new Audio("./drop.mp3");
var audio2 = new Audio("./error.mp3");
function playSuccessSound() {
  audio.play();
}
function playerrorSound() {
  audio2.play();
}
document.addEventListener("DOMContentLoaded", function(event) {
  var dragItems = document.querySelectorAll(".dragItem");
  var dropTargets = document.querySelectorAll(".dropTarget");
  var originalParent;

  dragItems.forEach(function(dragItem) {
    dragItem.addEventListener("dragstart", function(event) {
      originalParent = event.target.parentNode;
      event.dataTransfer.setData("text/plain", event.target.id);
    });
  });

  dropTargets.forEach(function(dropTarget) {
    dropTarget.addEventListener("dragover", function(event) {
      event.preventDefault();
    });

    dropTarget.addEventListener("drop", function(event) {
      event.preventDefault();
     
      var data = event.dataTransfer.getData("text/plain");
      var draggedItem = document.getElementById(data);
      
    
      if (dropTarget.id === "dropTarget1" && draggedItem.id === "dragItem1") {
        dropTarget.appendChild(draggedItem);draggedItem.style.backgroundColor="transparent";
        draggedItem.style.lineHeight="19px";playSuccessSound()
        draggedItem.style.minWidth="auto"
      } else if (dropTarget.id === "dropTarget2" && draggedItem.id === "dragItem2") {
        dropTarget.appendChild(draggedItem);
        draggedItem.style.backgroundColor="transparent";playSuccessSound()
        draggedItem.style.color="black";
        draggedItem.style.lineHeight="19px";
        draggedItem.style.minWidth="auto"
      }else if (dropTarget.id === "dropTarget3" && draggedItem.id === "dragItem3") {
        dropTarget.appendChild(draggedItem);playSuccessSound()
        draggedItem.style.lineHeight="19px";
        draggedItem.style.backgroundColor="transparent";
        draggedItem.style.minWidth="auto"
      } else if (dropTarget.id === "dropTarget4" && draggedItem.id === "dragItem4") {
        dropTarget.appendChild(draggedItem);playSuccessSound()
        draggedItem.style.lineHeight="19px";
        draggedItem.style.backgroundColor="transparent";
        draggedItem.style.minWidth="auto";
       


      } else if (dropTarget.id === "dropTarget5" && draggedItem.id === "dragItem5") {
        dropTarget.appendChild(draggedItem);
        draggedItem.style.lineHeight="19px";playSuccessSound()
        draggedItem.style.backgroundColor="transparent";
        draggedItem.style.minWidth="auto";
        draggedItem.style.color="black";
        draggedItem.style.fontSize="10px";
      } else if (dropTarget.id === "dropTarget6" && draggedItem.id === "dragItem6") {
        dropTarget.appendChild(draggedItem);playSuccessSound()
        draggedItem.style.lineHeight="19px";  draggedItem.style.color="black";
        draggedItem.style.backgroundColor="transparent";
        draggedItem.style.minWidth="auto"
      } else if (dropTarget.id === "dropTarget7" && draggedItem.id === "dragItem7") {
        dropTarget.appendChild(draggedItem);playSuccessSound()
        draggedItem.style.lineHeight="19px";
        draggedItem.style.backgroundColor="transparent";
        draggedItem.style.minWidth="auto"
      } else if (dropTarget.id === "dropTarget8" && draggedItem.id === "dragItem8") {
        dropTarget.appendChild(draggedItem);playSuccessSound()
        draggedItem.style.lineHeight="19px";
        draggedItem.style.backgroundColor="transparent";
        draggedItem.style.minWidth="auto"
      } else if (dropTarget.id === "dropTarget9" && draggedItem.id === "dragItem9") {
        dropTarget.appendChild(draggedItem);playSuccessSound()
        draggedItem.style.lineHeight="19px";
        draggedItem.style.backgroundColor="transparent";
        draggedItem.style.minWidth="auto"
      } else if (dropTarget.id === "dropTarget10" && draggedItem.id === "dragItem10") {
        dropTarget.appendChild(draggedItem);playSuccessSound()
        draggedItem.style.lineHeight="19px";
        draggedItem.style.backgroundColor="transparent";
        draggedItem.style.minWidth="auto"
      } else if (dropTarget.id === "dropTarget11" && draggedItem.id === "dragItem11") {
        dropTarget.appendChild(draggedItem);
        draggedItem.style.lineHeight="19px";playSuccessSound()
        draggedItem.style.backgroundColor="transparent";
        draggedItem.style.minWidth="auto"
      } else if (dropTarget.id === "dropTarget12" && draggedItem.id === "dragItem12") {
        dropTarget.appendChild(draggedItem);
        draggedItem.style.lineHeight="49px";playSuccessSound()
        draggedItem.style.backgroundColor="transparent";
        draggedItem.style.color="black";
        draggedItem.style.minWidth="auto"
        draggedItem.style.color="black";

      } else if (dropTarget.id === "dropTarget13" && draggedItem.id === "dragItem13") {
        dropTarget.appendChild(draggedItem);playSuccessSound()
        draggedItem.style.lineHeight="49px";
        draggedItem.style.backgroundColor="transparent";
        draggedItem.style.color="black";
        draggedItem.style.minWidth="auto"

      } else if (dropTarget.id === "dropTarget14" && draggedItem.id === "dragItem14") {
        dropTarget.appendChild(draggedItem);playSuccessSound()
        draggedItem.style.height="100px";
        draggedItem.style.width="100px";
        draggedItem.style.border="2px solide black";
        draggedItem.style.backgroundColor="transparent";


      } else if (dropTarget.id === "dropTarget15" && draggedItem.id === "dragItem15") {
        dropTarget.appendChild(draggedItem);
        draggedItem.style.height="100px";playSuccessSound()
        draggedItem.style.width="100px";
        draggedItem.style.border="2px solide black";
        draggedItem.style.backgroundColor="transparent";


      }else if (dropTarget.id === "dropTarget16" && draggedItem.id === "dragItem16") {
        dropTarget.appendChild(draggedItem);playSuccessSound()
        draggedItem.style.height="100px";
        draggedItem.style.width="100px";
        draggedItem.style.border="2px solide black";
        draggedItem.style.backgroundColor="transparent";
      }  else if (dropTarget.id === "dropTarget17" && draggedItem.id === "dragItem17") {
        dropTarget.appendChild(draggedItem);
        draggedItem.style.height="100px";playSuccessSound()
        draggedItem.style.width="100px";
        draggedItem.style.border="2px solide black";
        draggedItem.style.backgroundColor="transparent";
      }  else if (dropTarget.id === "dropTarget18" && draggedItem.id === "dragItem18") {
        dropTarget.appendChild(draggedItem);
        draggedItem.style.height="100px";playSuccessSound()
        draggedItem.style.width="100px";
        draggedItem.style.border="2px solide black";
        draggedItem.style.backgroundColor="transparent";
      }   else if (dropTarget.id === "dropTarget19" && draggedItem.id === "dragItem19") {
        dropTarget.appendChild(draggedItem);playSuccessSound()
        draggedItem.style.height="100px";
        draggedItem.style.width="100px";
        draggedItem.style.border="2px solide black";
        draggedItem.style.backgroundColor="transparent";
      } else if (dropTarget.id === "dropTarget20" && draggedItem.id === "dragItem20") {
        dropTarget.appendChild(draggedItem);
        draggedItem.style.height="100px";playSuccessSound()
        draggedItem.style.width="100px";
        draggedItem.style.border="2px solide black";
        draggedItem.style.backgroundColor="transparent";
      }  else if (dropTarget.id === "dropTarget21" && draggedItem.id === "dragItem21") {
        dropTarget.appendChild(draggedItem);playSuccessSound()
        draggedItem.style.height="100px";
        draggedItem.style.width="100px";
        draggedItem.style.border="2px solide black";
        draggedItem.style.backgroundColor="transparent";
        draggedItem.style.color="black";
      }  else if (dropTarget.id === "dropTarget22" && draggedItem.id === "dragItem22") {
        dropTarget.appendChild(draggedItem);playSuccessSound()
        draggedItem.style.height="100px";
        draggedItem.style.width="100px";
        draggedItem.style.border="2px solide black";
        draggedItem.style.backgroundColor="transparent";
        draggedItem.style.color="black";
      }  else if (dropTarget.id === "dropTarget23" && draggedItem.id === "dragItem23") {
        dropTarget.appendChild(draggedItem);playSuccessSound()
        draggedItem.style.height="100px";
        draggedItem.style.width="100px";
        draggedItem.style.border="2px solide black";
        draggedItem.style.backgroundColor="transparent";
        draggedItem.style.color="black";
      } else if (dropTarget.id === "dropTarget24" && draggedItem.id === "dragItem24") {
        dropTarget.appendChild(draggedItem);playSuccessSound()
        draggedItem.style.height="100px";
        draggedItem.style.width="100px";
        draggedItem.style.border="2px solide black";
        draggedItem.style.backgroundColor="transparent";
        draggedItem.style.color="black";
      }   else if (dropTarget.id === "dropTarget25" && draggedItem.id === "dragItem25") {
        dropTarget.appendChild(draggedItem);playSuccessSound()
        draggedItem.style.height="100px";
        draggedItem.style.width="100px";
        draggedItem.style.border="2px solide black";
        draggedItem.style.backgroundColor="transparent";
        draggedItem.style.color="black";
      }  else {
        playerrorSound();
        draggedItem.classList.add("notDroppedAnimation");
        setTimeout(function() {
          draggedItem.classList.remove("notDroppedAnimation");
        }, 500);
      }
    });
  });
});



/** time */

let startTime;
let timerInterval;
let elapsedTime = 0;

function startTimer() {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(updateTimer, 10);
    document.getElementById("cacheall").style.width="0%";
}

function stopTimer() {
    clearInterval(timerInterval);
    document.getElementById("cacheall").style.width="100%";

}

function resetTimer() {
    clearInterval(timerInterval);
    elapsedTime = 0;
    document.getElementById("timer").textContent = "00:00:00";
    // location.reload();
}

function updateTimer() {
    const elapsedTimeMs = Date.now() - startTime;
    const milliseconds = Math.floor(elapsedTimeMs % 1000);
    const seconds = Math.floor((elapsedTimeMs / 1000) % 60);
    const minutes = Math.floor((elapsedTimeMs / (1000 * 60)) % 60);
    const hours = Math.floor((elapsedTimeMs / (1000 * 60 * 60)) % 24);

    const displayMilliseconds = milliseconds.toString().padStart(3, "0");
    const displaySeconds = seconds.toString().padStart(2, "0");
    const displayMinutes = minutes.toString().padStart(2, "0");
    const displayHours = hours.toString().padStart(2, "0");

    const timerDisplay = `${displayHours}:${displayMinutes}:${displaySeconds}`;
    // ${displayMilliseconds}
    document.getElementById("timer").textContent = timerDisplay;

    elapsedTime = elapsedTimeMs;
}
