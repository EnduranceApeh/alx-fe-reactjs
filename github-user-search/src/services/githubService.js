import axios from "axios";

const githubApi = axios.create({
  baseURL: "https://api.github.com",
});

const fetchUserData = async (username, location, minRepos) => {
  let query = username || "";

  if (location) query += `+location:${location}`;
  if (minRepos) query += `+repos:>=${minRepos}`;

  const response = await githubApi.get(`/search/users?q=${query}`);
  return response.data; // contains items array
};

export default fetchUserData;
