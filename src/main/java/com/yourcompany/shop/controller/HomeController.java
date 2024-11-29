package com.yourcompany.shop.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {

    @GetMapping("/")
    public String home() {
        return "index";
    }

    @GetMapping("/fashion")
    public String fashion() {
        return "fashion";
    }

    @GetMapping("/electronic")
    public String electronic() {
        return "electronic";
    }

    @GetMapping("/jewellery")
    public String jewellery() {
        return "jewellery";
    }
}

