const adultIncrease = document.getElementById ('adult-increase')
const adultDecrease = document.getElementById('ault-decrease')
const adultCount = document.getElementById('adult-count')

const childIncrease = document.getElementById('child-increase')
const childDecrease = document.getElementById('child-decrease')
const childCount = document.getElementById('child-count')

const newBornIncrease = document.getElementById('newborn-increase')
const newBornDecrease = document.getElementById('newborn-decrease')
const newBornCount = document.getElementById('newborn-count')


const Total = document.getElementById('total')

function increse (id){
    if(getTotal () < 9){
        id.innerText = parseInt(id.innerText) + 1
        updateTotal()
    }
    else{
        alert('حداکثر تعداد مسافران 9 نفر می باشد.')
    }
}

function decrease (id){
    if(id.innerText > 0)
    id.innerText = parseInt(id.innerText) - 1
}

function getTotal (){
     return (parseInt(adultCount.innerText)+
     parseInt(childCount.innerText)+
     parseInt(newBornCount.innerText))
}

function updateTotal(){
    Total.innerText = getTotal()
}

/* for adult passengers */
adultIncrease.addEventListener('click' , () =>{
    increse (adultCount)
})

adultDecrease.addEventListener('click' , () =>{
    decrease (adultCount)
})
/*for child passengers */
childIncrease.addEventListener('click' , () =>{
    increse (childCount)
})

childDecrease.addEventListener('click' , () =>{
    decrease (childCount)
})
/*for new born passengers */
newBornIncrease.addEventListener('click', () =>{
    increse (newBornCount)
})

newBornDecrease.addEventListener('click', () =>{
    decrease (newBornCount)
})