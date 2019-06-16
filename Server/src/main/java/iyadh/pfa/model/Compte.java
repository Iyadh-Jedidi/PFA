package iyadh.pfa.model;

import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.io.File;
import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import javax.persistence.CascadeType;
import javax.persistence.FetchType;
import javax.persistence.ManyToMany;

@Entity
@NoArgsConstructor
@ToString
public class Compte {

    @Id @GeneratedValue
    private Long id;
    private String name;
    private String lastname;
    private String TypeCompteId;
    private String email;
    private String password;
    private Long Tel;
    private Date DateBirth;
    private String Address;
    private String CV;
    private File Contrat;
    private String poste;
    private int accepte ;
    
     /*@ManyToMany(fetch = FetchType.LAZY,
            cascade = {
                CascadeType.PERSIST,
                CascadeType.MERGE
            },
            mappedBy = "comptes")
    private List<Formation> formations ;
*/
    /**
     *
     */
    

   
    
    public Compte (Long id,String name, String lastname, String TypeCompteId, String email,String password, Long tel, Date dateBirth,String addres,
                  String cv, File contrat, String poste,int accepte ){
        this.id=id;
        this.name=name;
        this.lastname=lastname;
        this.TypeCompteId=TypeCompteId;
        this.email=email;
        this.password=password;
        this.Tel=tel;
        this.DateBirth=dateBirth;
        this.Address=addres;
        this.CV=cv;
        this.Contrat=contrat;
        this.poste=poste;
        this.accepte=accepte;
    }


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

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public String getTypeCompteId() {
        return TypeCompteId;
    }

    public void setTypeCompteId(String typeCompteId) {
        TypeCompteId = typeCompteId;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Long getTel() {
        return Tel;
    }

    public void setTel(Long tel) {
        Tel = tel;
    }

    public Date getDateBirth() {
        return DateBirth;
    }

    public void setDateBirth(Date dateBirth) {
        DateBirth = dateBirth;
    }

    public String getAddress() {
        return Address;
    }

    public void setAddress(String address) {
        Address = address;
    }

    public String getCV() {
        return CV;
    }

    public void setCV(String CV) {
        this.CV = CV;
    }

    public File getContrat() {
        return Contrat;
    }

    public void setContrat(File contrat) {
        Contrat = contrat;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getPoste() {
        return poste;
    }

    public void setPoste(String poste) {
        this.poste = poste;
    }

    public int getAccepte() {
        return accepte;
    }

    public void setAccepte(int accepte) {
        this.accepte = accepte;
    }

    /*public List<Formation> getFormations() {
        return formations;
    }

    public void setFormations(List<Formation> formations) le{
        this.formations = formations;
    }*/

    /**
     * @return the formations
     */

}
