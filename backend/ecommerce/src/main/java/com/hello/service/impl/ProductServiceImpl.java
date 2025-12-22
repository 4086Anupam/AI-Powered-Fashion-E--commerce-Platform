package com.hello.service.impl;

import com.hello.Exception.ProductException;
import com.hello.Repository.CategoryRepository;
import com.hello.Repository.ProductRepository;
import com.hello.model.Category;
import com.hello.model.Product;
import com.hello.model.Seller;
import com.hello.request.CreateProductRequest;
import com.hello.service.ProductService;
import jakarta.persistence.criteria.Join;
import jakarta.persistence.criteria.Predicate;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
//import java.util.function.Predicate;

@Service
@RequiredArgsConstructor
public class ProductServiceImpl implements ProductService {
    private final ProductRepository productRepository;
    private final CategoryRepository categoryRepository;

//    @Override
//    public Product createProduct(CreateProductRequest req, Seller seller) {
//        Category category1=categoryRepository.findByCategoryId(req.getCategory());
//        if (category1!=null){
//            Category category=new Category();
//            category.setCategoryId(req.getCategory());
//            category.setLevel(1);
//            category1=categoryRepository.save(category);
//
//        }
//        Category category2=categoryRepository.findByCategoryId(req.getCategory2());
//        if (category2!=null){
//            Category category=new Category();
//            category.setCategoryId(req.getCategory());
//            category.setLevel(2);
//            category.setParentCategory(category1);
//            category1=categoryRepository.save(category);
//
//        }
//        Category category3=categoryRepository.findByCategoryId(req.getCategory3());
//        if (category3!=null){
//            Category category=new Category();
//            category.setCategoryId(req.getCategory());
//            category.setLevel(3);
//            category.setParentCategory(category2);
//            category1=categoryRepository.save(category);
//
//        }
//
//        int discountPercentage = calculateDiscountPercentage(req.getMrpPrice(),req.getSellingPrice());
//
//        Product product=new Product();
//        product.setSeller(seller);
//        product.setCategory(category3);
//        product.setDescription(req.getDescription());
//        product.setCreatedAt(LocalDateTime.now());
//        product.setTitle(req.getTitle());
//        product.setColor(req.getColor());
//        product.setSellingPrice(req.getSellingPrice());
//        product.setImages(req.getImages());
//        product.setMrpPrice(req.getMrpPrice());
//        product.setSizes(req.getSizes());
//        product.setDiscountPercent(discountPercentage);
//        return productRepository.save(product);
//
//
//
////        return null;
//    }



@Override
public Product createProduct(CreateProductRequest req, Seller seller) {

    // ✅ Level-1 Category
    Category category1 = categoryRepository.findByCategoryId(req.getCategory());
    if (category1 == null) {
        category1 = new Category();
        category1.setCategoryId(req.getCategory());
        category1.setLevel(1);
        category1 = categoryRepository.save(category1);
    }

    // ✅ Level-2 Category
    Category category2 = categoryRepository.findByCategoryId(req.getCategory2());
    if (category2 == null) {
        category2 = new Category();
        category2.setCategoryId(req.getCategory2());
        category2.setLevel(2);
        category2.setParentCategory(category1);
        category2 = categoryRepository.save(category2);
    }

    // ✅ Level-3 Category
    Category category3 = categoryRepository.findByCategoryId(req.getCategory3());
    if (category3 == null) {
        category3 = new Category();
        category3.setCategoryId(req.getCategory3());
        category3.setLevel(3);
        category3.setParentCategory(category2);
        category3 = categoryRepository.save(category3);
    }

    int discountPercentage = calculateDiscountPercentage(req.getMrpPrice(), req.getSellingPrice());

    Product product = new Product();
    product.setSeller(seller);
    product.setCategory(category3);
    product.setDescription(req.getDescription());
    product.setCreatedAt(LocalDateTime.now());
    product.setTitle(req.getTitle());
    product.setColor(req.getColor());
    product.setSellingPrice(req.getSellingPrice());
    product.setImages(req.getImages());
    product.setMrpPrice(req.getMrpPrice());
    product.setSizes(req.getSizes());
    product.setDiscountPercent(discountPercentage);

    return productRepository.save(product);
}

    private int calculateDiscountPercentage(int mrpPrice, int sellingPrice) {
        if (mrpPrice<=0){
            throw new IllegalArgumentException("ActualPrice Must be >0");

        }
        double discount = mrpPrice-sellingPrice;
        double discountPercentage=(discount/mrpPrice)*100;
        return (int)discountPercentage;
    }

    @Override
    public void deleteProduct(Long productId) throws ProductException {
        Product product=findProductById(productId);
        productRepository.delete(product);

    }

    @Override
    public Product updateProduct(Long productId, Product product) throws ProductException {
        findProductById(productId);
        product.setId(productId);

        return productRepository.save(product);
    }

    @Override
    public Product findProductById(Long productId) throws ProductException {

        return productRepository.findById(productId).orElseThrow(()->
        new ProductException("Product not Found"+productId));
    }

    @Override
    public List<Product> searchProducts(String query) {
        return productRepository.searchProduct(query);
    }

    @Override
    public Page<Product> getAllProducts(String category, String brand, String colors, String sizes, Integer minPrice, Integer maxPrice, Integer minDiscount, String sort, String stock, Integer pageNumber) {

        Specification<Product> spec = (root,
                                       query,
                                       criteriaBuilder) -> {
            List<Predicate> predicates=new ArrayList<>();
            if (category!=null){
                Join<Product,Category> categoryJoin = root.join("category");
                predicates.add(criteriaBuilder.equal(categoryJoin.get("categoryId"),category));
            }
            if (colors != null && !colors.isEmpty()) {
                System.out.println("color " + colors);
                predicates.add(criteriaBuilder.equal(root.get("color"), colors));
            }

            // Filter by size (single value)
            if (sizes != null && !sizes.isEmpty()) {
                predicates.add(criteriaBuilder.equal(root.get("size"), sizes));
            }
            if (minPrice != null) {
                predicates.add(criteriaBuilder.greaterThanOrEqualTo(root.get("sellingPrice"), minPrice));
            }
            if (maxPrice != null) {
                predicates.add(criteriaBuilder.lessThanOrEqualTo(root.get("sellingPrice"), maxPrice));
            }

            if (minDiscount != null) {
                predicates.add(criteriaBuilder.greaterThanOrEqualTo(root.get("discountPercent"), minDiscount));
            }

            if (stock != null) {
                predicates.add(criteriaBuilder.equal(root.get("stock"), stock));
            }

            return criteriaBuilder.and(predicates.toArray(new Predicate[0]));
        };
        Pageable pageable;
        if(sort!=null && !sort.isEmpty()){
            pageable = switch (sort) {
                case "price_low" -> PageRequest.of(pageNumber != null ? pageNumber : 0, 10,
                        Sort.by("sellingPice").ascending());
                case "price_high" -> PageRequest.of(pageNumber != null ? pageNumber : 0, 10,
                        Sort.by("sellingPice").descending());
                default -> PageRequest.of(pageNumber != null ? pageNumber : 0, 10,
                        Sort.unsorted());
            };
        }
        else {
            pageable=PageRequest.of(pageNumber!=null? pageNumber:0,10,
                    Sort.unsorted());
        }
        return productRepository.findAll(spec,pageable);

    }

    @Override
    public List<Product> getProductBySellerId(Long sellerId) {
        return productRepository.findBySellerId(sellerId);
    }
}
