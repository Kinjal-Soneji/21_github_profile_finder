const searchInput = document.querySelector(".search-input");
const searchBtn = document.querySelector(".search-btn");
const BASE_URL = "https://api.github.com/users/";
const githubProfileDetails = document.querySelector(".github-profile-details");
const loader = document.querySelector(".loading-text");

function showLoader() {
  loader.classList.add("show");
  githubProfileDetails.classList.add("hide");
}

function removeLoader() {
  loader.classList.remove("show");
  githubProfileDetails.classList.remove("hide");
}

async function fetchGithubProfileDetails() {
  showLoader();
  const response = await fetch(`${BASE_URL}${searchInput.value}`);
  const result = await response.json();

  console.log(result);

  if (result) {
    removeLoader();
    displayProfileDetails(result);
    searchInput.value = '';
  }
}

function displayProfileDetails(getProfileDetails) {
  const { login, avatar_url, public_repos, followers, following, html_url } =
    getProfileDetails;
  githubProfileDetails.innerHTML = `
  <a href=${html_url} class="username" target="_blank">${login}</a>
  <img src=${avatar_url} alt=${login}>
  <p class="repos">Repos: ${public_repos}</p>
  <p class="followers">Followers: ${followers}</p>
  <p class="following">Following: ${following}</p>
  `;
}

// Adding event listener to the button
searchBtn.addEventListener("click", fetchGithubProfileDetails);

// Adding event listener to the input field for enter key press
searchInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    fetchGithubProfileDetails();
  }
});
