export function useDateFormat() {
  const formatDate = (dateString, locale = 'en-GB') => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    const date = new Date(dateString)
    let formattedDate = new Intl.DateTimeFormat(locale, options).format(date)

    // Remove the comma from the formatted date string
    formattedDate = formattedDate.replace(',', '')

    return formattedDate
  }

  return { formatDate }
}