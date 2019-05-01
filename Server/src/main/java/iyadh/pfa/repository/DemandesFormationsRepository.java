package iyadh.pfa.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;
import iyadh.pfa.model.DemandesFormation;

@RepositoryRestResource
@CrossOrigin(origins = "http://localhost:4200")
public interface DemandesFormationsRepository extends JpaRepository<DemandesFormation,Long> {
}
