package iyadh.pfa.controller;

import iyadh.pfa.model.Compte;
import iyadh.pfa.model.Formation;
import iyadh.pfa.repository.CompteRepository;
import iyadh.pfa.repository.FormationRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collection;
import java.util.Optional;
import java.util.stream.Collectors;
import org.springframework.web.bind.annotation.PostMapping;

@RestController
@CrossOrigin(origins = "http://localhost:4200")

public class CompteController {
    private CompteRepository repository;
    private FormationRepository formationRepository;
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
    @GetMapping("/demande-formation/{idCompte}/{idFormation}")
    public void addFormation (@PathVariable Long idCompte, @PathVariable Long idFormation){
        System.out.println(idCompte);
        System.out.println(idFormation);
        System.out.println("t5alet lele get");

        Compte compte = repository.findById(idCompte).get();
        Formation formation = formationRepository.findById(idFormation).get();
        compte.getFormations().add(formation);
        formation.getComptes().add(compte);
        repository.save(compte);
        formationRepository.save(formation);
            
    }
    

}
