package com.wscapiapppersonal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/personal-details")
@CrossOrigin(origins = "http://localhost:8081")
public class PersonalDetailsController {

    @Autowired
    private PersonalDetailsService personalDetailsService;

    // Create a new personal details entry
    @PostMapping
    public ResponseEntity<PersonalDetails> createPersonalDetails(@RequestBody PersonalDetails personalDetails) {
        PersonalDetails createdDetails = personalDetailsService.createPersonalDetails(personalDetails);
        return ResponseEntity.ok(createdDetails);
    }

    // Get all personal details
    @GetMapping
    public ResponseEntity<List<PersonalDetails>> getAllPersonalDetails() {
        List<PersonalDetails> detailsList = personalDetailsService.getAllPersonalDetails();
        return ResponseEntity.ok(detailsList);
    }

    // Get personal details by ID
    @GetMapping("/{id}")
    public ResponseEntity<PersonalDetails> getPersonalDetailsById(@PathVariable String id) {
        PersonalDetails details = personalDetailsService.getPersonalDetailsById(id);
        return details != null ? ResponseEntity.ok(details) : ResponseEntity.notFound().build();
    }

    // Update personal details by ID
    @PutMapping("/{id}")
    public ResponseEntity<PersonalDetails> updatePersonalDetails(@PathVariable String id, @RequestBody PersonalDetails updatedDetails) {
        PersonalDetails updated = personalDetailsService.updatePersonalDetails(id, updatedDetails);
        return updated != null ? ResponseEntity.ok(updated) : ResponseEntity.notFound().build();
    }

    // Delete personal details by ID
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePersonalDetails(@PathVariable String id) {
        personalDetailsService.deletePersonalDetails(id);
        return ResponseEntity.noContent().build();
    }
}
