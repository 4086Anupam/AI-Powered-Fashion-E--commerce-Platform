package com.hello.service;

import com.hello.model.Product;
import com.hello.model.Review;
import com.hello.model.User;
import com.hello.request.CreateReviewRequest;

import java.util.List;

public interface ReviewService {
    Review createReview(CreateReviewRequest req,
                        User user,
                        Product product);
    List<Review> getReviewByProductId(Long productId);

    Review updateReview(Long reviewId,
                        String reviewText,
                        double ratting,
                        Long userId) throws Exception;
    void deleteReview(Long reviewId, Long userId) throws Exception;

    Review getReviewById(Long reviewId) throws Exception;
}
