import axios from "axios";

async function fetchUserData(username) {
  try{
    const response = await axios.get(`https://api.github.com/users/${username}`)
    return response.data

  } catch(error) {
    console.log(error)
  }
}

export default fetchUserData;