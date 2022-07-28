package aecc.wcm.cms.test;

import java.io.Serializable;
import java.util.List;

public class A implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 2113863867441544315L;

	public List<B> bList;

	public List<B> getbList() {
		return bList;
	}

	public void setbList(List<B> bList) {
		this.bList = bList;
	}

	@Override
	public String toString() {
		return "A [bList=" + bList + "]";
	}

	
}
