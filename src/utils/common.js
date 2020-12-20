import axios from "axios";

// return the user data from the session storage
export const getUser = () => {
  console.log(sessionStorage.getItem("user"));
  const userStr = sessionStorage.getItem("user");
  if (userStr) return JSON.parse(userStr);
  else return null;
};

// return the token from the session storage
export const getToken = () => {
  if (sessionStorage.getItem("token")) {
    var started = sessionStorage.getItem("started");
    var diff = Date.now() - started;

    if (diff >= 1000 * 60 * 40) {
      var refreshToken = sessionStorage.getItem("refreshToken");

      axios({
        method: "post",
        url: `${process.env.REACT_APP_BACKEND_URL}/refreshToken`,
        data: {
          refresh: refreshToken,
        },
      })
        .then((response) => {
          //console.log(response.data.access);
          sessionStorage.setItem("token", response.data.access);
          sessionStorage.setItem("started", Date.now());
        })
        .catch((error) => {
          console.log("Something went wrong. Please try again later.");
        });

      return sessionStorage.getItem("token") || null;
    } else {
      return sessionStorage.getItem("token") || null;
    }
  } else {
    return;
  }
};

// remove the token and user from the session storage
export const removeUserSession = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  //localStorage.removeItem('refreshToken');
  localStorage.removeItem("started");
};

// set the token and user from the session storage
export const setUserSession = (token, user) => {
  localStorage.setItem("token", token);
  //localStorage.setItem('refreshToken', token.refresh);
  localStorage.setItem("started", Date.now());
  localStorage.setItem("user", JSON.stringify(user));
};
