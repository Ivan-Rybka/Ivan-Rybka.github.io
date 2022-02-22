$(document).ready(function () {
    $('.header_burger').click(function (event) {
        $('.header_burger, .header_menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});

let skills = [{name: 'Technologies', list: ['HTML5', ' CSS3', ' JavaScript(OOP, DOM)']},
            {name: 'Graphic editor', list: ['Photoshop', ' Figma(basic)']},
            {name: 'IDE', list: ['PHP Storm', ' Visual Studio Code', ' Atom', ' Sublime Text 2']},
            {name: 'CSV', list: ['GIT']},
            {name: 'Libraries and frameworks', list: ['Bootstrap', ' React.JS', ' React.Router', ' Redux(basic)']},
            {name: 'Other', list: ['SASS']}
];

for(var i = 0; i < skills.length;i++){
    let skillsWrapper = document.getElementById('skills-wrapper')

    let mainDiv = document.createElement('div');
    mainDiv.className = 'skills-text';

    let rightDiv = document.createElement('div');
    rightDiv.className = 'dates';
    let header1 = document.createElement('h4');
    header1.innerHTML = skills[i].name;
    rightDiv.appendChild(header1);
    mainDiv.appendChild(rightDiv)

    let leftDiv = document.createElement('div')
    leftDiv.className = 'skills-info'
    let header2 = document.createElement('h5');
    header2.innerHTML = skills[i].list;
    leftDiv.appendChild(header2);
    mainDiv.appendChild(leftDiv)

    skillsWrapper.appendChild(mainDiv)
}


