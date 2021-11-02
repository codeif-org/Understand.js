console.log("This is an AJAX tutorial");

let fetchBtn = document.getElementById("fetchBtn");

// https://developer.mozilla.org/en-US/docs/Web/Guide/AJAX/Getting_Started
// fetchBtn.addEventListener('click', function() {
//     buttonClickHandler(2, 5)
// });
// if want to pass arguments inside the function of the addEventListener

// or else () these braces are not used in the addEventListener function argument

fetchBtn.addEventListener("click", buttonClickHandler);

function buttonClickHandler() {
  console.log("fetchBtn is clicked now");

  // Instantiate an xhr object
  const xhr = new XMLHttpRequest();

  // open the object
  // GET means we only send the request
  // POST means we send the request and also we're sending some data
  // according to the basis of them data is to be fetched
  // xhr.open('GET', 'mayur.txt', true)
  // xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true)

  // POST method
  xhr.open("POST", "http://dummy.restapiexample.com/api/v1/create", true);
  xhr.getResponseHeader("Content-type", "application/json");

  // What to do on Progress (optional) like during the fetch of data
  xhr.onprogress = function () {
    console.log("on progress, wait a while until data is fetched");
  };

  // What to do when response is ready
  xhr.onload = function () {
    if (this.status === 200) {
      console.log(this.responseText);
    } else {
      console.error("some error occured");
    }
  };

  // send the request
  // xhr.send()

  // if some parameters are there
  params = `{"name":"mayur90","salary":"12213","age":"23"}`;
  xhr.send(params);
}

// Populate means getting from the api

let popBtn = document.getElementById("popBtn")
popBtn.addEventListener("click", popClickHandler);

function popClickHandler() {
  console.log("popBtn is clicked")

  // Instantiate an xhr object XMLHttpRequest()
  const xhr = new XMLHttpRequest()

  // open the object
  xhr.open("GET", "https://dummy.restapiexample.com/api/v1/employees", true);

  // what to do when response is ready
  xhr.onload = function () {
    if (this.status === 200) {
      let obj = JSON.parse(this.responseText);
      console.log(obj);
      let list = document.getElementById("list");
      let str = "";
      for (key in obj) {
        str += `<li> ${obj[key].employee_name} </li>`;
      }
      list.innerHTML = str;
    }
    else{
        console.error("some error occured")
    }
  };

  // send the request
  xhr.send();
  console.log("we're done with the fetching employees!");
}
