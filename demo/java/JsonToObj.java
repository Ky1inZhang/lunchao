package aecc.wcm.cms.test;

import java.util.HashMap;
import java.util.Map;

import net.sf.json.JSONObject;

public class JsonToObj {

	public static void main(final String[] args) {
		// Step 1: 拿到了JSON格式的数据

		final String jsonStr = Test2.doGet(
				"http://127.0.0.1:4523/m1/520105-0-default/getJsonObj", null,
				null);
		System.out.println(jsonStr);

		// Step 2: 转成net.sf.json.JSONObject对象
		final JSONObject jsonObj = JSONObject.fromObject(jsonStr);

		System.out.println(jsonObj);

		// Step 3: 通过Map指定解析方式：将哪部分JSON数据解析成哪种类型的对象
		final Map<String, Class<?>> classMap = new HashMap<String, Class<?>>();
		// classMap.put("数组",元素类型.class);
		classMap.put("bList", B.class); // jsonStr中的bList对应一个数组，数组中每个元素的类型是B.class
		classMap.put("cList", C.class); // jsonStr中的cList对应一个数组，数组中每个元素的类型是C.class
		classMap.put("stuList", Student.class); // jsonStr中的stuList对应一个数组，数组中每个元素的类型是Student.class

		// Step 4: JSON ==> Java对象
		final A aObj = (A) JSONObject.toBean(jsonObj, A.class, classMap);

		// Step 5: 验证一下
		System.out.println(aObj);
		System.out.println(aObj.bList.get(0).cList.get(0).stuList.get(0)
				.getName());
	}
}
