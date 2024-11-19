package com.wscapiapppersonal;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class })
public class DemowscapppersonalApplication {

	public static void main(String[] args) {
		SpringApplication.run(DemowscapppersonalApplication.class, args);
	}

}
