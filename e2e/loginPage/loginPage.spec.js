const { test, expect } = require('@playwright/test');
import { LoginPage } from '../../support/POM/loginPage';
import dotenv from 'dotenv';
dotenv.config();

test.describe('login page for user', ()=>{
    
    test.beforeEach(async({page})=>{
        await page.goto(process.env.HOME_URL);
    })

    test("login test", async({page})=>{
        const Login = new LoginPage(page);

        await Login.emailInput.fill(process.env.USER_STANDAR);
        await Login.passwordInput.fill(process.env.USER_PASSWORD);
        await Login.loginButton.click();

        await expect(page.locator('#shopping_cart_container a')).toBeVisible(); 
    })

    test("no completed the fills", async({page})=>{
        const Login = new LoginPage(page);

        await Login.emailInput.fill("");
        await Login.passwordInput.fill("");
        await Login.loginButton.click();

        await expect(Login.errorMessage).toHaveText("Epic sadface: Username is required")
    })

    test("invalid fild",async({page})=>{
        const Login = new LoginPage(page);

        await Login.emailInput.fill("q");
        await Login.passwordInput.fill("q");
        await Login.loginButton.click();

        await expect(Login.errorMessage).toHaveText("Epic sadface: Username and password do not match any user in this service")
    })

    test("password is required label", async({page})=>{
        const Login = new LoginPage(page);

        await Login.emailInput.fill(process.env.USER_STANDAR);
        await Login.passwordInput.fill("");
        await Login.loginButton.click();

        await expect(Login.errorMessage).toHaveText("Epic sadface: Password is required");
    })


    
})