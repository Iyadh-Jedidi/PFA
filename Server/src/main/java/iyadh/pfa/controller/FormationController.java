package iyadh.pfa.controller;


import iyadh.pfa.model.Compte;
import iyadh.pfa.model.Formation;
import iyadh.pfa.repository.CompteRepository;
import iyadh.pfa.repository.FormationRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collection;
import java.util.stream.Collectors;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class FormationController {
    private FormationRepository repository;
    public FormationController(FormationRepository repository) {
        this.repository = repository;
    }
    @GetMapping("/all-formations")
    public Collection<Formation> getFormations() {
        return repository.findAll().stream()
                .collect(Collectors.toList());
    }
}
