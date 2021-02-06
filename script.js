console.log('Work')

const form = document.querySelector('.bot__form form')
const db = {
  'Как дела?':'Отлично',
  'Сколько тебе лет?':0
}

const animationType = 'animate__pulse'
const botAnswer = document.getElementById('bot__answer')

function handleAnimationEnd(event) {
      botAnswer.classList.remove(animationType);
}

form.addEventListener('submit', (event) => {
  //отменяем автоматическую перезагрузку страницы после клика на кнопку
  event.preventDefault()
  //event.target.bottext - input элемент
  //form === event.target
  const value = event.target.bottext.value
  
  if(value) {
    const answer = db[value]

    if (answer !== undefined) {
      botAnswer.innerText = answer
    } else {
      botAnswer.innerText = 'Хз'
    }
  }  

  botAnswer.classList.add(animationType)  
  botAnswer.addEventListener('animationend', handleAnimationEnd, {once: true});
}) 



 