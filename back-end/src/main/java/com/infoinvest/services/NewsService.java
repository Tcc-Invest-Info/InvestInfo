package com.infoinvest.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.infoinvest.dto.NewsDTO;
import com.infoinvest.entities.News;
import com.infoinvest.repositories.NewsRepository;

@Service
public class NewsService {
	
	@Autowired
	private NewsRepository repository;
	
	@Transactional(readOnly = true)
	public List<NewsDTO> findAll() {
		List<News> list = repository.findAllByOrderByDateNewsAsc();
		return list.stream().map(x -> new NewsDTO(x)).collect(Collectors.toList());
	}
}