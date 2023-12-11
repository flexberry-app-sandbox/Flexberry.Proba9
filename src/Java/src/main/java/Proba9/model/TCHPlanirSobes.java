package Proba9.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Proba9.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: ТЧПланирСобес
 */
@Entity(name = "IISProba9ТЧПланирСобес")
@Table(schema = "public", name = "ТЧПланирСобес")
public class TCHPlanirSobes {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "TCHRegistAnkety")
    @Convert("TCHRegistAnkety")
    @Column(name = "ТЧРегистАнкеты", length = 16, unique = true, nullable = false)
    private UUID _tchregistanketyid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "TCHRegistAnkety", insertable = false, updatable = false)
    private TCHRegistAnkety tchregistankety;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "PlanirSobes")
    @Convert("PlanirSobes")
    @Column(name = "ПланирСобес", length = 16, unique = true, nullable = false)
    private UUID _planirsobesid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "PlanirSobes", insertable = false, updatable = false)
    private PlanirSobes planirsobes;


    public TCHPlanirSobes() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }


}