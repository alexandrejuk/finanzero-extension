// function parserEmail() {
//   const uniqueId = new Date().getTime()
//   const email = localStorage.getItem('email')
//   if(email) {
//     return email.replace('@', `+${uniqueId}@`)
//   }
//   return `quality.adivisor+${uniqueId}@finanzero.com.br`
// }

// const dataMocks = {
//   name: localStorage.getItem('name') || 'Teste Quality Adivisor Finanzero',
//   email: parserEmail(),
//   phone: localStorage.getItem('phone') ||'11987654321',
//   zipcode: localStorage.getItem('zipcode') || '09784385',
//   password: 'parati',
//   text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, minus.',
//   appliedAmount: localStorage.getItem('appliedAmount') || '1500',
// }

// const options = {
//   'appliedAmount': dataMocks.appliedAmount,
//   'full-name': dataMocks.name, 
//   'fullname': dataMocks.name, 
//   'firstname': dataMocks.name[0],
//   'first-name': dataMocks.name[0],
//   'last-name': dataMocks.name[dataMocks.name.length -1],
//   'lastname': dataMocks.name[dataMocks.name.length -1],
//   'surname': dataMocks.name[1],
//   'secondname': dataMocks.name[1],
//   'email': dataMocks.email, 
//   'organization': 'Company Name Finanzero', 
//   'organisation': 'Company Name Finanzero',
//   'company': 'Company Name Finanzero',
//   'name': dataMocks.name,
//   'telephone': 'telephone',
// 	'phone': dataMocks.phone,
//   'fax': dataMocks.phone,
//   'number':'number',
//   'integer': 'integer',
//   'number': 'number',
//   'numeric': 'numeric',
//   'income': 'income',
//   'price': 'price',
//   'qty': 'qty',
//   'quantity': 'quantity',
//   'zip': dataMocks.zipcode,
//   'zipcode': dataMocks.zipcode,
//   'zipCode': dataMocks.zipcode,
// }

// function getFieldsElement() {
//   const elements = document.querySelectorAll('input, select, textarea')
//   if(elements) {
//     return elements
//   }

//   return []
// }

// function dispatchValue(element, value) {
//   element.value = value
//   element.dispatchEvent(new Event('change'));
// }

// function fillField (field) {
//   const value = (
//     dataMocks[field.name]
//       ? dataMocks[field.name]
//       : dataMocks[field.type]
//   )

//   if(field.tagName !== 'SELECT' && field.type !== 'checkbox' && field.type !== 'radio') {
//     dispatchValue(field, value)
//   }
  
//   // if(field.tagName === 'SELECT' && field.type !== 'checkbox' && field.type !== 'radio') {
//   //   field.val(value)
//   // }

//   // if(field.tagName !== 'SELECT' && field.type === 'checkbox' && field.type !== 'radio') {
//   //   field.val(value)
//   // }

//   // if(field.tagName !== 'SELECT' && field.type !== 'checkbox' && field.type === 'radio') {
//   //   field.val(value)
//   // }
// }

// const mainElement = document.getElementById("test")

// if(mainElement) {
//   mainElement.addEventListener('click', () => {
//     console.log(`cima`,)
//     function modifyDOM() {
//       console.log(`------dentro`,)
//       getInputElements().forEach(function(item) {
//         console.log(`------dentro`, item)
//         fillField(item)
//       })
//       return document.body.innerHTML;
//     }
  
//     chrome.tabs.executeScript({ code: '(' + modifyDOM + ')();' }, (results) => {
//       console.log(`result`, results)
//     });
//   });
// }
