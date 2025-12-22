package com.hello.service.impl;

import com.hello.Repository.HomeCtegoryRepository;
import com.hello.model.HomeCategory;
import com.hello.service.HomeCategoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class HomeCategoryServiceImpl implements HomeCategoryService {
    private final HomeCtegoryRepository homeCtegoryRepository;

    @Override
    public HomeCategory createHomeCategory(HomeCategory homeCategory) {
        return homeCtegoryRepository.save(homeCategory);
    }

    @Override
    public List<HomeCategory> createCategories(List<HomeCategory> homeCategories) {
        if (homeCtegoryRepository.findAll().isEmpty()){
            return homeCtegoryRepository.saveAll(homeCategories);
        }
        return homeCtegoryRepository.findAll();
    }

    @Override
    public HomeCategory updateHomeCategory(HomeCategory category, Long id) throws Exception {
        HomeCategory existingCategory = homeCtegoryRepository.findById(id)
                .orElseThrow(() -> new Exception("Category not found"));

        if(category.getImage()!=null){
            existingCategory.setImage(category.getImage());
        }

        if(category.getCategoryId()!=null){
            existingCategory.setCategoryId(category.getCategoryId());
        }

        return homeCtegoryRepository.save(existingCategory);
    }

    @Override
    public List<HomeCategory> getAllHomeCategories() {
        return homeCtegoryRepository.findAll();
    }
}
