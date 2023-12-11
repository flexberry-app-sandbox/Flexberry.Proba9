package Proba9.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Proba9.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: ТЧРегистАнкеты
 */
@Entity(name = "IISProba9ТЧРегистАнкеты")
@Table(schema = "public", name = "ТЧРегистАнкеты")
public class TCHRegistAnkety {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "ФИОКандидата")
    private String фиокандидата;

    @Column(name = "СерНомПаспорта")
    private Integer серномпаспорта;

    @Column(name = "ИНН")
    private Integer инн;

    @Column(name = "Снилс")
    private Integer снилс;

    @Column(name = "НомерТелефона")
    private Integer номертелефона;

    @Column(name = "ЭлПочта")
    private String элпочта;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Dolzhnosti")
    @Convert("Dolzhnosti")
    @Column(name = "Должности", length = 16, unique = true, nullable = false)
    private UUID _dolzhnostiid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Dolzhnosti", insertable = false, updatable = false)
    private Dolzhnosti dolzhnosti;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "RegistAnkety")
    @Convert("RegistAnkety")
    @Column(name = "РегистАнкеты", length = 16, unique = true, nullable = false)
    private UUID _registanketyid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "RegistAnkety", insertable = false, updatable = false)
    private RegistAnkety registankety;


    public TCHRegistAnkety() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getФИОКандидата() {
      return фиокандидата;
    }

    public void setФИОКандидата(String фиокандидата) {
      this.фиокандидата = фиокандидата;
    }

    public Integer getСерНомПаспорта() {
      return серномпаспорта;
    }

    public void setСерНомПаспорта(Integer серномпаспорта) {
      this.серномпаспорта = серномпаспорта;
    }

    public Integer getИНН() {
      return инн;
    }

    public void setИНН(Integer инн) {
      this.инн = инн;
    }

    public Integer getСнилс() {
      return снилс;
    }

    public void setСнилс(Integer снилс) {
      this.снилс = снилс;
    }

    public Integer getНомерТелефона() {
      return номертелефона;
    }

    public void setНомерТелефона(Integer номертелефона) {
      this.номертелефона = номертелефона;
    }

    public String getЭлПочта() {
      return элпочта;
    }

    public void setЭлПочта(String элпочта) {
      this.элпочта = элпочта;
    }


}