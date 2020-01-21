package com.example;

import javax.servlet.Filter;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.PropertySource;

import com.example.jwtfilter.AuthFilter;

@SpringBootApplication
@PropertySource("classpath:dbconfig.properties")
public class App {
	@Bean
	public FilterRegistrationBean jwtFilter() {
		FilterRegistrationBean<Filter> bean = new FilterRegistrationBean<Filter>();
		bean.setFilter(new AuthFilter());
		bean.addUrlPatterns("/api/bookApp/*");
		return bean;
	}
	public static void main(String[] args) {
		SpringApplication.run(App.class, args);
	}

}
