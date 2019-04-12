package iyadh.pfa.repository;

import iyadh.pfa.model.Offre;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@RepositoryRestResource
@CrossOrigin(origins = "http://localhost:4200")

public interface OffreRepository  extends JpaRepository<Offre, Long> {
}
