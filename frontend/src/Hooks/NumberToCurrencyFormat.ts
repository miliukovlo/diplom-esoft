export const NumberToCurrencyFormat = (number: number) => {
    if (typeof number !== 'number') {
        throw new Error('number не число!')
    }
    const formattedNumber = Intl.NumberFormat('ru-RU', {
        style: 'currency',
        currency: 'RUB',
        minimumFractionDigits: 0,
    }).format(number)

    return formattedNumber
}