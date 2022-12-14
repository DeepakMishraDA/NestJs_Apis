import { Controller, Get } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Controller({})
export class AuthController {
    constructor(private authService: AuthService){}

@Get()
login(): string {
    return this.authService.login();
}
}