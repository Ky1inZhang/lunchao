package aecc.wcm.cms.test;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import com.alibaba.fastjson.JSON;

public class JsonToObj {

	public static Map<Integer, Boolean> map = new HashMap<Integer, Boolean>();

	public static Map<Integer, Set<String>> setsMap = new HashMap<Integer, Set<String>>();

	public static void main(final String[] args) throws Exception {

		long strat = System.currentTimeMillis();

		// jsonToBean();
		getKeys();
		long end = System.currentTimeMillis();
		System.err.println("fastJson :" + (end - strat));

	}

	public static void getKeys() {
		String url = "";
		// url = "http://127.0.0.1:4523/m1/520105-0-default/detail";
		url = "http://127.0.0.1:4523/m1/520105-0-default/contents";
		final String jsonStr = Test2.doPost(url, null, null);
		// .JSONException: Missing value. at character 1 o
		// 抛出异常时删除 转义符
		// 取得所有键名字
		getKeys(jsonStr);

		// 输出json转对象的分层model代码 // 输出键名
		for (Integer key : setsMap.keySet()) {
			System.err.println("==============");
			Set<String> set = setsMap.get(key);
			for (String str : set) {
				System.out.println("private String " + str + ";");
			}
		}
	}

	@SuppressWarnings("boxing")
	public static void getKeys(String jsonStr) {
		// int hashCode = jsonStr.hashCode();
		// map.put(map.size() + 1, hashCode);
		map.put(map.size() + 1, false);
		if (jsonStr.indexOf("[") == 0) {
			JSONArray jsonObj = JSONArray.fromObject(jsonStr);
			map.remove(map.size());
			getKeys(jsonObj.get(0).toString());

		} else {
			JSONObject jsonObj = JSONObject.fromObject(jsonStr);
			Set keySet = jsonObj.keySet();
			for (Object key : keySet) {
				// 输出对象属性 只输出一次
				if (map.get(map.size()).equals(false)) {
					System.out.println(keySet);
					setsMap.put(map.size(), keySet);
					map.put(map.size(), true);
				}
				// System.out.println(map.size() + ":" + key);
				String jsonStr2 = jsonObj.get(key).toString();
				if (jsonStr2.contains(",")) {
					// if (jsonStr2.indexOf("{") == 0 || jsonStr2.indexOf("[")
					// == 0) {
					getKeys(jsonStr2);
				}
			}
		}

	}

	public static A jsonToBean() {

		// Step 1: 拿到了JSON格式的数据

		final String jsonStr = Test2.doGet(
				"http://127.0.0.1:4523/m1/520105-0-default/getJsonObj", null,
				null);
		// System.out.println(jsonStr);

		// Step 2: 转成net.sf.json.JSONObject对象
		final JSONObject jsonObj = JSONObject.fromObject(jsonStr);
		System.out.println(jsonObj);
		// 解析JSON数组
		JSONArray jsonArr = jsonObj.getJSONArray("bList");
		System.err.println(jsonArr);
		final Map<String, Class<?>> map = new HashMap<String, Class<?>>();
		map.put("cList", C.class); // jsonStr中的cList对应一个数组，数组中每个元素的类型是C.class
		map.put("stuList", Student.class);
		@SuppressWarnings({ "deprecation", "unchecked" })
		List<B> list = JSONArray.toList(jsonArr, B.class, map);
		System.out.println(list);

		// Step 3: 通过Map指定解析方式：将哪部分JSON数据解析成哪种类型的对象
		final Map<String, Class<?>> classMap = new HashMap<String, Class<?>>();
		// classMap.put("数组",元素类型.class);
		classMap.put("bList", B.class); // jsonStr中的bList对应一个数组，数组中每个元素的类型是B.class
		classMap.put("cList", C.class); // jsonStr中的cList对应一个数组，数组中每个元素的类型是C.class
		classMap.put("stuList", Student.class); // jsonStr中的stuList对应一个数组，数组中每个元素的类型是Student.class

		// Step 4: JSON ==> Java对象
		@SuppressWarnings({ "unchecked", "rawtypes" })
		final A aObj = (A) JSONObject.toBean(jsonObj, A.class, classMap);

		// Step 5: 验证一下
		System.out.println(aObj);

		// fastjson 方法 fastjson json转对象不需要map配置项
		com.alibaba.fastjson.JSONObject jsonObject = JSON.parseObject(jsonStr);
		A a = JSON.toJavaObject(jsonObject, A.class);
		System.err.println(a);
		return null;
	}

}
