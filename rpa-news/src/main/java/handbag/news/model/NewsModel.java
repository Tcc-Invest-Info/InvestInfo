package handbag.news.model;

import java.io.Serializable;

public class NewsModel implements Serializable {

	private static final long serialVersionUID = 1L;

	private String title;
	private String url;
	private String data;

	public NewsModel(String title, String url, String data) {
		this.title = title;
		this.url = url;
		this.data = data;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	public String getData() {
		return data;
	}

	public void setData(String data) {
		this.data = data;
	}
}