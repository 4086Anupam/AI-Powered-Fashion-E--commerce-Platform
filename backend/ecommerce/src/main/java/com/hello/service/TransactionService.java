package com.hello.service;


import com.hello.model.Order;
import com.hello.model.Seller;
import com.hello.model.Transaction;

import java.util.List;

//@Service
public interface TransactionService {
    Transaction createTransaction(Order order);
    List<Transaction> getTransactionBySellerId(Seller seller);
    List<Transaction> getAllTransactions();

}
