package dev.qarisp.bukutamu.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import dev.qarisp.bukutamu.Model.Tamu;

@Repository
public interface BukuTamuRepository extends JpaRepository<Tamu, Long> {
    
}
