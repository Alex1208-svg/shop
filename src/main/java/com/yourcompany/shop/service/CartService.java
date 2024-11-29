package com.yourcompany.shop.service;

import com.yourcompany.shop.model.Cart;
import com.yourcompany.shop.model.CartItem;
import com.yourcompany.shop.model.Product;
import com.yourcompany.shop.repository.ProductRepository;
import org.springframework.stereotype.Service;

@Service
public class CartService {

    private final Cart cart = new Cart();
    private final ProductRepository productRepository;

    public CartService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public Cart getCart() {
        return cart;
    }

    public void addProductToCart(Long productId, int quantity) {
        Product product = productRepository.findById(productId)
                .orElseThrow(() -> new IllegalArgumentException("Product not found"));
        CartItem cartItem = new CartItem(product.getId(), product.getName(), product.getPrice(), quantity);
        cart.addItem(cartItem);
    }

    public void removeProductFromCart(Long productId) {
        cart.removeItem(productId);
    }
}

