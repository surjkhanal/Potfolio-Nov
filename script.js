let techArr = [
    {
        'name':'C',
        'icon':'https://img.icons8.com/color/50/000000/c-programming.png'
    },
    {
        'name':'C++',
        'icon':'https://img.icons8.com/color/48/000000/c-plus-plus-logo.png'
    },
    {
        'name':'Python',
        'icon':'https://img.icons8.com/color/50/000000/python--v1.png'
    },
    {
        'name':'HTML',
        'icon':'https://img.icons8.com/color/50/000000/html-5--v1.png'
    },
    {
        'name':'CSS',
        'icon':'https://img.icons8.com/color/48/000000/css3.png'
    },
    {
        'name':'JavaScript',
        'icon':'https://img.icons8.com/color/48/000000/javascript--v1.png'
    },
    {
        'name':'React',
        'icon':' https://img.icons8.com/bubbles/50/000000/react.png '
    },
    {
        'name':'MongoDB',
        'icon':'https://img.icons8.com/color/50/000000/mongodb.png'
    },
    {
        'name':'Node',
        'icon':'https://img.icons8.com/fluency/50/000000/node-js.png'
    },
    {
        'name':'AWS',
        'icon':'https://img.icons8.com/windows/50/ffffff/amazon-web-services.png'
    },
    
]
let socialArr = [
    {
        'name':'https://github.com/tosudh',
        'icon':'https://img.icons8.com/doodle/36/000000/github--v1.png'
    },
    {
        'name':'https://www.linkedin.com/in/ersudhanshu/',
        'icon':'https://img.icons8.com/fluency/36/000000/linkedin.png'
    },
    {
        'name':'mailto:toSudh@gmail.com',
        'icon':'https://img.icons8.com/color/36/000000/gmail-new.png'
    },
    {
        'name':'https://docs.google.com/document/d/1SpoL-W_PcUtBW9vsznQFW9ktY7Ywt0HW7LM-lY7jUQI/edit',
        'icon':'https://img.icons8.com/bubbles/48/000000/resume.png'
    },
    
]

let techCard = (data)=>{
    return `
    <span class="tech-box">
    <img src="${data.icon}"/>
    <div class="tech-name">${data.name}</div>
    </span>`
}

techArr.forEach(data => {
    document.querySelector('#tech').innerHTML+=techCard(data)
})
socialArr.forEach(data => {
    document.querySelector('#social-links').innerHTML+=`
    <a href="${data.name}" target="_blank">
    <img src="${data.icon}">
    </a>
    `
})

let projectArr = [
    {
        category: 'front-end',
        name:"React Tic Tac Toe",
        img:['https://raw.githubusercontent.com/tosudh/static-data/master/project-snap/react-tic-tac-toe/1.png'],
        full_img:"",
        link:'https://tosudh.github.io/tic-tac-toe'
    },
    {
        category: 'front-end',
        name:"JS Car Game",
        img:['https://raw.githubusercontent.com/tosudh/static-data/master/project-snap/car-game/1.png'],
        full_img:"",
        link:'https://tosudh.github.io/car-game-javascript/'
    },
    {
        category: 'front-end',
        name:"React Gallery",
        img:['https://raw.githubusercontent.com/tosudh/static-data/master/project-snap/react-gallery/1.png'],
        full_img:"https://raw.githubusercontent.com/tosudh/static-data/master/project-snap/car-game/full.png",
        link:'https://tosudh.github.io/gallery/'
    },
    {
        category: 'back-end',
        name:"Calcualtor",
        img:['https://raw.githubusercontent.com/tosudh/static-data/master/project-snap/calc/1.png'],
        full_img:"",
        link:'https://tosudh.github.io/Calculator-UI-and-JS/'
    },
    {
        category: 'front-end',
        name:"Currency Converter",
        link:'https://tosudh.github.io/Currency-Converter/',
        img:[
            'https://raw.githubusercontent.com/tosudh/static-data/master/project-snap/currency/1.png',
            'https://raw.githubusercontent.com/tosudh/static-data/master/project-snap/currency/2.png'
        ],
        full_img:"https://raw.githubusercontent.com/tosudh/static-data/master/project-snap/currency/full.png",
    },
    {
        category: 'front-end',
        name:"Fashion Store",
        link:'https://tosudh.github.io/e-commerce-frontend/',
        img:[
            'https://raw.githubusercontent.com/tosudh/static-data/master/project-snap/fashion-store/1.png',
            'https://raw.githubusercontent.com/tosudh/static-data/master/project-snap/fashion-store/2.png',
            'https://raw.githubusercontent.com/tosudh/static-data/master/project-snap/fashion-store/3.png',
        ],
        full_img:
        'https://raw.githubusercontent.com/tosudh/static-data/master/project-snap/fashion-store/full.png',
    },
    {
        category: 'front-end',
        name:"grammer-corrector",
        link:'https://tosudh.github.io/Grammarly-Project/',
        img:[
            'https://raw.githubusercontent.com/tosudh/static-data/master/project-snap/grammer-corrector/1.png',
            'https://raw.githubusercontent.com/tosudh/static-data/master/project-snap/grammer-corrector/2.png',
            'https://raw.githubusercontent.com/tosudh/static-data/master/project-snap/grammer-corrector/3.png',
        ],
        full_img:"https://raw.githubusercontent.com/tosudh/static-data/master/project-snap/grammer-corrector/full.png",
    },
    {
        category: 'front-end',
        name:"food-web",
        link:'https://tosudh.github.io/Food-website/',
        img:[
            'https://raw.githubusercontent.com/tosudh/static-data/master/project-snap/food-web/1.png',
        ],
        full_img:"",
    },
    {
        category: 'front-end',
        name:"intershala-ui-clone",
        link:'https://tosudh.github.io/internshala-clone/',
        img:[
            'https://raw.githubusercontent.com/tosudh/static-data/master/project-snap/intershala-ui-clone/1.png',
        ],
    //     full_img:'https://raw.githubusercontent.com/tosudh/static-data/master/project-snap/intershala-ui-clone/full.png',
    },
    {
        category: 'front-end',
        name:"landing-page-max",
        link:'https://tosudh.github.io/landing-page-max-cs/',
        img:[
            'https://raw.githubusercontent.com/tosudh/static-data/master/project-snap/landing-page-max-cx/1.png',
        ],
        full_img:'https://raw.githubusercontent.com/tosudh/static-data/master/project-snap/landing-page-max-cx/full.png',
    },
    {
        category: 'front-end',
        name:"landing-page-food",
        link:'https://tosudh.github.io/landing-page-food-card',
        img:[
            'https://raw.githubusercontent.com/tosudh/static-data/master/project-snap/landing-page-food/1.png',
        ],
        full_img:"",
    },
    {
        category: 'front-end',
        name:"swiggi-ui-clone",
        link:'https://tosudh.github.io/swiggy-clone-basic-ui',
        img:[
            'https://raw.githubusercontent.com/tosudh/static-data/master/project-snap/swiggi-ui-clone/1.png',
        ],
        full_img:"",
    },
    {
        category: 'front-end',
        name:"weather app",
        link:'https://tosudh.github.io/weather-update/',
        img:[
            'https://raw.githubusercontent.com/tosudh/static-data/master/project-snap/weather/1.png',
            'https://raw.githubusercontent.com/tosudh/static-data/master/project-snap/weather/2.png',
        ],
        full_img:"",
    },
    {
        category: 'full-stack',
        name:"Confitext",
        link:'https://confitextmessenger.web.app/',
        img:['https://raw.githubusercontent.com/tosudh/static-data/master/project-snap/confitext/1.png'],
        full_img:"",
    }
];


let projectBlock = document.querySelector('#projects')

let projectNavs = document.querySelectorAll('#projects-box button')

projectNavs.forEach(btn=>{
    btn.onclick = (event) =>{
        console.log(event.target.value)
        let active=document.querySelector('#projects-box .active')
        classToggler(active,'active')
        classToggler(btn,'active')
        getCards(event.target.value)
    }
})
getCards('all')



function getCards(type){
    let arr = projectArr.filter(a=>a.category === type || type ==='all')
    projectBlock.innerHTML='';
    arr.forEach(a=>{
        let card = document.createElement('div')
        card.classList.add('projects-card')
        card.innerHTML = `
        <a target="_blank" href="${a.link}">
        <div class="img">
                <img src="${a.img[0]}" alt="">
            </div>
            <div class="desc">
                <span>${a.name}</span>
            </div>
        </a>`
            projectBlock.appendChild(card)

    })

}
function classToggler(target, name){
    if(target){
        target.classList.toggle(name)
    }
}