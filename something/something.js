const userData = 
    {
        id: "usr001",
        name: "Dueben",
        lastName: "Lewis",
        role: "softwhere engineew >.<",
        desc: "'Proffecient in C,C++'"
    }

const techStack = [
    'c',
    'html',
    'css',
    'javascript',
    'java'
]

function renderTech() {
    techStack.forEach((item, index) => {
        const img = document.createElement('img')
        img.id = item
        img.src = `imgs/${item}.png`
        document.getElementById('something-main-tech-icon-wrapper').append(img)
    })
}

const renderCard = () => {
    
    const somethingMain = document.getElementById('something-main')
    const details = document.createElement('div')
    details.id ="something-main-details"
    details.innerHTML = `
        <h1 id="something-main-details-name">${userData.name + " " + userData.lastName}</h1>
        <h3 id="something-main-details-role">${userData.role}</h3>
        <p id="something-main-details-desc">${userData.desc}</p>
    `
    
    const tech = document.createElement('div')
    tech.id = "something-main-tech"
    tech.innerHTML = `
        <h1 id="something-main-tech-heading">Languages</h1>
        <div id="something-main-tech-icon-wrapper"></div>
    `
    
    const socials = document.createElement('div')
    socials.id = "something-main-socials"
    socials.innerHTML = `
    <h1 id="something-main-socials-heading">Socials</h1>
    <p id="something-main-socials-desc">i hate society</p>
    `
    
    somethingMain.append(details, tech, socials)
    
}

renderCard()
renderTech()