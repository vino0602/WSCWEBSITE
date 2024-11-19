package com.mvplivmo;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LoginService {

    @Autowired
    private SignUpRepo signUpRepo;

    public LoginresponseDTO loginUser(LoginrequestDTO loginRequestDTO) {
        // Fetch user by email from the database
        Optional<SignUp> user = signUpRepo.findById(loginRequestDTO.getEmail());

        // Validate user existence and password matching
        if (user.isPresent() && user.get().getPassword().equals(loginRequestDTO.getPassword())) {
            SignUp foundUser = user.get();
            System.out.println("LoginService::loginUser -> username and password match");
            return new LoginresponseDTO(foundUser.getFirstName(), foundUser.getLastName(), foundUser.getEmail());
        } else {
            System.out.println("LoginService::loginUser -> Invalid email or password");
            throw new IllegalStateException("Invalid email or password");
        }
    }
}
