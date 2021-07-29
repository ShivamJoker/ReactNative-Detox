# Simple React Native app with Detox (E2E testing)

Watch tutorial - https://youtu.be/9jhxE3u16F4


### Running Tests

**Make sure you have test env setup**

1. Build the App

iOS
```sh
yarn ios
```
Android
```sh
yarn android:test
```

2. Change the Android emulator name in `.detoxrc.json` to the ones you have

To list all the AVD
```sh
emulator -list-avds
```

3. Run tests
```sh
// android
yarn test:android

// iOS
yarn test:ios
```
