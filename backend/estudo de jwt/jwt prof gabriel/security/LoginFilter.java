package com.webserviceproject.config;

import java.io.IOException;
import java.util.Collections;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.AbstractAuthenticationProcessingFilter;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.webserviceproject.entities.UserDomain;
import com.webserviceproject.services.AuthenticationService;

import lombok.extern.log4j.Log4j2;

//vai tratar todos requisicoes que chegar no endpoint '/login'(ela nao é restcontroller)
//ela vai validar o usuario
@Log4j2
public class LoginFilter extends AbstractAuthenticationProcessingFilter{

	public LoginFilter(String url, AuthenticationManager authenticationManager) {
		super(new AntPathRequestMatcher(url));
		setAuthenticationManager(authenticationManager);
	}

//metodos que sera invocados em qualquer login
	
	
	
	//tentativa de login pegar os dados que estao na requisicao e tentar autenticar
	@Override
	public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response)
			throws AuthenticationException, IOException, ServletException {
		
		UserDomain userDomain = new ObjectMapper()//mapear os seguintes dados para objetos
				.readValue(request.getInputStream(), UserDomain.class);//ler os dados dizer qual entidade eles pertence

		return getAuthenticationManager().authenticate(new UsernamePasswordAuthenticationToken(userDomain.getUsername(), userDomain.getPassword(), Collections.emptyList()));
		//passar os dados para o gerenciador de autenticacao para ele autenticar
	}
	
	
	//se o metodo attemp...passar entao este metodo sera invocado
	//este metodo irar criar um token e devolver
	@Override
	protected void successfulAuthentication(HttpServletRequest request, HttpServletResponse response, FilterChain chain,
			Authentication authResult) throws IOException, ServletException {
		AuthenticationService.addToken(response, authResult.getName());
	}

	

 
}
