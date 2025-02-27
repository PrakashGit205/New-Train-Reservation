package com.railnexus.controller;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.railnexus.dao.PassengerDao;
import com.railnexus.dao.SeatDao;
import com.railnexus.dto.PassengerResponseDTO;
import com.railnexus.pojos.Passenger;
import com.railnexus.services.PassengerService;
import com.railnexus.services.SeatService;

@RestController
@RequestMapping("/passenger")
public class PassengerController {
	@Autowired
	private PassengerService service;

	@Autowired
	private PassengerDao dao;

	@Autowired
	private ModelMapper model;
	
	@GetMapping
	public List<Passenger> allPassengers(){
		return dao.findAll();
	}
	@PostMapping
	public Passenger addPassenger(@RequestBody Passenger dto) {
		return dao.save(dto)
;	}

}
