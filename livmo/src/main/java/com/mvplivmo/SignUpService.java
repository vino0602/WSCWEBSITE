package com.mvplivmo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class SignUpService {

    @Autowired
    private SignUpRepo signUpRepo;

    public SignupresponseDTO registerUser(SignuprequestDTO signUpRequestDTO) {
        // Check if a user with the same email already exists
        Optional<SignUp> existingUser = signUpRepo.findByEmail(signUpRequestDTO.getEmail());
        if (existingUser.isPresent()) {
            throw new IllegalStateException("User with this email already exists.");
        }

        // Check if a user with the same mobile number already exists
        Optional<SignUp> existingMobileUser = signUpRepo.findByMobileNumber(signUpRequestDTO.getMobileNumber());
        if (existingMobileUser.isPresent()) {
            throw new IllegalStateException("User with this mobile number already exists.");
        }

        // Save new user logic goes here
        SignUp newUser = new SignUp(signUpRequestDTO);
        signUpRepo.save(newUser);
        
        // Prepare response DTO
        return new SignupresponseDTO(newUser);
    }
}
