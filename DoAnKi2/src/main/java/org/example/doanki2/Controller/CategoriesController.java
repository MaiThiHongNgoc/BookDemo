package org.example.doanki2.Controller;

import org.example.doanki2.Entity.Categories;
import org.example.doanki2.Model.Categoris.CategoriesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/categories/v1/")

public class CategoriesController {
    @Autowired
    private CategoriesService categoriesService;

    @GetMapping
    public ResponseEntity<List<Categories>> getAllCategories(){
        return categoriesService.getAllCategories();
    }
    @GetMapping("/{id}")
    public ResponseEntity<Categories> getByIdCategories(@PathVariable Integer id){
        return categoriesService.getByIdCategory(id);
    }
    @PostMapping
    public ResponseEntity<Categories> postCategory(@RequestBody Categories categories){
        return categoriesService.postCategory(categories);
    }
    @PutMapping
    public ResponseEntity<Categories> putCategory(@PathVariable Integer id, @RequestBody Categories categories){
        return categoriesService.putCategory(id, categories);
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<Categories> deleteCategory(@PathVariable Integer id){
        return categoriesService.deleteCategory(id);
    }
}
