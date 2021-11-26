package com.infoinvest.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.infoinvest.dto.UserDTO;
import com.infoinvest.entities.User;
import com.infoinvest.exception.UnsuportedUserAndNewsException;
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

	@Transactional(readOnly = true)
	public User login(String email, String password) {
		List<User> list = repository.findByEmail(email);
		if (list.size() == 0)
			throw new UnsuportedUserAndNewsException("Erro para logar, usuário ou senha incorretos");
		if (!list.get(0).getPassword().equals(password))
			throw new UnsuportedUserAndNewsException("Erro para logar, usuário ou senha incorretos");
		return list.get(0);
	}

	@Transactional(readOnly = true)
	public UserDTO esqueciSenha(String email) {
		List<User> list = repository.findByEmail(email);
		String novaSenha = "123456";
		if (list.size() == 0)
			throw new UnsuportedUserAndNewsException("Usuário não encontrado");

		list.get(0).setPassword(novaSenha);
		User user = repository.save(list.get(0));
		return new UserDTO(user);
	}
}