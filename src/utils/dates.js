import moment from 'moment/min/moment.min'

function formatDate(date, format) {
  return moment(date).format(format)
}

export const format = {
  monthDayYear (date) {
    let formatString = 'MMMM DD, YYYY'
    return formatDate(date, formatString)
  },
  monthDayYearTime (date) {
    let formatString = 'MMMM Do YYYY, h:mm a'
    return formatDate(date, formatString)
  }
}