package com.webserviceproject.config;

import java.util.Arrays;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import com.webserviceproject.services.UserDomainService;

import lombok.RequiredArgsConstructor;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class testSecuryConfig extends WebSecurityConfigurerAdapter{

	private final UserDomainService usuarioService;
	
	@Override
	protected void configure(HttpSecurity http) throws Exception {
		
//		http.csrf().csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse())
		http.csrf().disable()
		.cors()
		.and()
		.authorizeRequests()
		.antMatchers("/userdomains/admin/**").hasRole("ADMIN")
		.antMatchers("/categories/admin/**").hasRole("ADMIN")
		.antMatchers("/products/admin/**").hasRole("ADMIN")
		.antMatchers(HttpMethod.POST,"/userdomains/saveuserdomain").permitAll()
		.antMatchers(HttpMethod.POST, "/login").permitAll()
		.antMatchers("/h2-console/**").permitAll()
		.anyRequest()
		.authenticated()
		.and()
		.headers().frameOptions().sameOrigin()
		.and()
		.addFilterBefore(new LoginFilter("/login", authenticationManager()), UsernamePasswordAuthenticationFilter.class)
		.addFilterBefore(new AuthorizationFilter(), UsernamePasswordAuthenticationFilter.class);
		
	}
	
	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {	
		auth.userDetailsService(usuarioService).passwordEncoder(passwordEncoder());
	}
	
	@Bean
	public PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}
	
	@Bean
	CorsConfigurationSource corsConfigurationSource() {
		UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
		CorsConfiguration config = new CorsConfiguration();
		
		config.setAllowedOrigins(Arrays.asList("*"));//aqui poderia ser localhost:8080 etc .. varias outras mas estamos liberando tudo
		config.setAllowedMethods(Arrays.asList("*"));//todos metodos
		config.setAllowedHeaders(Arrays.asList("*"));//todos cabecalhos
		config.setAllowCredentials(true);//permitir todas cretenciais
		config.applyPermitDefaultValues();//configuracoes padroes
		source.registerCorsConfiguration("/**", config);//registra todas configuracoes
		return source;
	}
	
	
}
