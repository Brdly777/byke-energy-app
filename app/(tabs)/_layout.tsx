import { Tabs } from "expo-router"; 
import { Ionicons } from "@expo/vector-icons";

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{tabBarActiveTintColor: "#fff", headerStyle:{backgroundColor: "#000",}, headerShadowVisible: false, headerTintColor: "#fff", tabBarStyle:{backgroundColor: "#000"}}}>
      <Tabs.Screen name="index" options={{headerTitle: "Byke Energy", tabBarIcon: ({ focused, color }) => <Ionicons name={focused ? "home-sharp" : "home-outline"} color={color} size={24} />,}} />
      <Tabs.Screen name="about" options={{headerTitle: "Acerca de", tabBarIcon: ({ focused, color }) => <Ionicons name={focused ? "information-circle" : "information-circle-outline"} color={color} size={24} />,}} />
      <Tabs.Screen name="+not-found" options={{}} />
    </Tabs>
  );
}