package handbag.news.model.dao;

import java.util.List;

import handbag.news.model.entities.News;

public interface NewsDao {

	void insert(News obj);
	List<News> findAll();
	List<News> findTitle();
}