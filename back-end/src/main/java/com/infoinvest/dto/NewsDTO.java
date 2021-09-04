package com.infoinvest.dto;

import java.io.Serializable;

import com.infoinvest.entities.News;

public class NewsDTO implements Serializable {
	
	private static final long serialVersionUID = 1L;
	
	private Long id;
	private String title;
	private String url;
	private String dateNews;
	
	public NewsDTO() {
	}

	public NewsDTO(Long id, String title, String url, String dateNews) {
		this.id = id;
		this.title = title;
		this.url = url;
		this.dateNews = dateNews;
	}

	public NewsDTO(News entities) {
		id = entities.getId();
		title = entities.getTitle();
		url = entities.getUrl();
		dateNews = entities.getDateNews();
	}
	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
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

	public String getDateNews() {
		return dateNews;
	}

	public void setDateNews(String dateNews) {
		this.dateNews = dateNews;
	}
}