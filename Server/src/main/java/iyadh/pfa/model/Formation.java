package iyadh.pfa.model;

import java.util.HashSet;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.util.List;
import java.util.Set;
import javax.persistence.CascadeType;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;

@Entity
@NoArgsConstructor
@ToString
public class Formation {
    @Id
    @GeneratedValue
    private Long idFormation;
    private String name;
    private String description;
    private String duree;
    @ManyToMany(fetch = FetchType.LAZY,
            cascade = {
                    CascadeType.PERSIST,
                    CascadeType.MERGE
            })
    @JoinTable(name = "DemandesFormation",
            joinColumns = {@JoinColumn(name = "idFormation")},
            inverseJoinColumns = {@JoinColumn(name = "idCompte")})
    private List<Compte> comptes;
//    public Formation(){}
    
    public Long getId() {
        return idFormation;
    }
    
    public void setId(Long id) {
        this.idFormation = id;
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

    /**
     * @return the comptes
     */

     

    public Formation(Long id, String name, String description, String duree) {
        this.idFormation = id;
        this.name = name;
        this.description = description;
        this.duree = duree;
    }


    public List<Compte> getComptes() {
        return comptes;
    }

    public void setComptes(List<Compte> comptes) {
        this.comptes = comptes;
    }
}
