
function hide(id) {
    document.getElementById(id).style.display="none";
}

function show(id) {
    document.getElementById(id).style.display="block";
    var oldLink = document.querySelector("a[data-page].active");
    if (oldLink) {
        oldLink.classList.remove("active");
    }
    var link = document.querySelector(`a[data-page= ${id} ]`);
    link.classList.add("active");
}

function hideAllPages() {
    var pages = Array.from(document.getElementsByClassName('page'));
    pages.forEach(function(page){
        hide(page.id);
    });
}

function highlight(){
    console.log('To Do!!');
}

function showPage(id) {
    hideAllPages();
    show(id);
}

show('skills')

document.querySelector('#top-menu-bar').addEventListener("click", function(e){
    if (e.target.matches("a")) {
        var id = e.target.getAttribute("data-page");
        showPage(id);
        highlight(e.target);
    };
});

var skills = [
    {name: 'html', favorit: true}, 
    {name: 'css'},
    {name: 'js', favorit: true}
];

var skillsHtml = skills.map(function(skill){
    console.info(skill.favorit);
    if (skill.favorit) {
        return `<li class="favorite">${skill.name}</li>`;
    };
    return `<li>${skill.name}</li>`;
    
}).join('');


document.querySelector("#skills ul").innerHTML = skillsHtml;