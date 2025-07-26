export function toPersianDate(gregorianDate: string): string {
  const gDate = new Date(gregorianDate);
  const gYear = gDate.getFullYear();
  const gMonth = gDate.getMonth() + 1;
  const gDay = gDate.getDate();

  const g_d_m = [
    0,
    31,
    (gYear % 4 === 0 && gYear % 100 !== 0) || gYear % 400 === 0 ? 29 : 28,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31,
  ];
  const gy = gYear - 1600;
  const gm = gMonth - 1;
  const gd = gDay - 1;

  let g_day_no =
    365 * gy +
    Math.floor((gy + 3) / 4) -
    Math.floor((gy + 99) / 100) +
    Math.floor((gy + 399) / 400);

  for (let i = 0; i < gm; ++i) g_day_no += g_d_m[i];
  g_day_no += gd;

  let j_day_no = g_day_no - 79;

  const j_np = Math.floor(j_day_no / 12053);
  j_day_no %= 12053;

  let jy = 979 + 33 * j_np + 4 * Math.floor(j_day_no / 1461);
  j_day_no %= 1461;

  if (j_day_no >= 366) {
    jy += Math.floor((j_day_no - 1) / 365);
    j_day_no = (j_day_no - 1) % 365;
  }

  const j_months = [31, 31, 31, 31, 31, 31, 30, 30, 30, 30, 30, 29];
  let jm = 0;
  let jd = 0;

  for (let i = 0; i < 12; ++i) {
    if (j_day_no < j_months[i]) {
      jm = i + 1;
      jd = j_day_no + 1;
      break;
    }
    j_day_no -= j_months[i];
  }

  return `${jy}/${jm.toString().padStart(2, "0")}/${jd
    .toString()
    .padStart(2, "0")}`;
}

const date = "2025-07-26T12:36:02.933Z";
console.log(toPersianDate(date));
