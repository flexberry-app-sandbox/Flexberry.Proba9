package Proba9.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Proba9.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.Date;

/**
 * Entity implementation class for Entity: РегРезульт
 */
@Entity(name = "IISProba9РегРезульт")
@Table(schema = "public", name = "РегРезульт")
public class RegRezult {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "ДатРегРезСобес")
    private Date датрегрезсобес;

    @Column(name = "ИтогСобес")
    private String итогсобес;

    @Column(name = "ОценкаКандид")
    private Integer оценкакандид;

    @Column(name = "КрКомИлиОбсРеш")
    private String кркомилиобсреш;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Sotrudniki")
    @Convert("Sotrudniki")
    @Column(name = "Сотрудники", length = 16, unique = true, nullable = false)
    private UUID _sotrudnikiid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Sotrudniki", insertable = false, updatable = false)
    private Sotrudniki sotrudniki;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Organizaciya")
    @Convert("Organizaciya")
    @Column(name = "Организация", length = 16, unique = true, nullable = false)
    private UUID _organizaciyaid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Organizaciya", insertable = false, updatable = false)
    private Organizaciya organizaciya;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "PlanirSobes")
    @Convert("PlanirSobes")
    @Column(name = "ПланирСобес", length = 16, unique = true, nullable = false)
    private UUID _planirsobesid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "PlanirSobes", insertable = false, updatable = false)
    private PlanirSobes planirsobes;


    public RegRezult() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Date getДатРегРезСобес() {
      return датрегрезсобес;
    }

    public void setДатРегРезСобес(Date датрегрезсобес) {
      this.датрегрезсобес = датрегрезсобес;
    }

    public String getИтогСобес() {
      return итогсобес;
    }

    public void setИтогСобес(String итогсобес) {
      this.итогсобес = итогсобес;
    }

    public Integer getОценкаКандид() {
      return оценкакандид;
    }

    public void setОценкаКандид(Integer оценкакандид) {
      this.оценкакандид = оценкакандид;
    }

    public String getКрКомИлиОбсРеш() {
      return кркомилиобсреш;
    }

    public void setКрКомИлиОбсРеш(String кркомилиобсреш) {
      this.кркомилиобсреш = кркомилиобсреш;
    }


}