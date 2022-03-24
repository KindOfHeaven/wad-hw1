export const formatDate = (date, options = {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
}) => new Date(Date.parse(date.split('T')[0].replace(/-/g, '/'))).toLocaleDateString('ru-RU', options)