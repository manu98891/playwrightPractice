exports.LoginPage = class LoginPage{
    constructor(page) {
        this.loginButton = page.locator('[data-test="login-button"]');
        this.emailInput = page.locator('[data-test="username"]');
        this.passwordInput = page.locator('[data-test="password"]');
        this.errorMessage = page.locator('[data-test="error"]');
    }
}