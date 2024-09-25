
const url = 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList';

const exerciseOptions = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY,
      'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
    }
  };

export const fetchData = async (url: string, options: RequestInit) => {
    try {
        const res = await fetch(url, options);
        const data = await res.json();
      
        return data;
    } catch (error) {
        console.error(error);
    }
}
