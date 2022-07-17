package com.springauth.config;

import com.springauth.filter.MyAuthenticationFilter;
import com.springauth.filter.MyAuthorizationFilter;
import com.springauth.service.AccountService;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfiguration;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class MySecurityConfig extends WebSecurityConfigurerAdapter {
    final UserDetailsService accountService;
    final PasswordEncoder passwordEncoder;

    @Bean
    @Override
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }

    @Override
    public void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(accountService).passwordEncoder(passwordEncoder);
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.csrf().disable();
        MyAuthenticationFilter authenticationFilter = new MyAuthenticationFilter(authenticationManagerBean());
        authenticationFilter.setFilterProcessesUrl("/api/v1/accounts/login");
        http.authorizeHttpRequests().antMatchers("/api/v1/hello").permitAll();
        http.authorizeHttpRequests().antMatchers("/api/v1/accounts/*").permitAll();
        http.authorizeHttpRequests().antMatchers("/api/v1/users").hasAnyAuthority("USER", "ADMIN");
        http.authorizeHttpRequests().antMatchers("/api/v1/admin").hasAnyAuthority("ADMIN");
        http.addFilter(authenticationFilter);
        http.addFilterBefore(new MyAuthorizationFilter(), UsernamePasswordAuthenticationFilter.class);
    }
}
