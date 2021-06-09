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
    circles.forEach((circle, idx) => {
        if(idx < currentActive) {
                circle.classList.add('active')
            } else {
                circle.classList.remove('active')
            }
    })

    const actives = document.querySelectorAll('.active')
    //  -1 to reduce the % that we will attribute to the progress css because without -1 it excedes the circle
    progress.style.width = (actives.length -1) / (circles.length -1) * 100 + '%'
    


        // starting point
    if(currentActive === 1) {
        prev.disabled = true 
        // ending point
    } else if(currentActive === circles.length) {
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false
    }
        
}
    






