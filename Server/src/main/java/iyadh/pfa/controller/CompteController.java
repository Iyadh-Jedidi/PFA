package iyadh.pfa.controller;

import iyadh.pfa.model.Compte;
import iyadh.pfa.model.Formation;
import iyadh.pfa.model.Offre;
import iyadh.pfa.repository.CompteRepository;
import iyadh.pfa.repository.FormationRepository;
import iyadh.pfa.repository.OffreRepository;
import org.springframework.beans.factory.annotation.Autowired;
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
   private OffreRepository offreRepository;

    public CompteController(CompteRepository repository , FormationRepository formationRepository ,OffreRepository offreRepository ) {
        this.repository = repository;
        this.formationRepository=formationRepository;
        this.offreRepository=offreRepository;
    }
    @GetMapping("/all-comptes")
    public Collection<Compte> getComptes() {
    return repository.findAll();
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
    public Formation addFormation (@PathVariable String idCompte, @PathVariable String idFormation){
        try {
            System.out.println(idCompte);

            Long idcompte1 = Long.parseLong(idCompte);
            Long idFormation1 = Long.parseLong(idFormation);
            System.out.println(idFormation1);
            System.out.println("t5alet lel get");

            Compte compte = repository.findById(idcompte1).get();
            System.out.println(compte);
            Formation formation = formationRepository.findById(idFormation1).get();
            System.out.println(formation);
            //compte.getFormations().add(formation);
            formation.getComptes().add(compte);
            //repository.save(compte);
            formationRepository.save(formation);
            return formation;
        } catch(Exception e){
            return null;
        }

    }
    
     @GetMapping("/demande-formation/{idCompte}/{idFormation}")
    public Offre addOffre (@PathVariable String idCompte, @PathVariable String idOffre){
        try {
            System.out.println(idCompte);

            Long idcompte1 = Long.parseLong(idCompte);
            Long idOffre1 = Long.parseLong(idOffre);
            System.out.println(idOffre1);
            System.out.println("t5alet lel get");

            Compte compte = repository.findById(idcompte1).get();
            System.out.println(compte);
            Offre offre = offreRepository.findById(idOffre1).get();
            System.out.println(offre);
            //compte.getFormations().add(formation);
            offre.getComptes().add(compte);
            //repository.save(compte);
            offreRepository.save(offre);
            return offre;
        } catch(Exception e){
            return null;
        }

    }
    

}
