const letter1 = document.getElementById('letter1')
const letter2 = document.getElementById('letter2')
const letter3 = document.getElementById('letter3')
const letter4 = document.getElementById('letter4')
const letter5 = document.getElementById('letter5')
const letter6 = document.getElementById('letter6')
const letter7 = document.getElementById('letter7')
const letter8 = document.getElementById('letter8')

const pic = document.getElementById('dessert-img')

const misslet1 = document.getElementById('misslet1')
const misslet2 = document.getElementById('misslet2')

const check1 = document.getElementById('check1')
const check2 = document.getElementById('check2')

const video = document.getElementById('dessert-video')

const caption = document.getElementById('caption')

video.addEventListener('click', function() {
    video.play()
    setTimeout(() => {
        caption.style.visibility = 'visible'
    }, 1900);

    setTimeout(() => {
        caption.style.visibility = 'hidden'
    }, 4000);
})

pic.addEventListener('click', function() {
    const imgSound = document.getElementById('pic-sound')
    imgSound.play()
})

letter1.addEventListener('keyup', (e) => {
    if (letter1.value === "E" || letter1.value === "e") {
        letter1.style.backgroundColor = 'lime'
        letter1.style.color = 'fuchsia'
        const audio = document.getElementById('right')
        audio.play()
        letter2.focus()
    }
    else { letter1.style.backgroundColor = 'red'
           letter1.style.color = 'yellow'
             const audio = document.getElementById('wrong')
           audio.play()
        }
})



letter2.addEventListener('keyup', (e) => {
    if (letter2.value === "M" || letter2.value === "m") {
        letter2.style.backgroundColor = 'lime'
        letter2.style.color = 'fuchsia'
        const audio = document.getElementById('right')
        audio.play()
        letter3.focus()
    }
    else { letter2.style.backgroundColor = 'red'
           letter2.style.color = 'yellow'
             const audio = document.getElementById('wrong')
           audio.play()
        }
})

letter3.addEventListener('keyup', (e) => {
    if (letter3.value === "P" || letter3.value === "p") {
        letter3.style.backgroundColor = 'lime'
        letter3.style.color = 'fuchsia'
        const audio = document.getElementById('right')
        audio.play()
        letter4.focus()
    }
    else { letter3.style.backgroundColor = 'red'
           letter3.style.color = 'yellow' 
           const audio = document.getElementById('wrong')
           audio.play()
        }
})

letter4.addEventListener('keyup', (e) => {
    if (letter4.value === "A" || letter4.value === "a") {
        letter4.style.backgroundColor = 'lime'
        letter4.style.color = 'fuchsia'
        const audio = document.getElementById('right')
        audio.play()
        letter5.focus()
    }
    else { letter4.style.backgroundColor = 'red'
           letter4.style.color = 'yellow'
             const audio = document.getElementById('wrong')
           audio.play()
        }
})

letter5.addEventListener('keyup', (e) => {
    if (letter5.value === "N" || letter5.value === "n") {
        letter5.style.backgroundColor = 'lime'
        letter5.style.color = 'fuchsia'
        const audio = document.getElementById('right')
        audio.play()
        letter6.focus()
    }
    else { letter5.style.backgroundColor = 'red'
           letter5.style.color = 'yellow'
             const audio = document.getElementById('wrong')
           audio.play()
        }
})


letter6.addEventListener('keyup', (e) => {
    if (letter6.value === "A" || letter6.value === "a") {
        letter6.style.backgroundColor = 'lime'
        letter6.style.color = 'fuchsia'
        const audio = document.getElementById('right')
        audio.play()
        letter7.focus()
    }
    else { letter6.style.backgroundColor = 'red'
           letter6.style.color = 'yellow'
             const audio = document.getElementById('wrong')
           audio.play()
        }
})

letter7.addEventListener('keyup', (e) => {
    if (letter7.value === "D" || letter7.value === "d") {
        letter7.style.backgroundColor = 'lime'
        letter7.style.color = 'fuchsia'
        const audio = document.getElementById('right')
        audio.play()
        letter8.focus()
    }
    else { letter7.style.backgroundColor = 'red'
           letter7.style.color = 'yellow'
             const audio = document.getElementById('wrong')
           audio.play()
           letter7.disbled = true
        }
})

letter8.addEventListener('keyup', (e) => {
    if (letter8.value === "A" || letter8.value === "a") {
        createConfetti()
        letter8.style.backgroundColor = 'lime'
        letter8.style.color = 'fuchsia'
        const audio = document.getElementById('right2')
        audio.play()
    }
    else { letter8.style.backgroundColor = 'red'
           letter8.style.color = 'yellow'
             const audio = document.getElementById('wrong')
           audio.play()
           letter8.disbled = true
        }
})

misslet1.addEventListener('keyup', (e) => {
    if (misslet1.value === "E" || misslet1.value === "e") {
        createConfetti()
        check1.style.visibility = 'visible'
        const audio = document.getElementById('right2')
        audio.play()
        misslet2.focus()
    }
})

misslet2.addEventListener('keyup', (e) => {
    if (misslet2.value === "E" || misslet2.value === "e") {
        createConfetti()
        check2.style.visibility = 'visible'
        const audio = document.getElementById('right2')
        audio.play()
        misslet2.disabled = true
    }
})
