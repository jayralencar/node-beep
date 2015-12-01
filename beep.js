var beepC = require('bindings')('beep');
function beep (qt) {
	qt = (!qt)?1:qt;
	for(var i =  0 ; i < qt;i++){
		if(process.platform == 'win32'){
			var beepC = require('bindings')('beep.node');	
			beepC.beep();
		}else{
			process.stdout.write("\u0007");			
		}
	}
}

module.exports = beep;