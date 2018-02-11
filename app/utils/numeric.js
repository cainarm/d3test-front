export const isNumeric = (n) => !isNaN(parseFloat(n)) && isFinite(n);

export const fillZero = (n) => n < 10 && n > 0 ? `0${n}` : n; 