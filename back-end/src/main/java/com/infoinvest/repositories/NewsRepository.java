package com.infoinvest.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.infoinvest.entities.News;

public interface NewsRepository extends JpaRepository<News, Long> {
	
	List<News> findAllByOrderByDateNewsAsc();
}