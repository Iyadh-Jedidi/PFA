package iyadh.pfa.model;

import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

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

    public String getDurée() {
        return duree;
    }

    public void setDurée(String durée) {
        this.duree = durée;
    }
}
