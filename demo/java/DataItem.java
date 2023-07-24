package com.by.lc;

import java.util.List;

public class DataItem {
	private int id;
	private String name;
	private int age;

	// Getter and Setter methods

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}
}

class MasterData {
	private List<DataItem> dataList;

	// Getter and Setter methods

	public List<DataItem> getDataList() {
		return dataList;
	}

	public void setDataList(List<DataItem> dataList) {
		this.dataList = dataList;
	}
}

class RequestData {
	private String msg;
	private String token;
	private MasterData masterData;

	// Getter and Setter methods

	public String getMsg() {
		return msg;
	}

	public void setMsg(String msg) {
		this.msg = msg;
	}

	public String getToken() {
		return token;
	}

	public void setToken(String token) {
		this.token = token;
	}

	public MasterData getMasterData() {
		return masterData;
	}

	public void setMasterData(MasterData masterData) {
		this.masterData = masterData;
	}
}
