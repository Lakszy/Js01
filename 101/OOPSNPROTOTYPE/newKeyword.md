A new Object is Created : A new keyword intiate the creation of the New Javascript object 

A prototype is linked: the newly created objects gets linked to the prototype property of the constructor function. This means that is has access to properties and methods defined on the constructor's prototype.

The constructor is called : The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, Javscript asssumes  this the newly formed object, to be intended return value.

The new Object is returned: After the constructor function has been called, if it doesnt return a non- primitive value (Object , array , fucntion ) the newly created object is returned