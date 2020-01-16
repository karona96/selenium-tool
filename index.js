require('chromedriver');
var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    Key = webdriver.Key,
    until = webdriver.until;

var driver = new webdriver.Builder().forBrowser('chrome').build();
    driver.get('http://pre.schnotify.info');

    // Select element 
    driver.findElement(By.id('login-button')).click();

    //driver.findElement(By.name('email')).sendKeys('SCHOOLadmin@gmail.com');
    //driver.findElement(By.name('password')).sendKeys('123456');
    
    //driver.findElement(By.xpath("//input[@name='email']")) .sendKeys("SCHOOLadmin@gmail.com");
    //driver.findElement(By.xpath("//input[@name='password']")) .sendKeys("123456");

    //driver.findElement(By.css("button[type=submit]")).click();
    
    driver.sleep(100000);
    //driver.quit();'

    