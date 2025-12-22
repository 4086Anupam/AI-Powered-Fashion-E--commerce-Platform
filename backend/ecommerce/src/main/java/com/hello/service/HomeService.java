package com.hello.service;

import com.hello.model.Home;
import com.hello.model.HomeCategory;

import java.util.List;

public interface HomeService {

    public Home createHomePageData(List<HomeCategory> allCategories);

}
