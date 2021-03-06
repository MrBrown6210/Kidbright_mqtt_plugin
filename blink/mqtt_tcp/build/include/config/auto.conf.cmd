deps_config := \
	/Users/Minion/Downloads/esp/esp-idf/components/app_trace/Kconfig \
	/Users/Minion/Downloads/esp/esp-idf/components/aws_iot/Kconfig \
	/Users/Minion/Downloads/esp/esp-idf/components/bt/Kconfig \
	/Users/Minion/Downloads/esp/esp-idf/components/driver/Kconfig \
	/Users/Minion/Downloads/esp/esp-idf/components/esp32/Kconfig \
	/Users/Minion/Downloads/esp/esp-idf/components/esp_adc_cal/Kconfig \
	/Users/Minion/Downloads/esp/esp-idf/components/esp_event/Kconfig \
	/Users/Minion/Downloads/esp/esp-idf/components/esp_http_client/Kconfig \
	/Users/Minion/Downloads/esp/esp-idf/components/esp_http_server/Kconfig \
	/Users/Minion/Downloads/esp/esp-idf/components/ethernet/Kconfig \
	/Users/Minion/Downloads/esp/esp-idf/components/fatfs/Kconfig \
	/Users/Minion/Downloads/esp/esp-idf/components/freemodbus/Kconfig \
	/Users/Minion/Downloads/esp/esp-idf/components/freertos/Kconfig \
	/Users/Minion/Downloads/esp/esp-idf/components/heap/Kconfig \
	/Users/Minion/Downloads/esp/esp-idf/components/libsodium/Kconfig \
	/Users/Minion/Downloads/esp/esp-idf/components/log/Kconfig \
	/Users/Minion/Downloads/esp/esp-idf/components/lwip/Kconfig \
	/Users/Minion/Downloads/esp/esp-idf/components/mbedtls/Kconfig \
	/Users/Minion/Downloads/esp/esp-idf/components/mdns/Kconfig \
	/Users/Minion/Downloads/esp/esp-idf/components/mqtt/Kconfig \
	/Users/Minion/Downloads/esp/esp-idf/components/nvs_flash/Kconfig \
	/Users/Minion/Downloads/esp/esp-idf/components/openssl/Kconfig \
	/Users/Minion/Downloads/esp/esp-idf/components/pthread/Kconfig \
	/Users/Minion/Downloads/esp/esp-idf/components/spi_flash/Kconfig \
	/Users/Minion/Downloads/esp/esp-idf/components/spiffs/Kconfig \
	/Users/Minion/Downloads/esp/esp-idf/components/tcpip_adapter/Kconfig \
	/Users/Minion/Downloads/esp/esp-idf/components/unity/Kconfig \
	/Users/Minion/Downloads/esp/esp-idf/components/vfs/Kconfig \
	/Users/Minion/Downloads/esp/esp-idf/components/wear_levelling/Kconfig \
	/Users/Minion/Downloads/esp/esp-idf/components/app_update/Kconfig.projbuild \
	/Users/Minion/Downloads/esp/esp-idf/components/bootloader/Kconfig.projbuild \
	/Users/Minion/Downloads/esp/esp-idf/components/esptool_py/Kconfig.projbuild \
	/Users/Minion/Downloads/esp/kb/kbide/plugins/examples/blink/mqtt_tcp/main/Kconfig.projbuild \
	/Users/Minion/Downloads/esp/esp-idf/components/partition_table/Kconfig.projbuild \
	/Users/Minion/Downloads/esp/esp-idf/Kconfig

include/config/auto.conf: \
	$(deps_config)

ifneq "$(IDF_TARGET)" "esp32"
include/config/auto.conf: FORCE
endif
ifneq "$(IDF_CMAKE)" "n"
include/config/auto.conf: FORCE
endif

$(deps_config): ;
