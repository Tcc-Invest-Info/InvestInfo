package com.infoinvest.entities;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "tb_news")
public class News implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String description;
	private String linkNews;
	private String dateNews;

	public News() {
	}

	public News(Long id, String description, String linkNews, String dateNews) {
		this.id = id;
		this.description = description;
		this.linkNews = linkNews;
		this.dateNews = dateNews;
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