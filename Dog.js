// Create the Dog class here


class Dog {
    constructor(data) {
        Object.assign(this, data)

    }
    setHasBeenLiked() {
        this.hasBeenLiked = true
    }
    setHasBeenSwiped() {
        this.hasBeenSwiped = true
    }

    getDogHtml() {
        const {name, avatar, age, bio} = this

        return `
            <div class="image-card">
                <img src="${avatar}" alt=""  class="card-img">
                <div class="flex">
                    <h3 class="name">${name}, <span class="age"> ${age}</span></h3>
                    <p class="bio">${bio}</p>
                </div>
                <div class="like-el" id="like-div">like</div>
                <div class="nope-el" id="nope-div">nope</div>
            </div>
            <div class="dog-btn">
                <button class="nope"><i class="fa fa-times" aria-hidden="true" id="dislike-btn"></i></button>
                <button class="like" ><i class="fa fa-heart" aria-hidden="true" id="like-btn"></i></button>
            </div>`
    }
}

// class Liked{
//     constructor(data) {
//         Object.assign(this, data)
//     }

//     getLikedDogsHtml() {
//         const {name, avatar, age, bio} = this

//         return `
//             <div class="profile">
//             <img src="${avatar}" alt="">
//             <div class="profile-inner">
//                 <h3>${name}, <span class="age"> ${age}</span></h3>
//                 <p>${bio}</p>
//                 <button class="unlike-btn">unlike</button>
//             </div> `
//     }

// }



export {Dog}