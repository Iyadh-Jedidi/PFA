package iyadh.pfa.model;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.util.Date;
import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
@Entity
@NoArgsConstructor
@ToString @EqualsAndHashCode
public class Offre {
    @Id
    @GeneratedValue
    private Long idOffre;
    private String name;
    private String description;
    private Date CreationDate;
    private String Disponible;
    private int Salary;
    
    
     @ManyToMany(fetch = FetchType.LAZY,
            cascade = {
                    CascadeType.PERSIST,
                    CascadeType.MERGE
            })
    @JoinTable(name = "DemandesOffre",
            joinColumns = {@JoinColumn(name = "idOffre")},
            inverseJoinColumns = {@JoinColumn(name = "idCompte")})
    private List<Compte> comptes;
    

    public Long getId() {
        return idOffre;
    }

    public void setId(Long id) {
        this.idOffre = id;
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

    public Date getCreationDate() {
        return CreationDate;
    }

    public void setCreationDate(Date creationDate) {
        CreationDate = creationDate;
    }

    public String getDisponible() {
        return Disponible;
    }

    public void setDisponible(String disponible) {
        Disponible = disponible;
    }

    public int getSalary() {
        return Salary;
    }

    public void setSalary(int salary) {
        Salary = salary;
    }

    /**
     * @return the comptes
     */
    public List<Compte> getComptes() {
        return comptes;
    }

    /**
     * @param comptes the comptes to set
     */
    public void setComptes(List<Compte> comptes) {
        this.comptes = comptes;
    }
}
