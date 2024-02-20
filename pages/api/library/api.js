// api.js
import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';
console.log(API_BASE_URL)
export const storePrompt = (user_id, prompt_string) => {
  return axios.post(`${API_BASE_URL}/library/store_prompt`, {
    user_id,
    prompt_string,
  });
};

export const reactivatePrompt = (promptId) => {
  return axios.get(`${API_BASE_URL}/library/reactivate_prompt/${promptId}`);
};

export const deletePrompt = (promptId) => {
  return axios.post(`${API_BASE_URL}/library/delete_prompt/${promptId}`);
};

export const listPrompts = () => {
  return axios.get(`${API_BASE_URL}/library/list_prompts`);
};

export const contactMessage = (name, email, message) => {
  return axios.post(`${API_BASE_URL}/contact`, {
    name_string: name,
    email_string: email,
    message_string: message,
  });
};
