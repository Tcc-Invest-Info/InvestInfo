package handbag.news;

import handbag.news.inspection.News;

public class App {
	public static void main(String[] args) throws Exception {
		System.setProperty("webdriver.chrome.driver", System.getenv("Driver"));
		new News().run();
	}
}