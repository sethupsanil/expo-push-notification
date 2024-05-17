import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { usePushNotification } from "./usePushNotification";

export default function App() {
  const { notification, expoPushToken } = usePushNotification();
  console.log(notification);
  const data = JSON.stringify(notification, undefined, 2);
  return (
    <View style={styles.container}>
      <Text>Token: {expoPushToken ?? ""}</Text>
      <Text>data: {data}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
