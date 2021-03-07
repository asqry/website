import axios from 'axios';

export function getUserDetails() {
  return axios.get('http://localhost:6969/api/auth', { withCredentials: true });
}

export function getLoggedIn() {
  return axios.get('http://localhost:6969/api/discord/guilds', {
    withCredentials: true,
  });
}
