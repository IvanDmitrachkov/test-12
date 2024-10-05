import data from './files/data-4.json'

// переменная для результата
const result = data


// ожидаемый результат (отфильтровать, показать только белые)
const expectResult = [
    {
        title: "Tayota Rav-4",
        color: "white"
    },
    {
        title: "Mitsubishi Outlander",
        color: "white"
    }
]

export default {
    result,
    expectResult
}