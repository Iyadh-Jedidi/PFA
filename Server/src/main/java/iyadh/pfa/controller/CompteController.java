package iyadh.pfa.controller;

import iyadh.pfa.model.Compte;
import iyadh.pfa.repository.CompteRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.validation.BindingResult;
import org.springframework.web.servlet.view.RedirectView;

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

    @GetMapping(value ="/email/{email}/password/{password}")
    @ResponseBody
    public ResponseEntity<Object> getUser(@PathVariable String email, @PathVariable String password) {
        Compte compte =repository.findUserByEmail(email);
        if(compte!= null)
        {
        return ResponseEntity.ok()
                .body(new Compte(compte.getId(),compte.getName(),compte.getLastname(),
                        compte.getTypeCompteId(),compte.getEmail(),compte.getPassword(),compte.getTel(),compte.getDateBirth(),
                        compte.getAddress(),compte.getCV(),compte.getContrat(),compte.getPoste()));}
        else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("File was not fount");
        }


    }






}
