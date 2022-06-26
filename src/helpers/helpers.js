export const checkDate = (date) => {
  const currentTime = new Date(date).getHours();
  let greetingText = "";
  if (currentTime >= 5 && currentTime < 12) {
    greetingText = "Good Morning";
  } else if (currentTime >= 12 && currentTime < 18) {
    greetingText = "Good Afternoon";
  } else {
    greetingText = "Good Evening";
  }
  return greetingText;
};

export const isValidEmail = (email) => {
  let re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(email)) {
    return true;
  } else {
    return false;
  }
};
