let libButton = document.getElementById('lib-button');

let libIt = function() {
    let storyDiv = document.getElementById("story");
    storyDiv.innerHTML = "??Your story here";
    let noun1 = document.getElementById("noun").value;
    let adjective1 = document.getElementById("adjective").value;
    let person1 = document.getElementById("person").value;
    storyDiv.innerHTML = noun1 + " " + adjective1 + " " + person1;
};

libButton.addEventListener('click', libIt);








