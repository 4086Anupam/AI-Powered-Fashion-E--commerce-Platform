package com.hello.service.impl;

import com.hello.Repository.SellerReportRepository;
import com.hello.model.Seller;
import com.hello.model.SellerReports;
import com.hello.service.SellerReportService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class SellerReportServiceImpl implements SellerReportService {
    private final SellerReportRepository sellerReportRepository;
    @Override
    public SellerReports getSellerReport(Seller seller) {
        SellerReports sellerReports=sellerReportRepository.findBySellerId(seller.getId());
        if(sellerReports==null){
            SellerReports newReport=new SellerReports();
            newReport.setSeller(seller);
            return  sellerReportRepository.save(newReport);
        }
        return sellerReports;
    }

    @Override
    public SellerReports updateSellerReport(SellerReports sellerReports) {
        return sellerReportRepository.save(sellerReports);
    }
}
