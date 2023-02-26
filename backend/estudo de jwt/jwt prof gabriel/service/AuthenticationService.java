package com.webserviceproject.services;

import java.util.Date;
import static java.util.Collections.emptyList;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.parsing.EmptyReaderEventListener;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

public class AuthenticationService {
	
	static final long EXPIRATIONTIME = 864_000_00;//tempo de expiracao 24 horas
	static final String SIGNINGKEY = "SecretKey";//chave secreta
	static final String PREFIX = "Bearer";//schema de http 
	
	//criar um token depois da autenticacao do cliente 
	static public void addToken (HttpServletResponse res, String username ) {
		String jwtToken = Jwts.builder().setSubject(username)//assunto
				.setExpiration(new Date(System.currentTimeMillis() + EXPIRATIONTIME))//hora atual + 24 horas
				.signWith(SignatureAlgorithm.HS512,SIGNINGKEY)//algoritmo de assinatura do token 
				.compact();//compactar separado pelos tres pontos
		res.addHeader("Authorization", PREFIX + " " + jwtToken);/*
		adicionar jwt no cabecalho da requisicao(ele vai estar na parte de autorizacao,
		definir o schema de autenticacao, e o token
		
		*/
		res.addHeader("Access-Control-Expose-Headers", "Authorization");
        /* expor o cabecalho de authorization para todas requisicao*/
	}
	
	//cada requisicao do sistema sera invocado este metodo, ele vai pegar o token no header, descriptografar e pegar o nome do usuario
	static public Authentication getAuthentication(HttpServletRequest request) {
		String token = request.getHeader("Authorization");//pegar o authorization que é onde trafega o jwt
		if(token != null) {//ver se o token existe e depois descriptografar para saber que é o usuario
			String username = Jwts.parser()
					.setSigningKey(SIGNINGKEY)//passar a chave para conseguir acessar a informacao
					.parseClaimsJws(token.replace(PREFIX, " "))
					.getBody()
					.getSubject();
			if(username != null) 
				return new UsernamePasswordAuthenticationToken(username, null,emptyList());
		}
		return null;
		
	}
	
}	

