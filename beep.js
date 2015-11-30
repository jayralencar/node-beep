function beep (qt) {
	qt = (!qt)?1:qt;
	for(var i =  0 ; i < qt;i++){
		process.stdout.write("\u0007");	
	}
}

module.exports = beep;