const { By } = require("selenium-webdriver/lib/by");
const { Key } = require("selenium-webdriver/lib/input");

class loginPage_Test {
    constructor(driver) {
        this.driver = driver;
    }

    async submitForm() {
        await this.driver.findElement(By.id('email')).sendKeys('SCHOOLadmin@gmail.com');
        await this.driver.findElement(By.id('password')).sendKeys('123456');
    
        await this.driver.findElement(By.css('.btn.btn-primary.btn-block.btn-flat')).click(); 
    }
}

module.exports = loginPage_Test;