let num = [5, 8, 2, 9, 3]

num.sort()
console.log(num)
console.log(`Nosso vetor tem ${num.length} posições`)
let pos = num.indexOf(1)

if (pos == -1) {
    console.log(`O valor não foi encontrado`)
} else {
    console.log(`O valor 8 está a posição ${pos}`)
}

