module.exports.getSeleniumScript = () => {
    return(
      {button:
        `package SeleniumFramework.TestSuite;\nimport org.openqa.selenium.By;\nimport org.openqa.selenium.WebElement;\nimport org.testng.annotations.Test;\nimport CoreControlClasses.ButtonMain;\nimport WebDriverCoreSupportClasses.WebDriverClass;\npublic class Test002 {\n@Test\npublic static void f() {\nWebElement element = WebDriverClass.findClickableElement(By.xpath("//span[text()='Tools']"));\nbutton.ButtonClick(element);\n}\n}`
      })
};
