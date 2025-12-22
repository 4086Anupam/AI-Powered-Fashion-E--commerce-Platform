package com.hello.service;

import com.hello.model.Seller;
import com.hello.model.SellerReports;

public interface SellerReportService {
    SellerReports getSellerReport(Seller seller);
    SellerReports updateSellerReport(SellerReports sellerReports);
}
