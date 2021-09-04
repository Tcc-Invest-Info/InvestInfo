package handbag.news.inspection;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import handbag.news.utils.SeleniumUtils;

public class NewsController {

	WebDriver driver;
	private String url = "https://www.infomoney.com.br/ultimas-noticias/";

	public NewsController() {
		driver = new ChromeDriver();
		driver.manage().window().maximize();
	}

	public void accessInfoMoney() throws Exception {
		try {
			SeleniumUtils.accessUrl(driver, url);
		} catch (Exception e) {
			throw new Exception("Error accessing URL. \nException: " + e.getMessage());
		}
	}

	public void closeChrome() throws Exception {
		try {
			SeleniumUtils.closeBrowser(driver);
		} catch (Exception e) {
			throw new Exception("Error closing browser. \nException: " + e.getMessage());
		}
	}

	public void waitNewsScreenLoad() throws Exception {
		try {
			SeleniumUtils.waitVisibleElement(driver, 30, By.id("infiniteScroll"));
		} catch (Exception e) {
			throw new Exception("Error waiting for news screen to load. \nException: " + e.getMessage());
		}
	}

	public void pickUpNewsTitles() throws Exception {
		try {
			List<WebElement> titles = driver.findElements(By.xpath("//span[@class='hl-title hl-title-2']/a"));
			for (WebElement title : titles) {
				System.out.println(
						"Title: " + title.getText() + "\n" + "URL: " + title.getAttribute("href")  
						+ "\n" + "Data: " + getData(url) + "\n");
			}
		} catch (Exception e) {
			throw new Exception("Error waiting for news screen to load. \nException: " + e.getMessage());
		}
	}

	public String getData(String urlNews) throws Exception {
		try {
			SeleniumUtils.openNewTab(driver);
			SeleniumUtils.navigateTab(driver, 1);
			SeleniumUtils.accessUrl(driver, urlNews);
			String data = SeleniumUtils.executeScriptJSReturnString(driver,
					"return document.querySelector('.entry-date').textContent");
			SeleniumUtils.closeCurrentTab(driver);
			SeleniumUtils.navigateTab(driver, 0);
			return data;
		} catch (Exception e) {
			throw new Exception("Error to catch news time. \nException: " + e.getMessage());
		}
	}
}