package org.example.doanki2.Model.OrderDetail;

import org.example.doanki2.Entity.OrderDetails;
import org.example.doanki2.Entity.Orders;
import org.example.doanki2.Entity.Products;
import org.example.doanki2.Model.Orders.OrderRepository;
import org.example.doanki2.Model.Products.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.Optional;

@Service
public class OrderDetailService {
    @Autowired
    private OrderDetailRepository orderDetailRepository;
    @Autowired
    private ProductRepository productRepository;
    @Autowired
    private OrderRepository orderRepository;

    public ResponseEntity<Page<OrderDetails>> getAllOrderDetail(Pageable pageable){
       return ResponseEntity.ok(orderDetailRepository.findAll(pageable));
    }

    public ResponseEntity<OrderDetails> getByIdOrderDetail(int id){
        Optional<OrderDetails> orderDetails = orderDetailRepository.findById(id);
        if (!orderDetails.isPresent()){
            throw new IllegalArgumentException("id not found");
        }
        return ResponseEntity.ok().body(orderDetails.get());
    }
    public ResponseEntity<OrderDetails> postOrderDetail(OrderDetails orderDetails){
        Optional<Orders> ordersOptional = orderRepository.findById(orderDetails.getOrders().getOrder_id());
        if (!ordersOptional.isPresent()){
            throw new IllegalArgumentException("id not found");
        }
        Optional<Products> productsOptional = productRepository.findById(orderDetails.getProducts().getProduct_id());
        if(!productsOptional.isPresent()){
            throw new IllegalArgumentException("id not found");
        }
        orderDetails.setOrders(ordersOptional.get());
        orderDetails.setProducts(productsOptional.get());

        OrderDetails orderDetailsSave = orderDetailRepository.save(orderDetails);
        URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(orderDetails.getOrder_detail_id()).toUri();

        return ResponseEntity.created(location).body(orderDetailsSave);
    }
    public ResponseEntity<OrderDetails> putOrderDetail(int id, OrderDetails orderDetails){
        Optional<OrderDetails> orderDetailsOptional = orderDetailRepository.findById(id);
        if (!orderDetailsOptional.isPresent()){
            throw new IllegalArgumentException("id not found");
        }
        Optional<Orders> ordersOptional = orderRepository.findById(orderDetails.getOrders().getOrder_id());
        if (!ordersOptional.isPresent()){
            throw new IllegalArgumentException("id not found");
        }
        Optional<Products> productsOptional = productRepository.findById(orderDetails.getProducts().getProduct_id());
        if (!productsOptional.isPresent()){
            throw new IllegalArgumentException("id not found");
        }
        orderDetails.setOrder_detail_id(orderDetailsOptional.get().getOrder_detail_id());
        orderDetails.setOrders(ordersOptional.get());
        orderDetails.setProducts(productsOptional.get());

        OrderDetails saveOrderDetail = orderDetailRepository.save(orderDetails);

        return ResponseEntity.ok().body(saveOrderDetail);
    }

    public ResponseEntity<OrderDetails> deleteOrderDetail(int id){
        Optional<OrderDetails> orderDetails = orderDetailRepository.findById(id);
        if (!orderDetails.isPresent()){
            throw new IllegalArgumentException("id not found");
        }
        orderDetailRepository.deleteById(orderDetails.get().getOrder_detail_id());

        return ResponseEntity.noContent().build();
    }

}
