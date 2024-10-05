import data from './files/data-4.json'

// переменная для результата
const result = data


// ожидаемый результат
const expectResult = [
    {
        carName: "Mazda CX-5",
        carType: "Внедорожник",
        color: "red",
        smallPrice: "2 800 000",
        lowPrice: "5 000 000"
    },
    {
        carName: "Tayota Rav-4",
        carType: "Внедорожник",
        color: "white",
        smallPrice: "3 300 000",
        lowPrice: "7 000 000"
    },
    {
        carName: "Mitsubishi Outlander",
        carType: "Внедорожник",
        color: "black",
        smallPrice: "2 300 000",
        lowPrice: "4 000 000"
    }
]

export default {
    result,
    expectResult
}