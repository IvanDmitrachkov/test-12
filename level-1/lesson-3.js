import data from './files/data-3.json'

// переменная для результата
const result = data


// ожидаемый результат
const expectResult = [
    {
        carName: "Mazda CX-5",
        carType: "Внедорожник",
        color: "red"
    },
    {
        carName: "Tayota Rav-4",
        carType: "Внедорожник",
        color: "white"
    },
    {
        carName: "Mitsubishi Outlander",
        carType: "Внедорожник",
        color: "black"
    }
]

export default {
    result,
    expectResult
}