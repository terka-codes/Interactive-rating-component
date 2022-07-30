const page = document.getElementById("page")
const submitBtn = document.getElementById("submit-btn")

submitBtn.addEventListener("click", function(e) {
    page.innerHTML = `
        <img src="./images/illustration-thank-you.svg" alt="thank you">
        <p id="user-rating">You selected <a id="insert-rating"></a> out of 5</p>
        <h1>Thank you!</h1>
        <p>We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>`
})
