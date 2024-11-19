package com.mvplivmo;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "SignUp") // Place this annotation at the class level
public class Login {
    private String email;
    private String password;
    
    // Constructor
    public Login(String email, String password) {
		super();
		this.email = email;
		this.password = password;
	}

	// Getters and setters
    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
