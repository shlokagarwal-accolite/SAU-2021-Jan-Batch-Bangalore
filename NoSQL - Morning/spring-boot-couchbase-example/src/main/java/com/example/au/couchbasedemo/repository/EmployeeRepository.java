package com.example.au.couchbasedemo.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.example.au.couchbasedemo.model.Employee;

public interface EmployeeRepository extends CrudRepository<Employee, String> {

	List<Employee> findByLocationAndPincode(String location, String pincode);
}