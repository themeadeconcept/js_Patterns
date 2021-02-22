// FACTORY PATTERN

// A way of creating an interface for creating objects but we can let sub classes define which class to instantiate
// often used in apps to manage and maintain / manipulate collections of objects that are different but have many common characteristics
// i.e. a member of somewhere

// Create's a member
function MemberFactory() {
  this.createMember = function (name, type) {
    let member;

    // Checks membership choice
    if (type === "simple") {
      member = new SimpleMembership(name);
    } else if (type === "standard") {
      member = new StandardMembership(name);
    } else if (type === "super") {
      member = new SuperMembership(name);
    }

    // assigns membership to new member
    member.type = type;

    member.define = function () {
      console.log(`${this.name} (${this.type}): ${this.cost}`);
    };

    return member;
  };
}

// Create's membership objects
const SimpleMembership = function (name) {
  this.name = name;
  this.cost = "$5";
};
const StandardMembership = function (name) {
  this.name = name;
  this.cost = "$15";
};
const SuperMembership = function (name) {
  this.name = name;
  this.cost = "$25";
};

// arrays of members
const members = [];

// instantiate member factory object
const factory = new MemberFactory();

// adds members with chosen memberships
members.push(factory.createMember("John Doe", "simple"));
members.push(factory.createMember("Timothy Rasputin", "super"));
members.push(factory.createMember("Silas Milton", "simple"));
members.push(factory.createMember("Michelle Rivera", "standard"));

console.log(members);

members.forEach(function (member) {
  member.define();
});
