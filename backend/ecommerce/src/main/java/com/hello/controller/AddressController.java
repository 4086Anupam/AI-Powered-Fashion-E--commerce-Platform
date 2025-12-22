package com.hello.controller;

import com.hello.model.Address;
import com.hello.model.User;
import com.hello.service.AddressService;
import com.hello.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/addresses")
public class AddressController {

    @Autowired
    private AddressService addressService;

    @Autowired
    private UserService userService;

    // ✅ Get all addresses for this user
    @GetMapping
    public ResponseEntity<List<Address>> getUserAddresses(@RequestHeader("Authorization") String jwt) throws Exception {
        User user = userService.findUserByJwtToken(jwt);
        return ResponseEntity.ok(addressService.getAddressesForUser(user));
    }

    // ✅ Add a new address for the current user
    @PostMapping
    public ResponseEntity<Address> addAddress(
            @RequestHeader("Authorization") String jwt,
            @RequestBody Address address) throws Exception {

        User user = userService.findUserByJwtToken(jwt);
        Address savedAddress = addressService.addAddressForUser(user, address);
        return ResponseEntity.ok(savedAddress);
    }

    // ✅ Delete address (only if belongs to this user)
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteAddress(
            @RequestHeader("Authorization") String jwt,
            @PathVariable Long id) throws Exception {

        User user = userService.findUserByJwtToken(jwt);
        addressService.deleteAddressForUser(user, id);
        return ResponseEntity.ok("Address deleted successfully");
    }
}
