package com.infoinvest.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.infoinvest.dto.NewsDTO;
import com.infoinvest.services.NewsService;

@RestController
@RequestMapping(value = "/news")
public class NewsController {

	@Autowired
	private NewsService service;

	@GetMapping
	public ResponseEntity<List<NewsDTO>> findAll() {
		List<NewsDTO> list = service.findAll();
		return ResponseEntity.ok().body(list);
	}
}