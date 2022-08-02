package com.t2009m1.spring_ecommerce.entity.dto;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.t2009m1.spring_ecommerce.entity.OrderDetail;
import com.t2009m1.spring_ecommerce.entity.entityEnum.OrderStatus;
import com.t2009m1.spring_ecommerce.entity.entityEnum.PaymentMethod;
import com.t2009m1.spring_ecommerce.entity.entityEnum.PaymentStatus;
import lombok.*;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.FetchType;
import javax.persistence.OneToMany;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import java.util.Set;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class OrderDto {
    private long id;
    @NotNull(message = "User Id cannot null")
    private long userId;
    @NotEmpty(message = "Customer name cannot be empty")
    private String customerName;
    @NotEmpty(message = "Customer email cannot be empty")
    private String customerEmail;
    @NotEmpty(message = "Customer name cannot be empty")
    private String customerPhone;
    @NotEmpty(message = "Customer address cannot be empty")
    private String customerAddress;
    private String note;
    private OrderStatus status;
    private PaymentStatus paymentStatus;
    private PaymentMethod paymentMethod;
    private double totalMoney;
    @NotEmpty
    private Set<OrderDetailDto> orderDetails;
}
