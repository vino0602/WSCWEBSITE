package com.wscapiapppersonal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class PersonalDetailsService {

    @Autowired
    private PersonalDetailsRepo personalDetailsRepo;

    // Create new personal details
    public PersonalDetails createPersonalDetails(PersonalDetails personalDetails) {
        String generatedId = generateCustomId();
        personalDetails.setId(generatedId);
        return personalDetailsRepo.save(personalDetails);
    }

    // Retrieve all personal details
    public List<PersonalDetails> getAllPersonalDetails() {
        return personalDetailsRepo.findAll();
    }

    // Retrieve personal details by ID
    public PersonalDetails getPersonalDetailsById(String id) {
        return personalDetailsRepo.findById(id).orElse(null);
    }

    // Update personal details by ID
    public PersonalDetails updatePersonalDetails(String id, PersonalDetails updatedDetails) {
        PersonalDetails existingDetails = getPersonalDetailsById(id);
        if (existingDetails != null) {
            existingDetails.setFirstName(updatedDetails.getFirstName());
            existingDetails.setLastName(updatedDetails.getLastName());
            existingDetails.setEmail(updatedDetails.getEmail());
            existingDetails.setMobileNumber(updatedDetails.getMobileNumber());
            existingDetails.setGender(updatedDetails.getGender());
            existingDetails.setDob(updatedDetails.getDob());
            existingDetails.setAddressLine1(updatedDetails.getAddressLine1());
            existingDetails.setAddressLine2(updatedDetails.getAddressLine2());
            existingDetails.setCountry(updatedDetails.getCountry());
            existingDetails.setState(updatedDetails.getState());
            existingDetails.setCity(updatedDetails.getCity());
            existingDetails.setZipCode(updatedDetails.getZipCode());
            return personalDetailsRepo.save(existingDetails);
        }
        return null;
    }

    // Delete personal details by ID
    public void deletePersonalDetails(String id) {
        personalDetailsRepo.deleteById(id);
    }

    // Generate custom ID in the format "wsc00099"
    private String generateCustomId() {
        return String.format("wsc%05d", personalDetailsRepo.count() + 1); // Simple counting method
    }
}
