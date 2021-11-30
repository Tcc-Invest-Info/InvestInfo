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
import com.infoinvest.utils.EmailUtils;
import com.infoinvest.utils.JavaUtils;

@Service
public class UserService {

	private JavaUtils java = new JavaUtils();

	@Autowired
	private UserRepository repository;

	@Transactional(readOnly = true)
	public List<UserDTO> findAll() {
		List<User> list = repository.findAllByOrderByNameAsc();
		return list.stream().map(x -> new UserDTO(x)).collect(Collectors.toList());
	}

	@Transactional
	public UserDTO insert(UserDTO dto) {
		List<User> list = repository.findByEmail(dto.getEmail());
		if (list.size() > 0)
			throw new UnsuportedUserAndNewsException("E-mail já existente");
		User user = new User(null, dto.getName(), dto.getEmail(), java.criptografar(dto.getPassword()));
		user = repository.save(user);
		return new UserDTO(user);
	}

	@Transactional(readOnly = true)
	public User login(String email, String password) {
		List<User> list = repository.findByEmail(email);
		if (list.size() == 0)
			throw new UnsuportedUserAndNewsException("Erro para logar, usuário ou senha incorretos");
		if (!java.verificarSenha(password, list.get(0).getPassword()))
			throw new UnsuportedUserAndNewsException("Erro para logar, usuário ou senha incorretos");
		return list.get(0);
	}

	@Transactional
	public UserDTO esqueciSenha(String email) {
		List<User> list = repository.findByEmail(email);
		if (list.size() == 0)
			throw new UnsuportedUserAndNewsException("Usuário não encontrado");

		User user = repository.getOne(list.get(0).getId());
		String senha = java.gerarSenhaRandom();
		String senhaCriptografada = java.criptografar(senha);
		user.setPassword(senhaCriptografada);
		user = repository.save(user);
		EmailUtils.enviarEmail(user.getEmail(), user.getName(), senha);
		return new UserDTO(user);
	}
}