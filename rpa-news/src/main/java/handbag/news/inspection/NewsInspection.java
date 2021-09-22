package handbag.news.inspection;

public class NewsInspection {

	private NewsController newsController;

	public NewsInspection() {
		newsController = new NewsController();
	}

	public void run() throws Exception {
		try {
			getNews();
		} finally {
			newsController.closeChrome();
		}
	}

	void getNews() throws Exception {
		newsController.accessInfoMoney();
		newsController.waitNewsScreenLoad();
		newsController.pickUpNewsTitles();
	}
}