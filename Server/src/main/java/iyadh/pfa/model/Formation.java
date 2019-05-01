package iyadh.pfa.model;

import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.util.Set;

@Entity
@NoArgsConstructor
@ToString
@EqualsAndHashCode
public class Formation {
    @Id
    @GeneratedValue
    private Long id;
    private String name;
    private String description;
    private String duree;


    @OneToMany
    private Set<Compte> demande;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getDuree() {
        return duree;
    }

    public void setDurée(String duree) {
        this.duree = duree;
    }

    public Set<Compte> getDemande() {
        return demande;
    }

    public void setDemande(Set<Compte> demande) {
        this.demande = demande;
    }
}
