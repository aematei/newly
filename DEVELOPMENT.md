## Setting Up the Development Environment
### Set Node Version
Expo requires Node.js version 20 or higher.
1. In your local cloned repo directory, check your current Node.js version with `nvm ls`
2. If your current version is lower than v20:
	- If your system is currently using a version lower than v20 but has v20 or higher installed, simply run `nvm use {version}`
	- If you need to install v20 or higher, see [this guide](https://blog.hubspot.com/website/update-node-js). After installation, you may still need to run `nvm use {version}` to set the proper version.
### Android Emulation
Both Windows and MacOS users can emulate Android devices locally:
1. Go to [Expo's Quick Start documentation](https://docs.expo.dev/get-started/set-up-your-environment/) 
2. For both Windows and MacOS, select `Android emulator` and `Expo Go` from the first two radio button sections.
3. Follow the directions for your operating system.
### iOS Simulation
iOS devices can only be simulated on MacOS. Go to [Expo's Quick Start documentation](https://docs.expo.dev/get-started/set-up-your-environment/) and follow directions under `iOS Simulation` and `Expo Go`.

### Using a Device
You can use the Expo Go app to run a development version of your app on an actual Android or iOS device. Go to [Expo's Quick Start documentation](https://docs.expo.dev/get-started/set-up-your-environment/) and select either `Android device` or `iOS device` then select `Expo Go` and follow the subsequent directions.
