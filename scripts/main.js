let header_styling = document.styleSheets[2]


// start : Clicking on arrows

let moving_ball
let trace = 0
let balls = []
let welcomes_colors = []

for (let i = 0; i < header_styling.cssRules.length; i++) {
    if (header_styling.cssRules[i].selectorText === '.header > span:last-of-type') {
        moving_ball = header_styling.cssRules[i]
    }

    if (header_styling.cssRules[i].selectorText === `.header > span:nth-of-type(1)`) {
        balls.push(header_styling.cssRules[i])
        balls.push(header_styling.cssRules[i + 1])
        balls.push(header_styling.cssRules[i + 2])
    }

    if (header_styling.cssRules[i].selectorText === '.header .welcome1') {
        welcomes_colors.push(header_styling.cssRules[i])
        welcomes_colors.push(header_styling.cssRules[i + 1])
        welcomes_colors.push(header_styling.cssRules[i + 2])

    }

}


let l_arrow = document.querySelector('.header .arrow.left')
let r_arrow = document.querySelector('.header .arrow.right')
let welcomes = [document.querySelector('.header .welcome1'),
                document.querySelector('.header .welcome2'),
                document.querySelector('.header .welcome3') ]



l_arrow.onclick = function() {
    trace -= 1
    if (trace < 0) {
        trace = 2
    }
    for (let i = 0; i < 3; i++) {
        welcomes[i].classList.remove('active')
        
    }
    welcomes[trace].classList.add('active')
    moving_ball.style.left = balls[trace].style.left
    moving_ball.style.borderColor = welcomes_colors[trace].style.backgroundColor
    moving_ball.style.backgroundColor = welcomes_colors[trace].style.backgroundColor
    // bar.style.backgroundColor = welcomes_colors[trace].style.backgroundColor

}      


r_arrow.onclick = function() {
    trace += 1
    if (trace >= 3) {
        trace = 0
    }
    for (let i = 0; i < 3; i++) {
        welcomes[i].classList.remove('active')
        
    }
    welcomes[trace].classList.add('active')
    moving_ball.style.left = balls[trace].style.left
    moving_ball.style.borderColor = welcomes_colors[trace].style.backgroundColor
    moving_ball.style.backgroundColor = welcomes_colors[trace].style.backgroundColor

}        


// end : Clicking on arrows

//start : menu



//end : menu