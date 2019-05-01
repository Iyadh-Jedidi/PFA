package iyadh.pfa.model;

import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
@NoArgsConstructor
@ToString @EqualsAndHashCode
public class DemandesFormation {
    @Id @GeneratedValue
    private Long id;
    private Long idFormation;
    private Long idCompte;
    public Long getId() {
        return id;
      }
    
      public void setId(Long id) {
        this.id = id;
      }
    
    public Long getIdFormation() {
        return idFormation;
    }

    public void setIdFormation(Long idFormation) {
        this.idFormation = idFormation;
    }

    public Long getIdCompte() {
        return idCompte;
    }

    public void setIdCompte(Long idCompte) {
        this.idCompte = idCompte;
    }




}
