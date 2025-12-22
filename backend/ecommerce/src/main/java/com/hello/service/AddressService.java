//package com.hello.service;
//
//import com.hello.modal.Address;
//import com.hello.modal.User;
//import com.hello.Repository.AddressRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import java.util.ArrayList;
//import java.util.List;
//
//@Service
//public class AddressService {
//
//    @Autowired
//    private AddressRepository addressRepository;
//
//    // ✅ Add address for current user
//    public Address addAddressForUser(User user, Address address) {
//        address.setUser(user);
//        return addressRepository.save(address);
//    }
//
//    // ✅ Get addresses for current user
//    public List<Address> getAddressesForUser(User user) {
//        return new ArrayList<>(user.getAddresses());
//    }
//
//    // ✅ Delete address (only if belongs to user)
//    public void deleteAddressForUser(User user, Long addressId) throws Exception {
//        Address address = addressRepository.findById(addressId)
//                .orElseThrow(() -> new Exception("Address not found"));
//        if (address.getUser().getId() != user.getId()) {
//            throw new Exception("Unauthorized: Address does not belong to this user.");
//        }
//        addressRepository.delete(address);
//    }
//}




package com.hello.service;

import com.hello.Repository.AddressRepository;
import com.hello.model.Address;
import com.hello.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AddressService {

    @Autowired
    private AddressRepository addressRepository;

    // ✅ Add address for current user
    public Address addAddressForUser(User user, Address address) {
        address.setUser(user); // link user to address
        return addressRepository.save(address);
    }

    // ✅ Get all addresses for current user
    public List<Address> getAddressesForUser(User user) {
        return addressRepository.findByUser(user);
    }

    // ✅ Delete address (only if it belongs to the logged-in user)
    public void deleteAddressForUser(User user, Long addressId) throws Exception {
        Address address = addressRepository.findById(addressId)
                .orElseThrow(() -> new Exception("Address not found"));

        if (address.getUser().getId() != user.getId()) {
            throw new Exception("Unauthorized: Cannot delete another user's address");
        }

        addressRepository.delete(address);
    }
}
