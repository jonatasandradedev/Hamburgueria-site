

const list = document.querySelector("ul")
const buttonShowAll = document.querySelector(".Show-all")
const buttonmapAll = document.querySelector(".map-All")
const sumAll = document.querySelector(".sum-all")
const FilterAll = document.querySelector(".Filter-All")


function formatCurrency(value) {
    const newValue = value.toLocaleString("pt-br", { 
        style: "currency", currency: "BRL" });

    return newValue
}


function showAll(productsArray) {
    let myLi = ''

    productsArray.forEach((pruduct) => {
        myLi +=
            `
         <li>
            <img src="${pruduct.src}">
            <p>${pruduct.name}</p>
            <p class="item-price">${formatCurrency(pruduct.price)}</p>
        </li>
         `
    })

    list.innerHTML = myLi

}

function mapAllItens() {
    const newPrices = menuOptions.map((product) => ({
        ...product,
        price: product.price * 0.9,
    }))

    showAll(newPrices)

}

function sumAllItens() {
    const totalValue = menuOptions.reduce((acc, curr) => acc + curr.price, 0)

    list.innerHTML = `
         <li>
            <p>O Valor Total dos itens é ${formatCurrency(totalValue)}</p>
        </li>
         `
}


function FilterAllItems() {
    const filterJustVegan = menuOptions.filter((pruduct) => pruduct.vegan)

    showAll(filterJustVegan)

}


buttonShowAll.addEventListener("click", () => showAll(menuOptions))
buttonmapAll.addEventListener("click", mapAllItens)
sumAll.addEventListener("click", sumAllItens)
FilterAll.addEventListener("click", FilterAllItems)










