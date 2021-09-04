package handbag.news.utils;

import java.util.ArrayList;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class SeleniumUtils {

	public static void closeBrowser(WebDriver driver) {
		driver.close();
		driver.quit();
	}

	public static void accessUrl(WebDriver driver, String url) {
		driver.get(url);
	}

	public static void waitVisibleElement(WebDriver driver, int time, By by) {
		new WebDriverWait(driver, time).until(ExpectedConditions.visibilityOfElementLocated(by));
	}

	public static void typeSlowly(WebDriver driver, String key, By by) throws InterruptedException {
		driver.findElement(by).clear();
		WebElement x = driver.findElement(by);
		for (int y = 0; y < key.length(); y++) {
			char n = key.charAt(y);
			String v = new Character((char) n).toString();
			x.sendKeys(v);
			Thread.sleep(90);
		}
	}

	public static void clickElement(WebDriver driver, int time, By by) {
		new WebDriverWait(driver, time).until(ExpectedConditions.visibilityOfElementLocated(by)).click();
	}

	public static void executeScriptJS(WebDriver driver, String script) {
		((JavascriptExecutor) driver).executeScript(script);
	}

	public static String executeScriptJSReturnString(WebDriver driver, String script) {
		return (String) ((JavascriptExecutor) driver).executeScript(script);
	}

	public static void openNewTab(WebDriver driver) {
		((JavascriptExecutor) driver).executeScript("window.open()");
	}

	public static void closeCurrentTab(WebDriver driver) {
		driver.close();
	}

	public static void navigateTab(WebDriver driver, int tab) {
		ArrayList<String> tabs = new ArrayList<String>(driver.getWindowHandles());
		driver.switchTo().window(tabs.get(tab));
	}
}