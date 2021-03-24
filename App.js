const buttonen = document.querySelector('.button1');
const submit = document.querySelector('.buttons');
const mode = document.querySelector('.modal-container');
const close = document.querySelector('.close')
const nameInput = document.getElementById('change')
const nameOutput = document.getElementById('firsthead')
const userInput = document.querySelector('#useredit')
const userOutput = document.querySelector('.name')
const bioInput = document.querySelector('#biology')
const bioOutput = document.querySelector('.profiler')
//  const editForm = document.querySelector('.edit')


buttonen.addEventListener('click' ,() => {
   mode.classList.add('show');

}) 

close.addEventListener('click',() => {
   mode.classList.remove('show')
   })

   submit.addEventListener('click',() => {
    nameOutput.innerHTML = nameInput.value
  
   }) 

   submit.addEventListener('click', () => {
      userOutput.innerHTML = userInput.value
   }) 
   
   submit.addEventListener('click', () => {
      console.log(bioInput.value)
     bioOutput.innerHTML = bioInput.value
   })