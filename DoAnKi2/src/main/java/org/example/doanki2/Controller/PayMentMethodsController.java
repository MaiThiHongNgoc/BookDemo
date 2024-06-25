package org.example.doanki2.Controller;

import org.example.doanki2.Entity.PaymentMethods;
import org.example.doanki2.Model.PaymentMethods.PayMentMethodsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/paymentmethods/v1/")
public class PayMentMethodsController {
    @Autowired
    private PayMentMethodsService payMentMethodsService;

    @GetMapping
    public ResponseEntity<List<PaymentMethods>> getAll(){
        return payMentMethodsService.getAllPayment();
    }
    @GetMapping("/{id}")
    public ResponseEntity<PaymentMethods> getById(@PathVariable Integer id){
        return payMentMethodsService.getByIdPayment(id);
    }
    @PostMapping
    public ResponseEntity<PaymentMethods> postPayment(@RequestBody PaymentMethods paymentMethods){
        return payMentMethodsService.postPayment(paymentMethods);
    }
    @PutMapping("/{id}")
    public ResponseEntity<PaymentMethods> putPayment(@PathVariable Integer id, @RequestBody PaymentMethods paymentMethods){
        return payMentMethodsService.putPayment(id, paymentMethods);
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<PaymentMethods> delete(@PathVariable Integer id){
        return payMentMethodsService.deletePayment(id);
    }

}
