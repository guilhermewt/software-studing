package com.webserviceproject.config;

import java.io.IOException;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.GenericFilterBean;

import com.webserviceproject.services.AuthenticationService;

//(authorization filter) vai interceptar todas as outras requisicoes que nao seja o endpoint '/login'
public class AuthorizationFilter extends GenericFilterBean {

	// mais um metodo de autorizacao,para autorizar eu precisarei ver se o usuario
	// ja esta autenticado
	@Override
	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
			throws IOException, ServletException {
		Authentication authentication = AuthenticationService.getAuthentication((HttpServletRequest) request);//ver se o usuario esta autenticado
		SecurityContextHolder.getContext().setAuthentication(authentication);//este vai avaliar se o usuario pode ou nao acessar o recurso
		chain.doFilter(request, response);//adicionar este metodo na cadeaia de filtros

	}
	
	//34min

}
