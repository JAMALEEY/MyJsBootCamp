const panels = document.querySelectorAll('.panel')

// panels.forEach((panel) => {
//         panel.addEventListener('click', () => {
//             console.log(123)
//         })
//     })


for (let panel of panels) {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
}



function removeActiveClasses() {
    for(let panel of panels) {
        panel.classList.remove('active')
    }
}