function fontStyle(flag) {
    var textArea = document.getElementById("text-area");
    if (flag === 'b') {
        if (textArea.style.fontWeight === "normal" || textArea.style.fontWeight === "") {
            textArea.style.fontWeight = "bold";
        } else {
            textArea.style.fontWeight = "normal";
        }
    }

    if (flag === 'i') {
        if (textArea.style.fontStyle === "normal" || textArea.style.fontStyle === "") {
            textArea.style.fontStyle = "italic";
        } else {
            textArea.style.fontStyle = "normal";
        }
    }


    if (flag === 'u') {
        if (textArea.style.textDecoration === "none" || textArea.style.textDecoration === "") {
            textArea.style.textDecoration = "underline";
        } else {
            textArea.style.textDecoration = "none";
        }
    }
}

function bgElements() {
    var block = document.querySelectorAll(".block");

    block.forEach(function (block) {
        if (block.style.display === "none" || block.style.display === "") {
            block.style.display = "block";
        } else {
            block.style.display = "none";
        }
    });

    var flex = document.querySelector(".flex")
    
    if (flex.style.display === "none" || flex.style.display === "") {
        flex.style.display = "flex";
    } else {
        flex.style.display = "none";
    }

    var element = document.querySelector(".element")
    
    if (element.style.display === "none") {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
}

function backgroundColor(color) {
    var textArea = document.getElementById("text-area");

    if(color === 'blue'){
        textArea.style.backgroundColor = "aqua";
    }else if(color === 'red'){
        textArea.style.backgroundColor = "red";
    }else if(color === 'purple'){
        textArea.style.backgroundColor = "purple";
    }else{
        textArea.style.backgroundColor = "green"
    }
}

function post() {
    var main = document.querySelector(".main");
    main.style.display = "none";
}