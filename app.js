//test in the console

var me = H("Edvin", "Saletovic");

me.greet()
	.setLang("bh")
	.greet();

var him = H("John", "Doe");

him.greet(true)
	.setLang("bh")
	.greet(true);
