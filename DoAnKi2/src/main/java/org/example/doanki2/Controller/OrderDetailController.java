package org.example.doanki2.Controller;

import org.example.doanki2.Entity.OrderDetails;
import org.example.doanki2.Model.OrderDetail.OrderDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/orderdetail/v1/")
@CrossOrigin(origins = "http://localhost:3000")
public class OrderDetailController {
    @Autowired
    OrderDetailService orderDetailService;

    @GetMapping
    public ResponseEntity<Page<OrderDetails>> getAll(Pageable pageable){
        return orderDetailService.getAllOrderDetail(pageable);
    }
    @GetMapping("/{id}")
    public ResponseEntity<OrderDetails> getById(@PathVariable Integer id){
        return orderDetailService.getByIdOrderDetail(id);
    }
    @PostMapping
    public ResponseEntity<OrderDetails> post(@RequestBody OrderDetails orderDetails){
        return orderDetailService.postOrderDetail(orderDetails);
    }
    @PutMapping("/{id}")
    public ResponseEntity<OrderDetails> put(@PathVariable Integer id, @RequestBody OrderDetails orderDetails){
        return orderDetailService.putOrderDetail(id, orderDetails);
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<OrderDetails> delete(@PathVariable Integer id){
        return orderDetailService.deleteOrderDetail(id);
    }
}
