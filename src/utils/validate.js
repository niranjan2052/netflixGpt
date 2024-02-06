export const checkValidData = (username = "Default", email, password) => {
  // eslint-disable-next-line no-useless-escape
  const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const isValidPassword =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  const isValidUserName = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(username);

  if (!isValidEmail) return "Email is not Valid";
  if (!isValidPassword) return "Password is not Valid";
  if (!isValidUserName) return "Full Name is not Valid";
  return null;
};
