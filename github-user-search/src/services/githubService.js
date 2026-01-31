import axios from "axios";

async function fetchUserData(username, location, repoCount) {
  try {
    const query = `${username}+location:${location}+repos:>${repoCount}`;
    const url = `https://api.github.com/search/users?q=${query}&per_page=30`;
    const response = await axios.get(url)
    console.log(response)
    return response.data

  } catch (error) {
    console.log(error)
  }
}

export default fetchUserData;