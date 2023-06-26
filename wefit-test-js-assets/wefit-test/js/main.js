const menuChange = () => {
    const menuElement =  document.getElementsByClassName('btn-group-vertical')[0]
    
    menuElement.style.flexDirection = 'row'
    menuElement.style.alignItems = 'center'    
    menuElement.style.gap = '10px'

    const childrenMenu = menuElement.children

    for(let i = 0; i < childrenMenu.length; i++){
        childrenMenu[i].style.borderRadius = '5px'
        childrenMenu[i].style.width = 'auto'
    }
}

const headerChange = () => {
    const headerElement = document.getElementsByClassName('jumbotron')[0]
    
    headerElement.style.backgroundColor = '#6b757e'
    headerElement.style.textAlign = 'end'

    const childrenHeader = headerElement.children

    for(let i = 0; i < childrenHeader.length; i++){
        childrenHeader[i].style.color = 'white'
        childrenHeader[i].style.textAlign = 'end'
    }

    const linkBotton = childrenHeader[4]
    
    linkBotton.classList.remove('btn-primary')
    linkBotton.classList.add('btn-success')
}

const cardsChange = () => {
    const cardsElements = document.getElementsByClassName('card')

    const card1 = cardsElements[0]
    const card2 = cardsElements[1]
    const card4 = cardsElements[3]

    const cardClone1 = cardsElements[0].cloneNode(true)
    const cardClone2 = cardsElements[1].cloneNode(true)
    const cardClone4 = cardsElements[3].cloneNode(true)
    
    while(card1.firstChild){
        card1.removeChild(card1.firstChild)
    }    
    card1.append(...cardClone4.children);

    while(card2.firstChild){
        card2.removeChild(card2.firstChild)
    }    
    card2.append(...cardClone1.children);

    while(card4.firstChild){
        card4.removeChild(card4.firstChild)
    }    
    card4.append(...cardClone2.children);

    const linkBotton = card2.children[1].children[2]
    
    linkBotton.classList.remove('btn-primary')
    linkBotton.classList.add('btn-success')
}

const listChange = () => {
    const listElement = document.getElementsByClassName('list-group')[0]

    const newItem1 = document.createElement('li')
    const newItem2 = document.createElement('li')
    
    newItem1.textContent = 'Quarto item';
    newItem2.textContent = 'Quinto item';

    newItem1.classList.add('list-group-item')
    newItem2.classList.add('list-group-item')

    listElement.append(newItem1)
    listElement.append(newItem2)

    const childrenList = listElement.children

    childrenList[0].classList.remove('active')
    childrenList[3].classList.add('active')
}


menuChange()
headerChange()
cardsChange()
listChange()