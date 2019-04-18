// var wifi_color_hue = 10
var mqtt_color_hue = 90;

// Blockly.Blocks["wifi.start"] = {
// 	init: function() {
// 		this.appendDummyInput()
// 			.appendField("Connect wifi");

// 		this.appendValueInput('SSID')
// 			.setCheck('String')
// 			.appendField("Ssid");

// 		this.appendValueInput('PASSWORD')
// 			.setCheck('String')
// 			.appendField("Password");

// 		this.setInputsInline(false);
// 		this.setPreviousStatement(true);
// 		this.setNextStatement(true);
// 		this.setColour(wifi_color_hue);
// 		this.setTooltip(Blockly.Msg.BLINK_START_TOOLTIP);
// 		this.setHelpUrl(Blockly.Msg.BLINK_START_HELPURL);
// 	}
// };

// Blockly.Blocks["wifi.ssid"] = {
// 	init: function() {
// 		this.appendDummyInput()
// 			.appendField("ssid");

// 		this.setOutput(true, 'String');
// 		this.setInputsInline(false);
// 		this.setPreviousStatement(false);
// 		this.setNextStatement(false);
// 		this.setColour(wifi_color_hue);
// 		this.setTooltip(Blockly.Msg.BLINK_START_TOOLTIP);
// 		this.setHelpUrl(Blockly.Msg.BLINK_START_HELPURL);
// 	}
// };

// Blockly.Blocks["wifi.password"] = {
// 	init: function() {
// 		this.appendDummyInput()
// 			.appendField("password");

// 		this.setOutput(true, 'String');
// 		this.setInputsInline(false);
// 		this.setPreviousStatement(false);
// 		this.setNextStatement(false);
// 		this.setColour(wifi_color_hue);
// 		this.setTooltip(Blockly.Msg.BLINK_START_TOOLTIP);
// 		this.setHelpUrl(Blockly.Msg.BLINK_START_HELPURL);
// 	}
// };

Blockly.Blocks["mqtt.connect"] = {
	init: function() {
		this.appendDummyInput()
			.appendField("Connect mqtt server");

		this.appendValueInput('IP')
			.setCheck('String')
			.appendField("IP");

		this.setInputsInline(false);
		this.setPreviousStatement(true);
		this.setNextStatement(true);
		this.setColour(mqtt_color_hue);
		this.setTooltip(Blockly.Msg.BLINK_START_TOOLTIP);
		this.setHelpUrl(Blockly.Msg.BLINK_START_HELPURL);
	}
};

Blockly.Blocks["mqtt.pub"] = {
	init: function() {
		this.appendDummyInput()
			.appendField("Publish mqtt");

		this.appendValueInput('TOPIC')
			.setCheck('String')
			.appendField("Topic");

		this.appendValueInput('DATA')
			.setCheck('Number')
			.appendField("Data");

		this.setInputsInline(false);
		this.setPreviousStatement(true);
		this.setNextStatement(true);
		this.setColour(mqtt_color_hue);
		this.setTooltip(Blockly.Msg.BLINK_START_TOOLTIP);
		this.setHelpUrl(Blockly.Msg.BLINK_START_HELPURL);
	}
};

Blockly.Blocks["mqtt.sub"] = {
	init: function() {
		this.appendDummyInput()
			.appendField("Subscribe mqtt");

		this.appendValueInput('TOPIC')
			.setCheck('String')
			.appendField("Topic");

		this.appendStatementInput("DO")
			.appendField("do");

		this.setInputsInline(false);
		this.setPreviousStatement(true);
		this.setNextStatement(true);
		this.setColour(mqtt_color_hue);
		this.setTooltip(Blockly.Msg.BLINK_START_TOOLTIP);
		this.setHelpUrl(Blockly.Msg.BLINK_START_HELPURL);
	}
};

Blockly.Blocks["mqtt.is_connected"] = {
	init: function() {
		this.appendDummyInput()
			.appendField("Is connect mqtt");

		this.setOutput(true, 'Boolean');
		this.setInputsInline(false);
		this.setColour(mqtt_color_hue);
		this.setTooltip(Blockly.Msg.BLINK_START_TOOLTIP);
		this.setHelpUrl(Blockly.Msg.BLINK_START_HELPURL);
	}
};

Blockly.Blocks["mqtt.subscribe_data"] = {
	init: function() {
		this.appendDummyInput()
			.appendField("data");

		this.appendValueInput('TOPIC')
			.setCheck('String')
			.appendField("Topic");

		this.setOutput(true, 'String');
		this.setInputsInline(false);
		this.setColour(mqtt_color_hue);
		this.setTooltip(Blockly.Msg.BLINK_START_TOOLTIP);
		this.setHelpUrl(Blockly.Msg.BLINK_START_HELPURL);
	}
};

// Blockly.Blocks["blink.stop"] = {
// 	init: function() {
// 		this.appendDummyInput()
// 			.appendField(Blockly.Msg.BLINK_STOP_TITLE);
// 		this.setInputsInline(true);
// 		this.setPreviousStatement(false);
// 		this.setNextStatement(false);
// 		this.setColour(160);
// 		this.setTooltip(Blockly.Msg.BLINK_STOP_TOOLTIP);
// 		this.setHelpUrl(Blockly.Msg.BLINK_STOP_HELPURL);
// 	}
// };
