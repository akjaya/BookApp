package com.example.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.model.ImageModel;

public interface ImageRepository extends JpaRepository<ImageModel, Long> {

}
