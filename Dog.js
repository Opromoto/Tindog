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
                <img src="badge-like.png" class="like-badge" id="like-badge">
                <img src="badge-nope.png" class="nope-badge" id="nope-badge">
            </div>
            <div class="dog-btn">
                <div class="nope-btn btns">
                    <img src="./icon-cross.png"  id="nope-btn">
                </div>
                <div class="like-btn btns" >
                    <img src="icon-heart.png" id="like-btn">
                </div>                
            </div>`
    }
}


export {Dog}