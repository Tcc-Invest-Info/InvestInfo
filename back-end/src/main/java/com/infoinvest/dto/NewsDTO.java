package com.infoinvest.dto;

import java.io.Serializable;

import com.infoinvest.entities.News;

public class NewsDTO implements Serializable {
	
	private static final long serialVersionUID = 1L;
	
	private Long id;
	private String description;
	private String linkNews;
	private String dateNews;
	
	public NewsDTO() {
	}

	public NewsDTO(Long id, String description, String linkNews, String dateNews) {
		this.id = id;
		this.description = description;
		this.linkNews = linkNews;
		this.dateNews = dateNews;
	}

	public NewsDTO(News entities) {
		id = entities.getId();
		description = entities.getDescription();
		linkNews = entities.getLinkNews();
		dateNews = entities.getDateNews();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getLinkNews() {
		return linkNews;
	}

	public void setLinkNews(String linkNews) {
		this.linkNews = linkNews;
	}

	public String getDateNews() {
		return dateNews;
	}

	public void setDateNews(String dateNews) {
		this.dateNews = dateNews;
	}
}