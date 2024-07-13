async function fetchData() {
  try {
    const response = await fetch("https://reqres.in/api/users?id=1")
    const { data: user } = await response.json()
    const defaultCardContent = `
          <img
              src="${user.avatar}"
              alt=""
              class="avatar"
              id ="avatar"
          />
          <div class="user-id">
              <h3><span>#</span>${user.id}</h3>
          </div>
          <h1>${user.last_name}, ${user.first_name}</h1>
          <h2>
              <a id="email" href="mailto:${user.email}">${user.email}</a>
          </h2>
      `
    document.getElementById("default-card").innerHTML = defaultCardContent

    const customCardContent = `
          <div class="card-header">
              <img
                  src="resources/img/lightModeBG.jpg"
                  alt=""
                  class="user-bg"
                  id="user-bg"
              />
          </div>
          <img
              src="${user.avatar}"
              alt=""
              class="avatar"
              id="avatar"
          />
          <div class="card-body" id="card-body">
              <h1>${user.last_name}, ${user.first_name}</h1>
              <div class="user-email">
                  <i class="fa-solid fa-envelope"></i
                  ><a id="email" href="mailto:${user.email}"
                  >${user.email}</a
                  >
              </div>
              <hr />
              <div class="user-id">
                  <h3>#${user.id}</h3>
              </div>
          </div>
      `
    document.getElementById("custom-card").innerHTML = customCardContent
  } catch (error) {
    console.error("Error fetching the user data:", error)
  }
}

fetchData()

// Dark mode
let isDarkMode = false
const darkModeBtn = document.getElementById("darkmode-toggle-btn")
const darkModeBG = "resources/img/darkModeBG.JPG"
const lightModeBG = "resources/img/lightModeBG.JPG"

darkModeBtn.addEventListener("click", () => {
  document.getElementById("container").classList.toggle("darkmode")
  document.getElementById("default-card").classList.toggle("darkmode")
  document.getElementById("custom-card").classList.toggle("darkmode")
  document.getElementById("magic-btn").classList.toggle("darkmode-magic")
  document.getElementById("avatar").classList.toggle("darkmode")
  const userBG = document.getElementById("user-bg")
  userBG.src = isDarkMode ? lightModeBG : darkModeBG

  isDarkMode = !isDarkMode
})

// Toggle for personal design
const magicButton = document.getElementById("magic-btn")
magicButton.addEventListener("click", () => {
  magicButton.classList.toggle("activated")
  document.getElementById("container").classList.toggle("active")
  document.getElementById("default-card").classList.toggle("active")
  document.getElementById("custom-card").classList.toggle("active")
})
