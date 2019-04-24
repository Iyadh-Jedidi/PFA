package iyadh.pfa.controller;

import iyadh.pfa.model.Compte;
import iyadh.pfa.repository.CompteRepository;
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
    @GetMapping("/login/{email}")
    public RedirectView login (@RequestBody String mtp, @PathVariable String email){
         return repository.findByEmail(email)
                 .map( compte -> {
			    if (compte.


                })
                .orElseGet(() -> {
                    return new RedirectView("http://localhost:4200/profile/"+ compte.getId());
                });

            }

    }






    public String registration(@ModelAttribute("userForm") Compte compteForm, BindingResult bindingResult) {
        CompteValidator.validate(compteForm, bindingResult);

        if (bindingResult.hasErrors()) {
            return "registration";
        }

        userService.save(compteForm);

        securityService.autoLogin(compteForm.getEmail(), compteForm.getPassword());

        return "redirect:/welcome";
    }




}
