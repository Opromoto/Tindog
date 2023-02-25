// Remember to import the data and Dog class!
import {Dog} from './Dog.js'
import {dogs} from './data.js'

const likedProfile = document.getElementById('liked-profile')
const cardEl = document.getElementById('card')

let likedDogsArray = []
let num = 0
let waiting = false

let dog = new Dog(dogs[num])

document.addEventListener('click', e => {
    if (!waiting) {

        if (e.target.id === 'like-btn') {
            waiting = true
            likeDog()
        } else if (e.target.id === 'dislike-btn') {
            waiting = true
            dislikeDog()
        }

    }else if(num === dogs.length - 1) {
        if(e.target.id && e.target.id !== 'paw') {
            likedDogsArray = likedDogsArray.filter((dog) => e.target.id !== `unlike-${dog.name}`)
            renderLikedDogs()
        }
    }
})


const render = () => {
    dog = new Dog(dogs[num])
    cardEl.innerHTML = dog.getDogHtml()
}
render()

const dislikeDog = () => {
    document.getElementById('nope-div').style.display = "block"
    dog.setHasBeenSwiped()

    setTimeout(() => {
        getNextDog()
    }, 1500)
}

const likeDog = () => {
    document.getElementById('like-div').style.display = "block"
    dog.setHasBeenSwiped()
    dog.setHasBeenLiked()

    likedDogsArray.push(dog)

    setTimeout(() => {
        getNextDog()
    }, 1500)
    
}
const getNextDog = () => {
    if(num === dogs.length - 1) {
        waiting = true
        if(likedDogsArray.length) {
            renderLikedDogs()
        }else {
            noLikedDog()
        }
                
    }else {
        num++
        render()
        waiting = false 
    }

}

const getLikedDogs = () => {
    return likedDogsArray.map(each => {

        return `
        <div class="profile">
            <img src="${each.avatar}" alt="">
            <div class="profile-inner">
                <h3>${each.name}, <span class="age"> ${each.age}</span></h3>
                <p>${each.bio}</p>
                <button class="profile-btn" id="unlike-${each.name}">unlike</button>
            </div>
        </div>`


    })

   
}


const renderLikedDogs = () => {
    if(likedDogsArray.length) {
        document.getElementById('liked-card').style.display = 'block'
        cardEl.innerHTML = ''
    
        likedProfile.innerHTML = getLikedDogs().join('')
    } else {
        noLikedDog()
        likedProfile.innerHTML = ''
        document.getElementById('liked-card').style.display = 'none'
    }
    
}

const renderOptions = () => {
    cardEl.innerHTML = `
        <div  class="no-likes align-center">
            <h3>There are no more profiles that you haven't seen</h3>
            <h4>Would you like to review the dogs that you've seen again?</h4>
            <div class="start-over">
                <button class="profile-btn green" id="start">YES</button>
                <button class="profile-btn" id="noLikes">NO</button>
            </div>
        </div>`
    document.getElementById('start').addEventListener('click',start)
    document.getElementById('paw').addEventListener('click',start)
}
const noLikedDog = () => {
    renderOptions()
    document.getElementById('noLikes').addEventListener('click', noLikes)
}



const start = () => {
    num = 0
    render()
    waiting = false
}

const noLikes = () => { 
    
    let string = `
        <div class="no-likes align-center">
            <h3>Please check back soon for more dogs in your area</h3>
        </div>`

        alert('Please check back soon for more dogs in your area')
        cardEl.innerHTML = string
}