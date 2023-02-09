const { test, expect } = require('@playwright/test');
import { LoginPage } from '../../support/POM/loginPage';
import { mainPage } from '../../support/POM/mainPage';
import dotenv from 'dotenv';
dotenv.config();

test.describe('login page for user', ()=>{
    
    test.beforeEach(async({page})=>{
        const Login = new LoginPage(page);

        await page.goto(process.env.HOME_URL);
        
        await Login.emailInput.fill(process.env.USER_STANDAR);
        await Login.passwordInput.fill(process.env.USER_PASSWORD);
        await Login.loginButton.click();
    })

    test("log out the page",async ({page})=>{
        const Main = new mainPage(page);

        await Main.menuButton.click();
        await Main.logoutButton.click();

        await expect(page).toHaveURL(process.env.HOME_URL);
    })

    test("filter button contein text",async ({page})=>{
        const Main = new mainPage(page);

        await Main.filterButton.click();
        await expect(Main.filterButton).toHaveText("Name (A to Z)Name (Z to A)Price (low to high)Price (high to low)");
    })

})