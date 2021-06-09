const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

let currentActive = 1

next.addEventListener('click', () => {
    currentActive ++;
    // when the current active is 5 it will be returned to final number 4(cicrle)
    if(currentActive > circles.length ) {
        currentActive = circles.length
    }

    update()
})



prev.addEventListener('click', () => {
    currentActive --;
    // when the current active is 5 it will be returned to final number 4(cicrle)
    if(currentActive < 1 ) {
        currentActive = 1
    }

    

    update()


})


function update(){
        for (let circle of circles && let circle of ) {
            if (idx < currentActive) {
                circle.classList.add('active')
            } else {
                circle.classList.remove('active')
            }
        }

}


