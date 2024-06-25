package org.example.doanki2.Model.PaymentMethods;

import org.example.doanki2.Entity.PaymentMethods;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;
import java.util.Optional;

@Service
public class PayMentMethodsService {
    @Autowired
    private PaymentMethodsRepository paymentMethodsRepository;

    public ResponseEntity<List<PaymentMethods>> getAllPayment(){
        List<PaymentMethods> paymentMethodsList = paymentMethodsRepository.findAll();
        return ResponseEntity.ok(paymentMethodsList);
    }

    public ResponseEntity<PaymentMethods> getByIdPayment(int id){
        Optional<PaymentMethods> optionalPaymentMethods = paymentMethodsRepository.findById(id);
        if (!optionalPaymentMethods.isPresent()){
            throw new IllegalArgumentException("id not found");
        }
        return ResponseEntity.ok().body(optionalPaymentMethods.get());
    }
    public ResponseEntity<PaymentMethods> postPayment(PaymentMethods paymentMethods){
        PaymentMethods paymentMethods1 = paymentMethodsRepository.save(paymentMethods);
        URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(paymentMethods1.getPayment_method_id()).toUri();

        return ResponseEntity.created(location).body(paymentMethods1);
    }
    public ResponseEntity<PaymentMethods> putPayment(int id, PaymentMethods paymentMethods){
        Optional<PaymentMethods> paymentMethodsOptional = paymentMethodsRepository.findById(id);
        if (!paymentMethodsOptional.isPresent()){
            throw new IllegalArgumentException("id not found");
        }
        paymentMethods.setPayment_method_id(paymentMethodsOptional.get().getPayment_method_id());
        paymentMethodsRepository.save(paymentMethods);

        return ResponseEntity.ok().body(paymentMethods);
    }
    public ResponseEntity<PaymentMethods> deletePayment(int id){
        Optional<PaymentMethods> optionalPaymentMethods = paymentMethodsRepository.findById(id);
        if (!optionalPaymentMethods.isPresent()) {
            throw new IllegalArgumentException("id not found");
        }
        paymentMethodsRepository.deleteById(optionalPaymentMethods.get().getPayment_method_id());
        return ResponseEntity.noContent().build();
    }

}
