
export const exercisesOptions ={
  method: 'GET',
  url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPart/back',
  params: {limit: '10'},
  headers: {
    'X-RapidAPI-Key': 'e5fdee1cb3mshfd8618c98db35a1p115c08jsn9e83d28f001c',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};
export const fetchData=async(url,Option)=>{
    const response = await fetch(url,Option)
    const data = await response.json()
    return data
}