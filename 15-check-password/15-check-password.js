function checkPassword(s) {
  const regex =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%])[A-Za-z0-9!@#$%]{8,16}$/;
  return regex.test(s);
}
