import { AuthService } from "@/generated-api/src";

export class AuthenticationService {

    public static async login(email: string, password: string): Promise<{ token?: string; }> {
        try {
            const response = await AuthService.loginUser({ email, password });
            return response;
        } catch (error) {
            console.error("Login failed:", error);
            throw new Error("Login failed. Please check your credentials.");
        }
    }

    public static async register(email: string, password: string): Promise<void> {
        try {
            await AuthService.registerUser({ email, password });
        } catch (error) {
            throw new Error(error instanceof Error ? error.message : "Registration failed");
        }
    }

    public static async verifyToken(): Promise<{ email?: string; } | undefined> {
        try {
            const response = await AuthService.verifyToken();
            return response;
        } catch (error) {
            throw new Error(error instanceof Error ? error.message : "Authentication failed");
        }
    }

}