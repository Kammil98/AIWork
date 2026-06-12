package com.ai.learning.demo;

import com.ai.learning.demo.model.User;
import com.ai.learning.demo.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.Arrays;

@Component
public class DataInitializer implements CommandLineRunner {

    private final UserRepository userRepository;

    public DataInitializer(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public void run(String... args) throws Exception {
        User user1 = new User("alice", "alice@example.com");
        User user2 = new User("bob", "bob@example.com");
        User user3 = new User("charlie", "charlie@example.com");

        userRepository.saveAll(Arrays.asList(user1, user2, user3));
        
        System.out.println("Initial users seeded to database.");
    }
}
