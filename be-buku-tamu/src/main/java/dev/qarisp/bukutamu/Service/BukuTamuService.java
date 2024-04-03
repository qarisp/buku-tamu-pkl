package dev.qarisp.bukutamu.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import dev.qarisp.bukutamu.Model.Tamu;
import dev.qarisp.bukutamu.Repository.BukuTamuRepository;

@Service
public class BukuTamuService {
    
    @Autowired
    private BukuTamuRepository bukuTamuRepository;

    public Tamu addTamu(Tamu tamuBaru) {
        return bukuTamuRepository.save(tamuBaru);
    }

    public List<Tamu> allTamu() {
        return bukuTamuRepository.findAll();
    }

    public Optional<Tamu> singleTamu(Long id) {
        return bukuTamuRepository.findById(id);
    }

    public String deleteTamu(Long id) {
        if ( bukuTamuRepository.existsById(id) ) {
            bukuTamuRepository.deleteById(id);
            return "Tamu dengan id " + id + " berhasil dihapus.";
        } else {
            return "Tamu dengan id " + id + " tidak dapat ditemukan.";
        }
    }

    public Optional<Tamu> editTamu(Tamu tamuBaru, Long id) {
        Optional<Tamu> tamuOptional = bukuTamuRepository.findById(id);

        if ( tamuOptional.isPresent() ) {
            Tamu tamu = tamuOptional.get();
            tamu.setNama(tamuBaru.getNama());
            tamu.setInstansi(tamuBaru.getInstansi());
            tamu.setDepartment(tamuBaru.getDepartment());
            tamu.setJabatan(tamuBaru.getJabatan());
            tamu.setTujuanKunjungan(tamuBaru.getTujuanKunjungan());

            Tamu updatedTamu = bukuTamuRepository.save(tamu);
            return Optional.of(updatedTamu);
        } else {
            return Optional.empty();
        }

    }

}
