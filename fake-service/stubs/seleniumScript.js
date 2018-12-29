module.exports.getSeleniumScript = (controlType) => {
  switch (controlType) {
    case 'Button': {
      return(
        {control:
          `package SeleniumFramework.TestSuite;\nimport org.openqa.selenium.By;\nimport org.openqa.selenium.WebElement;\nimport org.testng.annotations.Test;\nimport CoreControlClasses.ButtonMain;\nimport WebDriverCoreSupportClasses.WebDriverClass;\npublic class Test002 {\n@Test\npublic static void f() {\nWebElement element = WebDriverClass.findClickableElement(By.xpath("//span[text()='Tools']"));\nbutton.ButtonClick(element);\n}\n}`
        })
        break;
    }
    case 'TextBox': {
      return(
        {control:
          `package SeleniumFramework.TestSuite;\nimport org.openqa.selenium.By;\nimport org.openqa.selenium.WebElement;\nimport org.testng.annotations.Test;\nimport CoreControlClasses.TextBoxMain;;\nimport WebDriverCoreSupportClasses.WebDriverClass;\npublic class Test002 {\n@Test\npublic static void f() {\TextBoxMain txt = new TextBoxMain(WebDriverClass.driver());\nWebElement element = WebDriverClass.findClickableElement(By.xpath("//Input[name='email']"));\ntxt.EnterText(element, "guru_sochu@yahoo.com");\n}\n}`
        })
        break;
    }
    default: {
      return ({control:'Not yet defined'})
    }
  }
};
