package iyadh.pfa.repository;

import iyadh.pfa.model.Formation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@RepositoryRestResource
@CrossOrigin(origins = "http://localhost:4200")
public interface FormationRepository extends JpaRepository<Formation, Long> {
}
