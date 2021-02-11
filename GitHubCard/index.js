/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
axios.get('https://api.github.com/users/DomenicScarcella')
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/



/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [];

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/
function userCardMaker (object) {
  const divCard = document.createElement('div')
  const imgUser = document.createElement('img')
  const divInfo = document.createElement('div')
  const h3Name = document.createElement('h3')
  const pUsername = document.createElement('p')
  const pLoc = document.createElement('p')
  const pProf = document.createElement('p')
  const aProfLink = document.createElement('a')
  const pFollowers = document.createElement('p')
  const pFollowing = document.createElement('p')
  const pBio = document.createElement('p')
  
  divCard.classList.add('card')
  divInfo.classList.add('card-info')
  h3Name.classList.add('name')
  pUsername.classList.add('username')

  imgUser.src = object.avatar_url
  h3Name.textContent = object.h3Name
  pUsername.textContent = object.login
  pLoc.textContent = `Location: ${object.location}`
  pProf.textContent = `Profile: ${aProfLink}`
  aProfLink.href = object.html_url
  pFollowers.textContent = `Followers: ${object.followers}`
  pFollowing.textContent = `Following: ${object.following}`
  pBio.textContent = `Bio: ${object.bio}`

  divCard.appendChild(imgUser)
  divCard.appendChild(divInfo)
  divInfo.appendChild(h3Name)
  divInfo.appendChild(pUsername)
  divInfo.appendChild(pLoc)
  divInfo.appendChild(pProf)
  divInfo.appendChild(pFollowers)
  divInfo.appendChild(pFollowing)
  divInfo.appendChild(pBio)
  pProf.appendChild(aProfLink)

  return userCard;
}


/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
