const axios = require('axios');

exports.handler = async function(event, context) {
   const params = JSON.parse(event.body);
    const { title, type, year, page, id } = params;
    const OMDB_API_KEY = "7035c60c";
  
    const url = id
      ? `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&i=${id}&plot=full`
      : `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${title}&type=${type}&y=${year}&page=${page}`;
  
      try {
        const res = await axios.get(url);
        console.log(res.data);
  
        if (res.data.Error) {
        //   rej(res.data.Error);
            return {
                statusCode :200,
                body : res.data.Error
            }
        }
        // res(response);
        return {
            statusCode :200,
            body : JSON.stringify(res.data)
        }
      } catch (e) {
        console.log(e.res.status);
        // rej(e.msaage);
        return {
            statusCode : e.res.status,
            body: e.message

        }
      }  
     
}