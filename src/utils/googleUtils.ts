export const getGoogleAuthURL = () => {
  const url = import.meta.env.VITE_GOOGLE_FORWARD_URL;
  const query = {
    client_id: import.meta.env.VITE_CLIENT_ID as string,
    redirect_uri: import.meta.env.VITE_REDIRECT_URI as string,
    response_type: import.meta.env.VITE_RESPONSE_TYPE as string,
    scope: [
      "https://www.googleapis.com/auth/userinfo.profile",
      "https://www.googleapis.com/auth/userinfo.email",
    ].join(" "),
  };

  const queryString = new URLSearchParams(query);
  console.log(queryString.toString());

  return `${url}?${queryString}`;
};
