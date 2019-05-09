
package iyadh.pfa.controller;


import iyadh.pfa.model.Formation;
import iyadh.pfa.repository.FormationRepository;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.xml.bind.ValidationException;
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
        return repository.findAll();

    }
    
}

