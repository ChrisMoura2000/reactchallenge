const postAPI = async (reqBody) => {
  const endPoint = "https://api.jungledevs.com/api/v1/challenge-newsletter/";

  const options = {
    mode: "cors",
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(reqBody),
  };
  try {
    const req = await fetch(endPoint, options);
    const response = await req.json();
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
};

module.exports = postAPI;
