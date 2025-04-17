var UserRole;
(function (UserRole) {
    UserRole["ADMIN"] = "admin";
    UserRole["GUEST"] = "guest";
})(UserRole || (UserRole = {}));
;
;
var user = {
    firstName: "Angela",
    lastName: "Davis",
    role: UserRole.ADMIN,
    dni: 12345678,
    age: 30
};
var PI = 3.14;
var phone;
phone = 1234567890;
phone = "123-456-7890";
var tempPhone = phone;
var getData = function (_a) {
    var firstName = _a.firstName;
    return firstName;
};
var data = {
    firstName: user.firstName,
    lastName: user.lastName,
    role: user.role,
    dni: user.dni,
    age: user.age
};
var test = function (num) {
    console.log("The number is: ".concat(num));
};
test(2);
var str = user.firstName.toLowerCase();
