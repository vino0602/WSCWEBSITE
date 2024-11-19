package com.mvplivmo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/login")
@CrossOrigin(origins = "http://localhost:8081/")
public class LoginController {

    @Autowired
    private LoginService loginService;

    @PostMapping
    public ResponseEntity<?> loginUser(@RequestBody LoginrequestDTO loginRequestDTO) {
        try {
            // Validate the login using the loginRequestDTO object
            LoginresponseDTO loggedInUser = loginService.loginUser(loginRequestDTO);
            System.out.println("LoginController::loginUser -> Called successfully");
            return ResponseEntity.ok(loggedInUser);  // Return user details or token
        } catch (IllegalStateException e) {
            return ResponseEntity.status(400).body(e.getMessage());
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Error occurred during login.");
        }
    }
}
