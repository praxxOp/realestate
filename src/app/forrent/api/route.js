 export async function GET(){
    const baseUrl = "https://bayut.p.rapidapi.com";
    const res = await fetch(
      `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=8`,
      {
        headers: {
          "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_API_KEY ,
          "X-RapidAPI-Host": "bayut.p.rapidapi.com",
        },
      }
    );
    const data = await res.json();
    return Response.json({data});
}