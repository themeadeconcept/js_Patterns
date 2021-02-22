const PageState = function () {
  let currentState = new homeState(this);

  this.init = function () {
    this.change(new homeState());
  };

  this.change = function (state) {
    currentState = state;
  };
};

// Home state
const homeState = function (page) {
  document.querySelector("#heading").textContent = null;
  document.querySelector("#content").innerHTML = `
    <div class="jumbotron">
      <h1 class="display-4">Jumbotron in your area!</h1>
      <p class="lead">This is me practicing different states</p>
      <hr class="my-4">
      <p>And this is the inital state of "Home" state.</p>
      <p class="lead">
        <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
      </p>
    </div>
  `;
};

// About state
const aboutState = function (page) {
  document.querySelector("#heading").textContent = "About Us";
  document.querySelector("#content").innerHTML = `
    <p>This is the about page</p>
  `;
};

// Contact STate
const contactState = function (page) {
  document.querySelector("#heading").textContact = "Contact Us";
  document.querySelector("#content").innerHTML = `
    <form>
      <div class="form-group">
        <label>Name</label>
        <input type="text" class="form-control">
      </div>
      <div class="form-group">
        <label>Email Address</label>
        <input type="email" class="form-control">
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  `;
};

// Instantiate pageState
const page = new PageState();

// Init the first state
page.init();

// UI variables
const home = document.getElementById("home"),
  about = document.getElementById("about"),
  contact = document.getElementById("contact");

// Home
home.addEventListener("click", (e) => {
  page.change(new homeState());

  e.preventDefault();
});

// About
about.addEventListener("click", (e) => {
  page.change(new aboutState());

  e.preventDefault();
});

// Contact
contact.addEventListener("click", (e) => {
  page.change(new contactState());

  e.preventDefault();
});
