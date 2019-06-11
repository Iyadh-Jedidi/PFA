package iyadh.pfa.repository;

import iyadh.pfa.model.Compte;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.awt.print.Pageable;

@RepositoryRestResource
@CrossOrigin(origins = "http://localhost:4200")
public interface CompteRepository extends JpaRepository<Compte, Long> {
    Compte findUserByEmail(String Email);
}
