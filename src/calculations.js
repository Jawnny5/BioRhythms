import dayjs from 'dayjs'


function calculateBio(birthdate, targetDate, cycle){
  const birthDay = dayjs(birthdate).startOf('day')
  const targetDay = dayjs(targetDate).startOf('day')
  const diff = targetDay.diff(birthDay, 'days')
  return Math.sin(2 * Math.PI * diff / cycle)
}

export function calculateBios(birthdate, targetDate){
  return {
    date: targetDate,
    physical: calculateBio(birthdate, targetDate, 23),
    emotional: calculateBio(birthdate, targetDate, 28),
    intellectual: calculateBio(birthdate, targetDate, 33),
  }
}

export function calculateBiosSeries(birthdate, startDate, size){
  const series = []
  const startDay = dayjs(startDate).startOf('day')
  for (let i = 0; i < size; i++){
    const targetDate = startDay.add(i, 'days').toISOString()
    series.push(calculateBios(birthdate, targetDate))
  }
  return series
}

