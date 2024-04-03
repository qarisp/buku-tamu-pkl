package dev.qarisp.bukutamu.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import dev.qarisp.bukutamu.Model.Tamu;
import dev.qarisp.bukutamu.Service.BukuTamuService;

@RestController
@CrossOrigin("http://localhost:5173/")
@RequestMapping("/api/buku-tamu")
public class BukuTamuController {
    
    @Autowired
    private BukuTamuService bukuTamuService;

    @PostMapping("/tambah")
    public Tamu tambahTamu(@RequestBody Tamu tamuBaru) {
        return bukuTamuService.addTamu(tamuBaru);
    }

    @GetMapping
    public List<Tamu> semuaTamu() {
        return bukuTamuService.allTamu();
    }

    @GetMapping("/{id}")
    public Optional<Tamu> satuTamu(@PathVariable Long id) {
        return bukuTamuService.singleTamu(id);
    }

    @DeleteMapping("/{id}")
    public String hapusTamu(@PathVariable Long id) {
        return bukuTamuService.deleteTamu(id);
    }

    @PutMapping("/{id}")
    public Optional<Tamu> ubahInformasiTamu(@RequestBody Tamu tamuBaru, @PathVariable Long id) {
        return bukuTamuService.editTamu(tamuBaru, id);
    }

}
