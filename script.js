async function fetchAndRenderUserData() {
  try {
    const response = await fetch("https://reqres.in/api/users?id=1")
    const data = await response.json()
    const user = data.data

    const userContent = ` 


            <p><strong>ID:</strong> ${user.id}</p>
            <p><strong>Email:</strong> ${user.email}</p>
            <p><strong>First Name:</strong> ${user.first_name}</p>
            <p><strong>Last Name:</strong> ${user.last_name}</p>
            <img src="${user.avatar}" alt="User Avatar">
        `

    document.getElementById("user-data").innerHTML = userContent
  } catch (error) {
    console.error("Error fetching the user data:", error)
  }
}
//fetchAndRenderUserData()

/*
{
  "data": {
    "id": 1,
    "email": "george.bluth@reqres.in",
    "first_name": "George",
    "last_name": "Bluth",
    "avatar": "https://reqres.in/img/faces/1-image.jpg"
  },
  "support": {
    "url": "https://reqres.in/#support-heading",
    "text": "To keep ReqRes free, contributions towards server costs are appreciated!"
  }
}
*/
