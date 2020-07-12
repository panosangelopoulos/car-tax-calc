export const checkCarTaxType = (date, cc) => {
  const selectedDateFromInput = new Date(date)

  if (selectedDateFromInput <= new Date('2000-12-31')) {
    if (cc <= 300) {
      return 22
    } else if (cc >= 301 && cc <= 785) {
      return 55
    } else if (cc >= 786 && cc <= 1071) {
      return 120
    } else if (cc >= 1072 && cc <= 1357) {
      return 135
    } else if (cc >= 1358 && cc <= 1548) {
      return 225
    } else if (cc >= 1549 && cc <= 1738) {
      return 250
    } else if (cc >= 1739 && cc <= 1928) {
      return 280
    } else if (cc >= 1929 && cc <= 2357) {
      return 615
    } else if (cc >= 2358 && cc <= 3000) {
      return 820
    } else if (cc >= 3001 && cc <= 4000) {
      return 1025
    } else {
      return 1230
    }
  } else if (
    selectedDateFromInput > new Date('2001-01-01') &&
    selectedDateFromInput <= new Date('2005-12-31')
  ) {
    if (cc >= 0 && cc <= 300) {
      return 22
    } else if (cc >= 301 && cc <= 785) {
      return 55
    } else if (cc >= 786 && cc <= 1071) {
      return 120
    } else if (cc >= 1072 && cc <= 1357) {
      return 135
    } else if (cc >= 1358 && cc <= 1548) {
      return 240
    } else if (cc >= 1549 && cc <= 1738) {
      return 265
    } else if (cc >= 1739 && cc <= 1928) {
      return 300
    } else if (cc >= 1929 && cc <= 2357) {
      return 630
    } else if (cc >= 2358 && cc <= 3000) {
      return 840
    } else if (cc >= 3001 && cc <= 4000) {
      return 1055
    } else {
      return 1260
    }
  } else if (
    selectedDateFromInput > new Date('2006-01-01') &&
    selectedDateFromInput <= new Date('2010-10-31')
  ) {
    if (cc >= 0 && cc <= 300) {
      return 22
    } else if (cc >= 301 && cc <= 785) {
      return 55
    } else if (cc >= 786 && cc <= 1071) {
      return 120
    } else if (cc >= 1072 && cc <= 1357) {
      return 135
    } else if (cc >= 1358 && cc <= 1548) {
      return 255
    } else if (cc >= 1549 && cc <= 1738) {
      return 280
    } else if (cc >= 1739 && cc <= 1928) {
      return 320
    } else if (cc >= 1929 && cc <= 2357) {
      return 690
    } else if (cc >= 2358 && cc <= 3000) {
      return 920
    } else if (cc >= 3001 && cc <= 4000) {
      return 1150
    } else {
      return 1380
    }
  } else if (selectedDateFromInput > new Date('2010-11-01'))
    return 'No Calculation'
}

export const checkCO2Tax = (co2) => {
  if (co2 <= 90) {
    return 0
  } else if (co2 >= 91 && co2 <= 120) {
    return (co2 * 0.9).toFixed(2)
  } else if (co2 >= 121 && co2 <= 140) {
    return (co2 * 0.98).toFixed(2)
  } else if (co2 >= 141 && co2 <= 160) {
    return (co2 * 1.2).toFixed(2)
  } else if (co2 >= 161 && co2 <= 180) {
    return (co2 * 1.85).toFixed(2)
  } else if (co2 >= 181 && co2 <= 200) {
    return (co2 * 2.45).toFixed(2)
  } else if (co2 >= 201 && co2 <= 250) {
    return (co2 * 3.05).toFixed(2)
  } else if (co2 >= 251) {
    return (co2 * 3.72).toFixed(2)
  }
}
