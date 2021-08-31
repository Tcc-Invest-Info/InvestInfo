package com.devsuperior.infoinvest.services;

import java.util.List;
import java.util.stream.Collectors;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.infoinvest.dto.UsuarioDTO;
import com.devsuperior.infoinvest.entities.Usuario;
import com.devsuperior.infoinvest.repositories.UsuarioRepository;

@Service
public class UsuarioService {
	
	@Autowired
	private UsuarioRepository repository;
	
	@Transactional(readOnly = true)
	public List<UsuarioDTO> findAll() {
		List<Usuario> list = repository.findAllByOrderByNomeAsc();
		return list.stream().map(x -> new UsuarioDTO(x)).collect(Collectors.toList());
	}
}