
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

show('home')

document.querySelector('#top-menu-bar').addEventListener("click", function(e){
    if (e.target.matches("a")) {
        var id = e.target.getAttribute("data-page");
        showPage(id);
        highlight(e.target);
    };
});