package com.mvplivmo;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SignUpRepo extends MongoRepository<SignUp, String> {

	Optional<SignUp> findByMobileNumber(String mobileNumber);
    Optional<SignUp> findByEmail(String email);  // Optional method to find by mobile number
}
