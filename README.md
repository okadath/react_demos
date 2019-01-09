
actualizar npm:

	sudo npm cache clean -f
	sudo npm install -g n
	sudo n stable

	expo init my-app

	yarn start

	yarn global add create-react-native-app@1.0.0

	create-react-native-app weather --scripts-version 1.14.0

genymotion:

	/etc/init.d/virtualbox force-reload

corregir el genymotion adb
hay 2 adb, uno del sistema y otro el del sdk, copiar el del sdka ne el sistema:

	./okadath@okadath-NV570P:~/Android/Sdk/platform-tools$ ./adb version
	Android Debug Bridge version 1.0.39
	Revision 3db08f2c6889-android
	Installed as /home/okadath/Android/Sdk/platform-tools/adb
	okadath@okadath-NV570P:~/Android/Sdk/platform-tools$ sudo cp ~/Android/Sdk/platform-tools/adb /usr/bin


definir componentes al vuelo:

	const style = { color: 'red' };
	return (
	<View style={styles.container}>
	<Text style={style}>
	Open up App.js to start working on your app!
	</Text>

fuente por SO:

	fontFamily: Platform.OS === 'ios' ? 'AvenirNext-Regular' : 'Roboto',

esto no quedo:

	textStyle: {
	textAlign: 'center',
	...Platform.select({
	ios: {
	fontFamily: 'AvenirNext-Regular',
	},
	android: {
	fontFamily: 'Roboto',
	},
	}),
	},

autocorrect en searchinput false o true

pagina 45



