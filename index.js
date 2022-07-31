const page = document.getElementById("page")
const submitBtn = document.getElementById("submit-btn")
const rateDiv = document.getElementById("rate")
let rateBtns = rateDiv.getElementsByClassName("rate-btn")
const selectRating = document.getElementById("select-rating")
let selectedRating = ""

for (let i = 0; i < rateBtns.length; i++) {
    rateBtns[i].addEventListener("click", function () {
        let current = document.getElementsByClassName("active")
        if (current.length > 0) {
            current[0].className = current[0].className.replace(" active", "")
        }

        this.className += " active"

        selectedRating = this.value
        
        submitBtn.addEventListener("click", function() {
            page.innerHTML = `
                <div id="thank-page">
                    <img id="thank-img" src="./images/illustration-thank-you.svg" alt="thank you">
                     <p id="user-rating">You selected ${selectedRating} out of 5</p>
                     <h1>Thank you!</h1>
                     <p id="thank-text" >We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
                </div>`
        })
    })
}

submitBtn.addEventListener("click", function() {
    selectRating.innerHTML = `<p id="select-alert">*You have to select a rating</p>`
})
