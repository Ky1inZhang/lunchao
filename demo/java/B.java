package aecc.wcm.cms.test;

import java.io.Serializable;
import java.util.List;

public class B implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = -8577889043974539879L;

	public List<C> cList;

	public List<C> getcList() {
		return cList;
	}

	public void setcList(final List<C> cList) {
		this.cList = cList;
	}

	@Override
	public String toString() {
		return "B [cList=" + cList + "]";
	}

}
