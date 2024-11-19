package com.mvplivmo;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
@Document(collection = "SignUp")
public class SignUp {
    @Id
    private String id;  // Use this as the primary key for uniqueness in MongoDB
    private String email;
    private String firstName;
    private String lastName;
    private String mobileNumber;
    private String password;
    private String confirmpassword;
    
    // Default constructor
    public SignUp(SignuprequestDTO signUpRequestDTO) {}

    
    // Constructor with parameters
    public SignUp(String id, String firstName, String lastName, String email, String mobileNumber, String password, String confirmpassword) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.mobileNumber = mobileNumber;
        this.password = password;
        this.confirmpassword = confirmpassword;
    }
    
    
    // Getters and Setters
    public String getId() { return id; }
    public void setId(String id) { this.id = id; }
    
    
    public String getFirstName() { return firstName; }
    public void setFirstName(String firstName) { this.firstName = firstName; }
    
    
    public String getLastName() { return lastName; }
    public void setLastName(String lastName) { this.lastName = lastName; }
    
    
    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
    
    
    public String getMobileNumber() { return mobileNumber; }
    public void setMobileNumber(String mobileNumber) { this.mobileNumber = mobileNumber; }
    
    
    public String getPassword() { return password; }
    public void setPassword(String password) { this.password = password; }
    
    
    public String getConfirmPassword() { return confirmpassword; }
    public void setConfirmPassword(String confirmpassword) { this.confirmpassword = confirmpassword; }
}