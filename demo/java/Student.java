package aecc.wcm.cms.test;

import java.io.Serializable;

public class Student implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	private String age;

	private String name;

	public String getAge() {
		return age;
	}

	public void setAge(final String age) {
		this.age = age;
	}

	public String getName() {
		return name;
	}

	public void setName(final String name) {
		this.name = name;
	}

	@Override
	public String toString() {
		return "Student [age=" + age + ", name=" + name + "]";
	}

}
