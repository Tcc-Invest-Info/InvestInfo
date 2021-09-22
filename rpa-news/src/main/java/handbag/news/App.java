package handbag.news;

import handbag.news.inspection.NewsInspection;

public class App {
	public static void main(String[] args) throws Exception {
		System.setProperty("webdriver.chrome.driver", System.getenv("Driver"));
		new NewsInspection().run();
	}
}