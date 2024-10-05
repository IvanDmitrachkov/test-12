import data from './files/data-2.json'

// переменная для результата
const result = data


// ожидаемый результат
const expectResult = {
    name: "Иван",
    surname: "Дмитрачков",
    age: "30",
    avatar: "/images/ava.png",
    role: "team lead",
    github: "/githab/readme.md",
    gitHubIsActive: true
}
export default {
    result,
    expectResult
}