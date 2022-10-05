export const promptNumber = (pregunta = "") => {
  const num = parseInt(prompt(pregunta));

  if (isNaN(num)) return promptNumber(pregunta);

  return num;
};
