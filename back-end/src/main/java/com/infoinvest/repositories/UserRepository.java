package com.infoinvest.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.infoinvest.entities.User;

public interface UserRepository extends JpaRepository<User, Long> {

	List<User> findAllByOrderByNameAsc();
	
	List<User> findByEmail(String email);
}