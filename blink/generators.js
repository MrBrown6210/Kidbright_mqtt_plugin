Blockly.JavaScript['wifi.start'] = function(block) {
	var ssid = Blockly.JavaScript.valueToCode(block, 'SSID', Blockly.JavaScript.ORDER_ASSIGNMENT) || '0';
	var password = Blockly.JavaScript.valueToCode(block, 'PASSWORD', Blockly.JavaScript.ORDER_ASSIGNMENT) || '0';
	return 'DEV_IO.BLINK().connect_wifi('+ssid+','+password+');\n';
};

Blockly.JavaScript['wifi.ssid'] = function(block) {
	return ['DEV_IO.BLINK().ssid()'];
};

Blockly.JavaScript['wifi.password'] = function(block) {
	return ['DEV_IO.BLINK().password()'];
};

Blockly.JavaScript['mqtt.connect'] = function(block) {
	var ip = Blockly.JavaScript.valueToCode(block, 'IP', Blockly.JavaScript.ORDER_ASSIGNMENT) || '(char *)"mqtt://broker.mqttdashboard.com"';
	return 'DEV_IO.BLINK().mqtt_start('+ip+');\n';
};

Blockly.JavaScript['mqtt.set_string'] = function(block) {
	var value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ASSIGNMENT) || '';
	var variable = block.getFieldValue('VAR');
	console.log('DEV_IO.BLINK().set_string("'+variable+'",('+value+'));\n')
	return 'DEV_IO.BLINK().set_string("'+variable+'",('+value+'));\n';
};

Blockly.JavaScript['mqtt.get_string'] = function(block) {
	var variable = block.getFieldValue('VAR');
	console.log(variable)
	return ['DEV_IO.BLINK().get_string("'+variable+'")'];
};

Blockly.JavaScript['mqtt.concat'] = function(block) {
	var one = Blockly.JavaScript.valueToCode(block, 'ONE', Blockly.JavaScript.ORDER_ASSIGNMENT) || '';
	var two = Blockly.JavaScript.valueToCode(block, 'TWO', Blockly.JavaScript.ORDER_ASSIGNMENT) || '';
	console.log(one,two)
	return ['DEV_IO.BLINK().concat('+one+','+two+')'];
};

Blockly.JavaScript['mqtt.pub'] = function(block) {
	var topic = Blockly.JavaScript.valueToCode(block, 'TOPIC', Blockly.JavaScript.ORDER_ASSIGNMENT) || '(char *)"/topic/qos0"';
	var data = Blockly.JavaScript.valueToCode(block, 'DATA', Blockly.JavaScript.ORDER_ASSIGNMENT) || '0';
	console.log(data);
	return 'DEV_IO.BLINK().mqtt_pub('+topic+','+data+');\n';
};

Blockly.JavaScript['mqtt.sub'] = function(block) {
	// return '';
	var topic = Blockly.JavaScript.valueToCode(block, 'TOPIC', Blockly.JavaScript.ORDER_ASSIGNMENT) || '(char *)"/topic/qos0"';
	var statement = Blockly.JavaScript.statementToCode(block, 'DO');
	return 'DEV_IO.BLINK().mqtt_sub('+topic+',[](){'+statement+'});\n';
};

Blockly.JavaScript['mqtt.is_connected'] = function(block) {
	return ['DEV_IO.BLINK().mqtt_is_connected()'];
};

Blockly.JavaScript['mqtt.subscribe_data'] = function(block) {
	var topic = Blockly.JavaScript.valueToCode(block, 'TOPIC', Blockly.JavaScript.ORDER_ASSIGNMENT) || '(char *)"/topic/qos0"';
	return ['DEV_IO.BLINK().subscribe_data('+topic+')'];
};

// Blockly.JavaScript['blink.stop'] = function(block) {
// 	return 'DEV_IO.BLINK().stop();\n';
// };
