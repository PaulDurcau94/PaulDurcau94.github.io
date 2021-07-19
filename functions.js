
function hide(id) {
    document.getElementById(id).style.display="none";
}

function show(id) {
    document.getElementById(id).style.display="block";
    const oldLink = document.querySelector("a[data-page].active");
    if (oldLink) {
        oldLink.classList.remove("active");
        highlight(page);
    }
    const link = document.querySelector(`a[data-page= ${id} ]`);
    link.classList.add("active");
}

function hideAllPages() {
    const pages = Array.from(document.getElementsByClassName('page'));
    pages.forEach(function(page){
        hide(page.id);
    });
}

function highlight(el){
    console.log('To Do!!');
    el.style.borderColor = '#00df00';
    setTimeout(function () {
    el.style.borderColor = '#55df44';
    }, 100);
    setTimeout(function () {
    el.style.borderColor = '#99df88';
    }, 200);
    setTimeout(function () {
    el.style.borderColor = '';
    }, 300);
}

function showPage(id) {
    hideAllPages();
    show(id);
}

show('skills')

document.querySelector('#top-menu-bar').addEventListener("click", function(e){
    if (e.target.matches("a")) {
        const id = e.target.getAttribute("data-page");
        showPage(id);
        highlight(e.target);
    };
});

    window.skills = [];

function showSkills(skills) {
    const skillsHtml = skills.map(function(skill){
        const favorit = skill.favorit ? 'class="favorit"' : '';
        const endorsements = skill.endorsements > 5 ? `<span>${skill.endorsements}</span>` : '';
        return `<li ${favorit}>${skill.name} ${endorsements}</li>`;
    }).join('');
    document.querySelector("#skills ul").innerHTML = skillsHtml;
};

function sortSkillsByName(a, b) {
    const aName = a.name.toUpperCase();
    const bName = b.name.toUpperCase();
    
    if (aName < bName) {
        return -1;
    };

    if (aName > bName) {
        return 1;
    };
        return 0;
};

function sortSkillsByEndorsements(a, b) {
    return b.endorsements - a.endorsements;
}

fetch("data/skills.json").then(function(response) {
    return response.json();
}).then(function(skills) {
    skills.sort(sortSkillsByName);
    window.skills = skills;
    showSkills(skills);
})

