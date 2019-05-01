package iyadh.pfa.controller;

import iyadh.pfa.model.Compte;
import iyadh.pfa.repository.CompteRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collection;
import java.util.stream.Collectors;

@RestController
@CrossOrigin(origins = "http://localhost:4200")

public class CompteController {
    private CompteRepository repository;
    public CompteController(CompteRepository repository) {
        this.repository = repository;
    }
    @GetMapping("/all-comptes")
    public Collection<Compte> getComptes() {
    return repository.findAll().stream()
            .collect(Collectors.toList());
    }
    @GetMapping("/email/{email}/password/{password}")
    public Compte login (@PathVariable String email, @PathVariable String password){
        System.out.println(password);
        Compte compte = repository.findUserByEmail(email);
        if (compte ==null){
            return null;
        }
        System.out.println((compte.getPassword()));
        if (compte.getPassword().equals(password)){
            System.out.println(compte);
            return compte;
        }
        return null;

    }

}
