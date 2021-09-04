package com.infoinvest.services;

import java.util.List;
import java.util.stream.Collectors;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.infoinvest.dto.UserDTO;
import com.infoinvest.entities.User;
import com.infoinvest.repositories.UserRepository;

@Service
public class UserService {
	
	@Autowired
	private UserRepository repository;
	
	@Transactional(readOnly = true)
	public List<UserDTO> findAll() {
		List<User> list = repository.findAllByOrderByNameAsc();
		return list.stream().map(x -> new UserDTO(x)).collect(Collectors.toList());
	}
	
	@Transactional
	public UserDTO insert(UserDTO dto) {
		User user = new User(null, dto.getName(), dto.getEmail(), dto.getPassword());
		user = repository.save(user);
		return new UserDTO(user);
	}
}