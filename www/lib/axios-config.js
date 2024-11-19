// lib/axios-config.js

import axios from 'axios';

// Configuração base do axios
const api = axios.create({
  baseURL: 'http://localhost:8090', // URL base da API Spring Boot
  timeout: 5000, // Tempo limite para as requisições (opcional)
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptador de requisição (opcional: para adicionar token de autenticação ou logs)
api.interceptors.request.use(
  (config) => {
    // Adicione lógica aqui, se necessário, como tokens JWT
    console.log(`Fazendo requisição para ${config.url}`);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Interceptador de resposta (opcional: para tratamento global de erros)
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      console.error(`Erro na resposta: ${error.response.status}`);
    } else {
      console.error('Erro na requisição:', error.message);
    }
    return Promise.reject(error);
  }
);

export default api;
