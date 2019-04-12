package iyadh.pfa.controller;

import iyadh.pfa.model.Compte;
import iyadh.pfa.model.Offre;
import iyadh.pfa.repository.OffreRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.Collection;
import java.util.stream.Collectors;

@RestController
@CrossOrigin(origins = "http://localhost:4200")

public class OffreController {
    private OffreRepository repository;
    public OffreController(OffreRepository repository) {
        this.repository = repository;
    }
    @GetMapping("/all-offres")
    public Collection<Offre> getOffre() {
        return repository.findAll().stream()
                .collect(Collectors.toList());
    }



}
