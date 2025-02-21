import { AuthProvider } from "@/contexts/AuthContext";
import { Stack } from "expo-router";
import { TaskProvider } from "@/contexts/TaskContext";


export default function RootLayout() {
    return (
        <AuthProvider>
            <TaskProvider>
                <Stack />
            </TaskProvider>
        </AuthProvider>
    )
}