package aecc.wcm.cms.test;

import java.io.Serializable;
import java.util.List;

public class C implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public List<Student> stuList;

	public List<Student> getStuList() {
		return stuList;
	}

	public void setStuList(final List<Student> stuList) {
		this.stuList = stuList;
	}

	@Override
	public String toString() {
		return "C [stuList=" + stuList + "]";
	}

}
