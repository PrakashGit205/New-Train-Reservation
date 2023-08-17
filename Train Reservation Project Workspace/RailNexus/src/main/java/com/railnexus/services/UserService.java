package com.railnexus.services;

import java.time.LocalDate;
import java.util.List;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.railnexus.dao.UserDao;
import com.railnexus.dto.AddUserDTO;
import com.railnexus.exception.ResourceNotFoundException;
import com.railnexus.pojos.User;
import com.railnexus.services.interfaces.IUserService;

@Service
@Transactional
public class UserService implements IUserService{
	
	@Autowired
	private UserDao userDao;
	
	@Autowired
	private ModelMapper mapper;
	
	@Override
	public List<User> allUsers() {
		// TODO Auto-generated method stub
		return userDao.findAll();
	}

	@Override
	public User getUserById(Long id) {
		
		return userDao.findById(id).orElseThrow(() -> new ResourceNotFoundException("Invalid User Id!!!"));
	}

	@Override
	public User login(String email, String password) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public User addUser(AddUserDTO dto) {
		User user = mapper.map(dto, User.class);
		user.setRegDate(LocalDate.now());
		return userDao.save(user);
	}

}
