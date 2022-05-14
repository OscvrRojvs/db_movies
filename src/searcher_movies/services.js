const URL = 'https://www.omdbapi.com/?apikey=5b7918c8&s'

export const getApiMovies = async (value) => {
    const request = await fetch(`${URL}=${value}`)
    const response = await request.json()
    return response
}