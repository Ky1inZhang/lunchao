package com.by.lc;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONException;
import org.json.JSONObject;

import com.fasterxml.jackson.databind.ObjectMapper;

/**
 * jackson解析json 或者用之前的解析方式 jackson需要三个包 core data annotation 可以高 低了不匹配
 * 
 * AI可以通过JSON数据生成实体类 也可以使用之前写的工具类 apifox 可以模拟调用方 发送请求
 * 
 * 单个逐行处理 或者批量处理，要记录插入错误， 批量处理 要处理返回的结果集 如果错误会回滚需要再次执行
 * 
 * 封装繁琐的new jsonobject 单个需要处理异常
 */

@WebServlet("/data")
public class DataServlet extends HttpServlet {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private static final String DB_URL = "jdbc:oracle:thin:@localhost:1521:XE";
	private static final String DB_USERNAME = "ORACLE40";
	private static final String DB_PASSWORD = "123456";

	Connection connection = null;

    /**
     * @see HttpServlet#HttpServlet()
     */
    public DataServlet() {
        super();
		// TODO Auto-generated construc tor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	@Override
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doPost(request, response);
	}

	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp)
			throws ServletException, IOException {
		req.setCharacterEncoding("UTF-8");
		resp.setCharacterEncoding("UTF-8");
		// 设置响应的内容类型为 JSON
		resp.setContentType("application/json;charset=UTF-8");

		@SuppressWarnings("resource")
		PrintWriter out = resp.getWriter();
		String msg = "";
		String code = "";

		// 读取请求体数据
		@SuppressWarnings("resource")
		BufferedReader reader = req.getReader();
		StringBuilder requestBody = new StringBuilder();
		String line;
		while ((line = reader.readLine()) != null) {
			requestBody.append(line);
		}

		// 解析请求体数据
		List<DataItem> dataList = parseData(requestBody.toString());

		// 模拟一万条数据
		DataItem data = dataList.get(0);
		List<DataItem> pram = new ArrayList<>();
		for (int i = 0; i < 10000; i++) {
			DataItem item = new DataItem();
			item.setId(i);
			item.setName(data.getName() + i);
			pram.add(item);
		}

		// 单条插入
		// try {
		// connection = getConnection();
		// connection.setAutoCommit(false); // 关闭自动提交
		// // for (DataItem dataItem : dataList) {
		// for (DataItem dataItem : pram) {
		// try {
		// writeData(connection, dataItem);
		// if (dataItem.getId() % 200 == 0) {
		// connection.commit();
		// System.err.println(dataItem.getId());
		// }
		// } catch (SQLException e) {
		// // 继续执行后续操作
		// e.printStackTrace();
		// continue;
		// }
		// }
		// connection.commit();
		// } catch (SQLException e1) {
		// // TODO Auto-generated catch block
		// e1.printStackTrace();
		// }

		// 批量写入数据库
		// Connection connection = null;
		try {
			connection = getConnection();
			connection.setAutoCommit(false); // 关闭自动提交

			// 使用批量插入
			if (writeDataBatch(connection, pram)) {
				connection.commit(); // 提交事务
				msg = "批量数据写入成功";
				code = "200";
			} else {
				connection.rollback(); // 回滚事务
				msg = "批量数据写入失败";
				code = "500";
				// 记录错误日志
				// logErrorBatch(dataList);
			}

		} catch (SQLException e) {
			e.printStackTrace();
			msg = "数据库错误";
			code = "500";
		} finally {
			if (connection != null) {
				try {
					connection.close();
				} catch (SQLException e) {
					// 异常处理
				}
			}
		}

		JSONObject jsonObject = new JSONObject();
		try {
			jsonObject.put("msg", msg);
			jsonObject.put("code", code);
		} catch (JSONException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		// 将 JSON 字符串作为响应正文发送回客户端

		out.print(jsonObject.toString());
		out.flush();
	}

	// 解析请求体数据
	private List<DataItem> parseData(String requestBody) {
		// 实现根据实际请求体格式解析数据的逻辑
		// 示例代码中假设请求体为JSON数组，每个元素包含"id"和"value"字段

		ObjectMapper objectMapper = new ObjectMapper();
		List<DataItem> dataList = new ArrayList<DataItem>();
		try {
			RequestData requestData = objectMapper.readValue(
					requestBody.toString(), RequestData.class);

			// 访问解析后的对象 requestData 的属性
			System.out.println("Message: " + requestData.getMsg());
			System.out.println("Token: " + requestData.getToken());

			MasterData masterData = requestData.getMasterData();
			dataList = masterData.getDataList();

			for (DataItem dataItem : dataList) {
				System.out.println("ID: " + dataItem.getId());
				System.out.println("Name: " + dataItem.getName());
				System.out.println("Age: " + dataItem.getAge());
				System.out.println();
			}
		} catch (IOException e) {
			e.printStackTrace();
		}

		return dataList;
	}

	// 使用批量插入写入数据到数据库
	@SuppressWarnings({ "null", "unused" })
	private boolean writeDataBatch(Connection connection,
			List<DataItem> dataList) {
		PreparedStatement statement = null;
		int[] result = null;
		try {

			// statement = connection
			// .prepareStatement("INSERT INTO USER_1 (user_no, user_name) VALUES (?, ?)");
			statement = connection
					.prepareStatement("UPDATE USER_1 SET user_name = ? where user_name = '研米但加自' ");

			for (DataItem data : dataList) {
				// statement.setLong(1, data.getId());
				// statement.setString(2, data.getName());
				statement.setString(1, data.getName());
				statement.addBatch();
			}

			result = statement.executeBatch();
			return true;
		} catch (SQLException e) {
			e.printStackTrace();
			for (int i = 0; i < result.length; i++) {
				if (result[i] != Statement.SUCCESS_NO_INFO
						&& result[i] != Statement.EXECUTE_FAILED) {
					// 插入失败，记录错误日志
					logError(dataList.get(i));
				}
			}
			return false;
		} finally {
			if (statement != null) {
				try {
					statement.close();
				} catch (SQLException e) {
					// 异常处理
				}
			}
		}
	}

	// 写入单条数据到数据库
	@SuppressWarnings({ "unused", "resource" })
	private void writeData(Connection connection, DataItem data)
			throws SQLException {
		PreparedStatement statement = connection
				.prepareStatement("INSERT INTO USER_1 (user_no, user_name) VALUES (?, ?)");
		statement.setLong(1, data.getId());
		statement.setString(2, data.getName());
		statement.executeUpdate();
		statement.close();
		// System.err.println(data.getName());
	}

	// 记录错误日志
	private void logError(DataItem data) {
		// 实现自定义的错误日志记录逻辑
		// ...
		System.err.println(data.getName());
	}

	// 记录批量错误日志
	@SuppressWarnings("unused")
	private void logErrorBatch(List<DataItem> dataList) {
		for (DataItem data : dataList) {
			logError(data);
		}
	}

	// 获取数据库连接
	private Connection getConnection() throws SQLException {
		try {
			Class.forName("oracle.jdbc.driver.OracleDriver");
		} catch (ClassNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return DriverManager.getConnection(DB_URL, DB_USERNAME, DB_PASSWORD);
	}

}
