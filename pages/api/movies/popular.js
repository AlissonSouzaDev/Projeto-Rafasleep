import axios from 'axios';

export default async function handler(req, res) {
  const apiKey = process.env.TMDB_API_KEY;

  try {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/popular`, {
      params: {
        api_key: apiKey,
        language: 'pt-BR',
        page: 1,
      },
    });
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar filmes populares1' });
  }
}