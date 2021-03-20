package com.eci.cosw.springbootsecureapi.service;

import com.eci.cosw.springbootsecureapi.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.util.ArrayList;
import java.util.List;

/**
 * @author Santiago Carrillo 8/21/17.
 */
@Service
public class UserServiceImpl implements UserService {

    private List<User> users = new ArrayList<>();

    @Autowired
    public UserServiceImpl() {
    }

    @PostConstruct
    private void populateSampleData() {
        users.add(new User("test@mail.com", "sotelo", "Andres", "Perez"));
        users.add(new User("andres", "sotelo", "Andres", "sotelo"));
    }

    @Override
    public List<User> getUsers() {
        return users;
    }

    @Override
    public User getUser(Long id) {
        return users.get(0);
    }

    @Override
    public User createUser(User user) {
        return users.get(0);
    }

    @Override
    public User findUserByEmail(String email) {
        User user = users.stream().filter(ob -> ob.getEmail().equals(email)).findFirst().orElse(null);
        return users.get(0);
    }

    @Override
    public User findUserByEmailAndPassword(String email, String password) throws Exception {
        User user = findUserByEmail(email);
        if (user == null) throw new Exception("Error");
        
        User res;
        res= user.getPassword().equals(password) ? user : null;
        
        return res;
    }

}
