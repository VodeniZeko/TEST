//immediately invoked function expression,small greeting framework/library, logic borowed from jQuery

(function(global, library) {
	// 'new' an object
	var Greeter = function(firstname, lastname, language) {
		return new Greeter.init(firstname, lastname, language);
	};

	// hidden within the scope of the IIFE and never directly accessible
	var supportedLang = ["en", "bh"];

	//informal greet
	var greeting = {
		en: "Hello",
		bh: "Zdravo"
	};

	//formal greet
	var formalGreeting = {
		en: "Good Day",
		bh: "Dobar Dan"
	};

	//prototype holds method (saving on memory)
	Greeter.prototype = {
		// 'this' refers to the calling object at execution time
		fullName: function() {
			return this.firstname + " " + this.lastname;
		},

		// check that is a valid language
		// references the externally inaccessible 'supportedLangs' within the closure
		isValid: function() {
			if (supportedLang.indexOf(this.language) === -1) {
				throw "this language is not supported";
			}
		},

		// retrieve messages from object by referring to properties using [] syntax
		greeting: function() {
			return greeting[this.language] + " " + this.firstname + "!";
		},

		formalGreeting: function() {
			return formalGreeting[this.language] + " " + this.fullName();
		},

		// chainable methods return their own containing object
		greet: function(formal) {
			var msg;

			// if undefined or null it will be coerced to 'false'
			if (formal) {
				msg = this.formalGreeting();
			} else {
				msg = this.greeting();
			}
			console.log(msg);
			// 'this' refers to the calling object at execution time
			// makes the method chainable
			return this;
		},

		setLang: function(lang) {
			//set language
			this.language = lang;

			//validating
			this.isValid();

			//makes the method chainable
			return this;
		}
	};

	// the actual object is created here, allowing us to 'new' an object without calling 'new'
	Greeter.init = function(firstname, lastname, language) {
		var self = this;
		self.firstname = firstname || "";
		self.lastname = lastname || "";
		self.language = language || "en";
	};

	//borrowed from jQuery so we don't have to use the 'new' keyword
	Greeter.init.prototype = Greeter.prototype;

	// attach our Greeter to the global object, and provide a shorthand 'H'
	global.Greeter = global.H = Greeter;
})(window, jQuery);
