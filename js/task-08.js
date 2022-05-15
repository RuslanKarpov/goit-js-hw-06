const form = document.querySelector(".login-form");
form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {

  event.preventDefault();

  console.log(event.currentTarget)

  const formEl = event.currentTarget.elements;

  if (formEl.email.value === "" || formEl.password.value === "") {
    return alert(" Заповніть всі поля ");
  }
  const email = formEl.email.value;
  const password = formEl.password.value;

  const formData = {
    email, password,
  }
  
  console.log(`email: ${formEl.email.value}, Password: ${formEl.password.value}`);
   
  this.reset();
};  
//     const form = document.querySelector('.login-form');
// const email = form.elements.email.value;
// const password = form.elements.password.value;



// const onFormSubmit = (event) => {
// 	event.preventDefault();
// const {
// 		elements: {
// 			email: { value: email },
// 			password: { value: password },
// 		},
// 	} = event.currentTarget;

// 	!email || !password
// 		? alert('Пожалуйста, заполните ВСЕ поля')
// 		: console.log({ email: password });

// 	form.reset();
// };

// form.addEventListener('submit', onFormSubmit);
    

