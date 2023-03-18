export const agregarCeroSiEsNecesario = valor => {
  if (valor < 10) {
    return "0" + valor;
  } else {
    return "" + valor;
  }
}

export const milisecondssToMinutesYSeconds = (milisegundos) => {
  const minutos = parseInt(milisegundos / 1000 / 60);
  milisegundos -= minutos * 60 * 1000;
  const segundos = (milisegundos / 1000);
  return `${agregarCeroSiEsNecesario(minutos)}:${agregarCeroSiEsNecesario(segundos.toFixed(0))}`;
};

export const getFormatDate = (dateInput) => {
  let date = new Date(dateInput);
  return `${agregarCeroSiEsNecesario(date.getDay())}/${agregarCeroSiEsNecesario(date.getMonth())}/${date.getFullYear()}`;
};

export const goUp = () => {
  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
}