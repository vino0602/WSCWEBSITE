package com.mvplivmo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import jakarta.validation.Valid;
import java.util.Optional;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;


@RestController
@RequestMapping("/api/signup") // This means all requests will already be under "/api/signup"
@CrossOrigin(origins = "http://localhost:8081") // Ensure this matches your frontend port
public class SignUpController {
    private static final Logger logger = LoggerFactory.getLogger(SignUpController.class);

    @Autowired
    private SignUpService signUpService;
  
    @Autowired
    private SignUpRepo signUpRepo;
    // Endpoint to handle user registration
 
    @PostMapping
    public ResponseEntity<SignupresponseDTO> registerUser(@Valid @RequestBody SignuprequestDTO signuprequestDTO) {
        try {
            logger.info("Received signup request for email: {}", signuprequestDTO.getEmail());
            
            // Check if email already exists
            Optional<SignUp> existingUserByEmail = signUpRepo.findByEmail(signuprequestDTO.getEmail());
            if (existingUserByEmail.isPresent()) {
                logger.warn("User with email {} already exists.", signuprequestDTO.getEmail());
                return ResponseEntity.status(400).body(null); // Email already exists, return a bad request response
            }
            
            // Check if mobile number already exists
            Optional<SignUp> existingUserByMobile = signUpRepo.findByMobileNumber(signuprequestDTO.getMobileNumber());
            if (existingUserByMobile.isPresent()) {
                logger.warn("User with mobile number {} already exists.", signuprequestDTO.getMobileNumber());
                return ResponseEntity.status(400).body(null); // Mobile number already exists, return a bad request response
            }
            
            // Generate a unique ID if it's not provided in the request (using a UUID, for example)
            if (signuprequestDTO.getId() == null || signuprequestDTO.getId().isEmpty()) {
                signuprequestDTO.setId("WSC-" + java.util.UUID.randomUUID().toString());
                logger.info("Generated unique ID for new user: {}", signuprequestDTO.getId());
            }
            
            SignupresponseDTO savedUser = signUpService.registerUser(signuprequestDTO);
            logger.info("User registered successfully with email: {}", signuprequestDTO.getEmail());
            return ResponseEntity.ok(savedUser);
        } catch (IllegalStateException e) {
            logger.error("IllegalStateException occurred: {}", e.getMessage());
            return ResponseEntity.status(400).body(null); // You can add a custom error message if needed
        } catch (Exception e) {
            logger.error("Unexpected error occurred during registration: {}", e.getMessage(), e);
            return ResponseEntity.status(500).body(null); // You can also return a custom error message for debugging
        }
    }
}