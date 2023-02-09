exports.mainPage = class mainPage{
    constructor(page) {
        this.menuButton = page.getByRole('button', { name: 'Open Menu' });
        this.logoutButton = page.getByRole('link', { name: 'Logout' });
        this.resetPage = page.getByRole('link', { name: 'Reset App State' });
        this.aboutPage = page.getByRole('link', { name: 'About' });
        this.filterButton = page.locator('[data-test="product_sort_container"]');
    }
}