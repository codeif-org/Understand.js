// AXIOS GLOBALS
axios.defaults.headers.common["X-Auth-Token"] =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";

// GET REQUEST

// res is used for the response
function getTodos() {
  console.log("GET Request");
  //   axios({
  //     method: "get",
  //     url: "https://jsonplaceholder.typicode.com/posts",
  //     params: {
  //         _limit: 5
  //     }
  //   })
  //     // .then(res => console.log(res))
  //     .then(res => showOutput(res))
  //     .catch(err => console.error(err))

  // one more shorter way to do this is
  axios
    .get("https://jsonplaceholder.typicode.com/posts?_limit=5")
    .then((res) => showOutput(res))
    .catch((err) => console.error(err));
}

// POST REQUEST
function addTodo() {
  console.log("POST Request");
  //   axios({
  //     method: "post",
  //     url: "https://jsonplaceholder.typicode.com/posts",
  //     data: {
  //       title: "My First Post request",
  //       body: "This is my first post request using the axios HTTP library",
  //     },
  //   })
  //     .then((res) => showOutput(res))
  //     .catch((err) => console.error(err));

  // one more shorter way
  // here second argument of the .post is data that we have to sent there
  axios
    .post("https://jsonplaceholder.typicode.com/posts", {
      title: "My First Post request",
      body: "This is my first post request using the axios HTTP library",
    },)
    .then((res) => showOutput(res))
    .catch((err) => console.error(err));
}

// PUT/PATCH REQUEST
// PUT updates the whole row of the data
// while PATCH updates only to the specific data inside row
// PATCH is the partial PUT request or partial update

// implementation is same just only .put or .patch is to be change
function updateTodo() {
  console.log("PUT/PATCH Request");
  axios
    .patch(
      "https://jsonplaceholder.typicode.com/posts/1",
      {
        title: "My First Post request",
        body: "This is my first post request using the axios HTTP library",
      },
      {
        timeout: 5000,
      }
    )
    .then((res) => showOutput(res))
    .catch((err) => console.error(err));
}

// DELETE REQUEST
function removeTodo() {
  console.log("DELETE Request");
  axios({
    method: "delete",
    url: "https://jsonplaceholder.typicode.com/posts/1",
  })
    .then((res) => showOutput(res))
    .catch((err) => console.error(err));
}

// SIMULTANEOUS DATA
// using this we can send more than one request
// like there's a many condition where we have to request to more than one apis
// where we follow the axios method axios.all()
// and then we pass the requests inside an array
function getData() {
  console.log("Simultaneous Request");
  axios
    .all([
      axios.get("https://jsonplaceholder.typicode.com/posts"),
      axios.get("https://jsonplaceholder.typicode.com/todos"),
      axios.post("https://jsonplaceholder.typicode.com/todos", {
        title: "First simultaneous post request",
        body: "First post but not the last one",
      }),
    ])
    // .then((res) => {
    //   console.log(res);
    //   console.log(res[0]);
    //   console.log(res[1]);
    //   console.log(res[2]);
    //   showOutput(res[2]);
    // })

    // instead of using res[0], res[1] we use axios.spread that gives the
    // variable names can be given inside the arrow function
    .then(
      axios.spread((postsGet, todosGet, postsPost) => {
        console.log(postsGet);
        console.log(todosGet);
        console.log(postsPost);
        showOutput(postsGet);
      })
    )
    .catch((err) => console.error(err));
}
// if we use console.log(res) then we got an array in which we got two objects
// and that objects corresponds to the individual requests

// CUSTOM HEADERS
function customHeaders() {
  console.log("Custom Headers");
  const config = {
    headers: {
      "Content-type": "application/json",
      Authorization: "sometoken",
    },
  };

  // in third parameter of the post we sent the custom headers
  axios
    .post(
      "https://jsonplaceholder.typicode.com/posts",
      {
        title: "My First Post request",
        body: "This is my first post request using the axios HTTP library",
      },
      config
    )
    .then((res) => showOutput(res))
    .catch((err) => console.error(err));
}

// TRANSFORMING REQUESTS & RESPONSES
// using this we can transform our request
function transformResponse() {
  console.log("Transform Response");

  const options = {
    method: "post",
    url: "https://jsonplaceholder.typicode.com/posts",
    data: {
      title: "My First Post request",
      body: "This is my first post request using the axios HTTP library",
    },
    transformResponse: axios.defaults.transformResponse.concat((data) => {
      data.title = data.title.toUpperCase();
      return data;
    }),
  };

  axios(options)
    .then((res) => showOutput(res))
    .catch((err) => console.error(err));
}

// ERROR HANDLING
function errorHandling() {
  console.log("Error Handling");
  axios
    .get("https://jsonplaceholder.typicode.com/postss", {
      validateStatus: function (status) {
        return status < 500; // Reject only if status is greater than or equal to 500
      },
    })
    .then((res) => showOutput(res))
    .catch((err) => {
      if (err.response) {
        // Server responded with a status other than 200 range
        console.log(err.response);
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.headers);
      }
    });
}

// CANCEL TOKEN
function cancelToken() {
  console.log("Cancel Token");

  const source = axios.CancelToken.source();
  axios
    .get("https://jsonplaceholder.typicode.com/postss?_limit=5", {
      cancelToken: source.token,
    })
    .then((res) => showOutput(res))
    .catch((thrown) => {
      if (axios.isCancel(thrown)) {
        console.log("Request Cancelled", thrown.message);
      }
    });

  if (true) {
    source.cancel("Request Cancelled!");
  }
}

// INTERCEPTING REQUESTS & RESPONSES
// this is use as a logger or do something before the response is sent
// We can intercept requests or responses before they are handled by then or catch.
axios.interceptors.request.use(
  (config) => {
    console.log(
      `${config.method.toUpperCase()} request sent to ${
        config.url
      } at ${new Date().getTime()}`
    );
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// AXIOS INSTANCES
const axiosInstances = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});
// now we can request using the axiosInstance
// axiosInstances.get('/comments').then(res => showOutput(res))

// Show output in browser
function showOutput(res) {
  document.getElementById("res").innerHTML = `
    <div class="card card-body mb-4">
      <h5>Status: ${res.status}</h5>
    </div>
  
    <div class="card mt-3">
      <div class="card-header">
        Headers
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.headers, null, 2)}</pre>
      </div>
    </div>
  
    <div class="card mt-3">
      <div class="card-header">
        Data
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.data, null, 2)}</pre>
      </div>
    </div>
  
    <div class="card mt-3">
      <div class="card-header">
        Config
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.config, null, 2)}</pre>
      </div>
    </div>
  `;
}

// Event listeners
document.getElementById("get").addEventListener("click", getTodos);
document.getElementById("post").addEventListener("click", addTodo);
document.getElementById("update").addEventListener("click", updateTodo);
document.getElementById("delete").addEventListener("click", removeTodo);
document.getElementById("sim").addEventListener("click", getData);
document.getElementById("headers").addEventListener("click", customHeaders);
document
  .getElementById("transform")
  .addEventListener("click", transformResponse);
document.getElementById("error").addEventListener("click", errorHandling);
document.getElementById("cancel").addEventListener("click", cancelToken);
