
function modifyDOM() {
  function randomDocumentPersonalNumber() {
    const num1 = randomPad();
    const num2 = randomPad();
    const num3 = randomPad();
    const dig1 = dig(num1, num2, num3);
    const dig2 = dig(num1, num2, num3, dig1);
   
    return `${num1}${num2}${num3}${dig1}${dig2}`;
  };
  
  function dig(n1, n2, n3, n4) { 
    const nums = n1.split("").concat(n2.split(""), n3.split(""));
    if (n4 !== undefined){
      nums[9] = n4;
    };
    
    let x = 0;
    for (let i = (n4 !== undefined ? 11:10), j = 0; i >= 2; i--, j++) {
      x += parseInt(nums[j]) * i;
    };
    
    const y = x % 11;
    return y < 2 ? 0 : 11 - y; 
  };
  
  function randomPad() {
    const aleat = Math.floor(Math.random() * 999);
    return ("" + aleat).padStart(3, '0'); 
  };
  
  const dataMocks = {
    companyName: 'Company Name Finanzero Quality Assurance',
    name: 'Teste Quality Assurance Finanzero',
    email: `quality.assurance+${new Date().getTime()}@finanzero.com.br`,
    phone: '11987654321',
    zipcode: '01310200',
    password: 'parati',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, minus.',
    appliedAmount: '1500',
    agency: '1234',
    accountNumber: '12346',
    accountNumberDigit: '9',
    address1: 'Av. Paulista',
    address2: 'Conj. 2110',
    neighbourhood: 'Bela Vista',
    streetNumber: '1499',
    city: 'Bela Vista',
    monthlyIncome: '2543',
    maxInstallment: '762',
    cellPhoneNumber: '11987654321',
    personalNumber: randomDocumentPersonalNumber(),
    RG: '244173096',
    placeOfBirth: 'São Paulo',
    mothersName: 'Catarina Josefa da Costa',
  };

  const options = {
    'address1': dataMocks.address1,
    'address2': dataMocks.address2,
    'neighbourhood': dataMocks.neighbourhood,
    'streetNumber': dataMocks.streetNumber,
    'city': dataMocks.city,
    'agency': dataMocks.agency,
    'accountNumber': dataMocks.accountNumber,
    'accountNumber-digit': dataMocks.accountNumberDigit,
    'appliedAmount': dataMocks.appliedAmount,
    'full-name': dataMocks.name,
    'fullName': dataMocks.name,
    'fullname': dataMocks.name,
    'firstname': dataMocks.name[0],
    'first-name': dataMocks.name[0],
    'last-name': dataMocks.name[dataMocks.name.length - 1],
    'lastname': dataMocks.name[dataMocks.name.length - 1],
    'surname': dataMocks.name[1],
    'secondname': dataMocks.name[1],
    'personalNumber': dataMocks.personalNumber,
    'email': dataMocks.email,
    'organization': dataMocks.companyName,
    'organisation': dataMocks.companyName,
    'company': dataMocks.companyName,
    'companyName': dataMocks.companyName,
    'name': dataMocks.name,
    'telephone': dataMocks.cellPhoneNumber,
    'tel': dataMocks.cellPhoneNumber,
    'telephoneNumber': dataMocks.cellPhoneNumber,
    'phone': dataMocks.phone,
    'fax': dataMocks.phone,
    'zip': dataMocks.zipcode,
    'zipcode': dataMocks.zipcode,
    'zipCode': dataMocks.zipcode,
    'monthlyIncome': dataMocks.monthlyIncome,
    'maxInstallment': dataMocks.maxInstallment,
    'RG': dataMocks.RG,
    'placeOfBirth': dataMocks.placeOfBirth,
    'mothersName': dataMocks.mothersName,
  };

  function createEvent(eventType, element) {
    const newEvent = new Event(eventType, {
      target: element,
      bubbles: true,
    });
    return newEvent;
  };

  const sliderValue = document.getElementsByClassName('slider--value');
  const sliderControlElement = document.getElementsByClassName('slider--control');
  const amountValue = sliderValue && sliderValue.length > 0 && Number(sliderValue[0].innerText.slice(3, sliderValue[0].innerText.length));
  const control = Math.floor(Math.random() * 35);
  if (amountValue && amountValue < control) {
    for (let i = 0; i < (control - amountValue); i += 0.5) {
      sliderControlElement[1].click();
    };
  };

  if (amountValue && amountValue > control) {
    for (let i = 0; i < (amountValue - control); i += 0.5) {
      sliderControlElement[0].click();
    };
  };

  const ownsVehicle = document.getElementById('ownsVehicle');
  ownsVehicle && ownsVehicle.childNodes.forEach(function (element, index) {
    if (index, Math.floor(Math.random() * ownsVehicle.childNodes.length)) {
      element.click();
    };
  });

  const hasCreditRestrictions = document.getElementById('hasCreditRestrictions');
  hasCreditRestrictions && hasCreditRestrictions.childNodes.forEach(function (element, index) {
    if (index, Math.floor(Math.random() * hasCreditRestrictions.childNodes.length)) {
      element.click();
    };
  });

  const gender = document.getElementById('gender');
  gender && gender.childNodes.forEach(function (element, index) {
    if (index, Math.floor(Math.random() * gender.childNodes.length)) {
      element.click();
    };
  });

  const periods = document.getElementById('loanPeriodInMonths');
  periods && periods.childNodes.forEach(function (element, index) {
    if (index, Math.floor(Math.random() * periods.childNodes.length)) {
      element.click();
    };
  });

  document.querySelectorAll('input, select, textarea')
    .forEach(element => {
      const lastValue = element.value;
      let event;
      let value = (
        options[element.name]
          ? options[element.name]
          : options[element.id]
      );

      if (!value && element.type) {
        value = options[element.type];
      };

      if (element.tagName !== 'SELECT' && element.type !== 'checkbox' && element.type !== 'radio') {
        element.value = value;
        event = createEvent("input", element);
      };

      if (element.tagName === 'SELECT' && element.type !== 'checkbox' && element.type !== 'radio') {
        let indexEl = 0;
        let newEl = Math.floor(Math.random() * element.length);
        element.querySelectorAll('option').forEach((elementChild, index) => {
          if (elementChild.selected) {
            indexEl = index;
            elementChild.removeAttribute('selected');
          };
        });

        if (newEl >= 0 && newEl === indexEl && newEl === element.length && element[newEl].value) {
          element.value = element[newEl - 1].value;
        }

        if (newEl >= 0 && newEl !== indexEl && element[newEl].value) {
          element.value = element[newEl].value;
        };
        event = createEvent("change", element);
      };

      event.simulated = true;
      let tracker = element._valueTracker;
      if (tracker) {
        tracker.setValue(lastValue);
      };
      element.dispatchEvent(event);
    });

}

chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: {
      tabId: tab.id,
    },
    function: modifyDOM,
  });
});
