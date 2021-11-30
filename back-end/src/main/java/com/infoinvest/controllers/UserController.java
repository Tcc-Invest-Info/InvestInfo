package com.infoinvest.controllers;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.infoinvest.dto.UserDTO;
import com.infoinvest.entities.User;
import com.infoinvest.exception.UnsuportedUserAndNewsException;
import com.infoinvest.services.UserService;

@RestController
@RequestMapping(value = "/users")
public class UserController {

	@Autowired
	private UserService service;

	@GetMapping
	public ResponseEntity<List<UserDTO>> findAll() {
		List<UserDTO> list = service.findAll();
		return ResponseEntity.ok().body(list);
	}

	@PostMapping
	public ResponseEntity<UserDTO> insert(@RequestBody UserDTO dto) {
		if (dto.getName().equals("") || dto.getEmail().equals("") || dto.getPassword().equals(""))
			throw new UnsuportedUserAndNewsException("Existe campos em branco");

		dto = service.insert(dto);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(dto.getId()).toUri();
		return ResponseEntity.created(uri).body(dto);

	}

	@PostMapping("/login")
	public User login(@RequestBody UserDTO dto) {
		if (dto.getEmail().equals("") || dto.getPassword().equals(""))
			throw new UnsuportedUserAndNewsException("Existe campos em branco");

		return service.login(dto.getEmail(), dto.getPassword());
	}

	@PutMapping("/esqueciSenha")
	public ResponseEntity<UserDTO> esqueciSenha(@RequestBody UserDTO dto) {
		if (dto.getEmail().equals(""))
			throw new UnsuportedUserAndNewsException("Existe campos em branco");
		dto = service.esqueciSenha(dto.getEmail());
		return ResponseEntity.ok().body(dto);
	}
}