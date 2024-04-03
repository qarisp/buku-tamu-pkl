package dev.qarisp.bukutamu.Model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "TAMU")
public class Tamu {

    @GeneratedValue
    @Id
    @Column(name = "ID")
    private Long id;

    @Column(name = "NAMA")
    private String nama;

    @Column(name = "INSTANSI")
    private String instansi;

    @Column(name = "DEPARTMENT")
    private String department;

    @Column(name = "JABATAN")
    private String jabatan;

    @Column(name = "TUJUAN_KUNJUNGAN")
    private String tujuanKunjungan;
    
}
