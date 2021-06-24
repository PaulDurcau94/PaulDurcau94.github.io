console.debug('inside functions.js');

function getInfo(name) {
    var mess = "Salut " + name + ", bine ai venit";
    console.warn('inside get info', mess);
    return mess;
}

console.info(getInfo("Paul"));

var myName = "Paul " + "Durcau";
var wellcome= getInfo(myName);
console.info(wellcome);

function showHome() {
    document.getElementById('skills').style.display="none";
    document.getElementById('home').style.display="block";
    document.getElementById('projects').style.display="none";
    document.getElementById('languages').style.display="none";

    
function showSkills() {
    document.getElementById('skills').style.display="block";
    document.getElementById('home').style.display="none";
    document.getElementById('projects').style.display="none";
    document.getElementById('languages').style.display="none";
}


function showProjects() {
    document.getElementById('skills').style.display="none";
    document.getElementById('home').style.display="none";
    document.getElementById('projects').style.display="block";
    document.getElementById('languages').style.display="none";

function showLanguages() {
    document.getElementById('skills').style.display="none";
    document.getElementById('home').style.display="none";
    document.getElementById('projects').style.display="none";
    document.getElementById('languages').style.display="block";