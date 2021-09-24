package handbag.news.inspection;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import handbag.news.model.dao.DaoFactory;
import handbag.news.model.dao.NewsDao;
import handbag.news.model.entities.News;
import handbag.news.utils.SeleniumUtils;

public class NewsController {

	WebDriver driver;
	private String url = "https://www.infomoney.com.br/ultimas-noticias/";
	NewsDao newsDao;

	public NewsController() {
		newsDao = DaoFactory.createSellerDao();
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
				if (title.getAttribute("href").contains("https://www.infomoney.com.br/mercados") || 
						title.getAttribute("href").contains("https://www.infomoney.com.br/economia")) {
					if (!checkTitle(title.getText())) {
						News newNews = new News(null, title.getText(), title.getAttribute("href"),
								getData(title.getAttribute("href")));
						newsDao.insert(newNews);
					}
				}
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

	public boolean checkTitle(String title) throws Exception {
		try {
			for (News news : newsDao.findTitle()) {
				if (news.getTitle().equals(title))
					return true;
			}
			return false;
		} catch (Exception e) {
			throw new Exception("Error for check Title. \nException: " + e.getMessage());
		}
	}
}