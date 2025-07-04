import CssSyntaxError_ from "postcss/lib/css-syntax-error";


console.log("js its runn");
alert("hello in js web browser");
console.warn('This is warning');
function changeText(){
    const parameter = document.getElementById("message");
    parameter.innerText = "voce clicou aqui nesse botao";
}
function gmailConfirm(){
    const paragraph = document.getElementById("myParagraphTest");
    if (paragraph){
        paragraph.textContent = "gmailConfirm Test in js";
        paragraph.style = "black";
        paragraph.style = "bold";
    }
}
function error_css(){
    if(ValidityState == True){
        alert("css validate");
    }else{
        return CssSyntaxError_
    }
}
function passwordConfirm()
{
    const hash = document.getElementById("passwordTest");
    if (hash){
        hash.textContent = "password in test js";
        //hash.accessKey(textContent);
        hash.style = "black";
        hash.style = "bold";
    }
    
}
