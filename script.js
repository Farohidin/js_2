

let num_1 = prompt("Son kiriting")
while (isNaN(num_1) || num_1 / 1 == 0) {
    num_1 = +prompt('Bu son emas iltimos son kiriting')
}
let num_2 = +prompt("Soning darajasini kiriting")

while (isNaN(num_2) || num_2 / 1 == 0) {
    num_2 = +prompt("Boshqatdan kiriting bu sonning darajasi emas")
}
if (num_1 * num_2 ) {
    alert("Javobi = " + num_1 ** num_2)
}