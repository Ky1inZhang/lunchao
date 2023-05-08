package com.kts.core.filenet.helper.ce;

import java.io.File;
import java.io.FileOutputStream;
import java.io.FileWriter;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.Iterator;

import com.filenet.api.collection.DocumentSet;
import com.filenet.api.collection.FolderSet;
import com.filenet.api.core.Document;
import com.filenet.api.core.Folder;
import com.filenet.api.core.ObjectStore;

/**
 * java 通过filenet api 获取目录 遍历目录 下载所有文件 并且按照目录层级保存，解决文件乱码问题 给出示例代码
 * 
 * @author
 *
 */
public class FilenetFileDownloader {

	// 空文件数量
	private static Integer errorDoc = 0;
	// 本地存储目录
	public static String localPath = System.getProperty("user.dir") + File.separator + "data";
	// 空文件日志 错误对象
	private static String errorLog = localPath + File.separator + "log.txt";

	public static void main(String[] args) {
		System.err.println(System.getProperty("user.dir"));
		try {
			ObjectStoreProvider osp = new ObjectStoreProvider();
			ObjectStore os = osp.getObjectStore();
			// 获取根目录
			Folder folder = osp.fetchFolderFromPath(os, "/");
			// 递归遍历目录结构并下载文件
			traverseFolders(folder, localPath);
			System.out.println("下载完成");
		} catch (Exception e) {
			e.printStackTrace();
		}

	}

	/**
	 * 递归遍历文件夹和子文件夹，并下载其中的文件
	 * @param parentFolder fileNet目录
	 * @param path 本地存储目录
	 * @throws Exception
	 */
	public static void traverseFolders(Folder parentFolder, String path) throws Exception {
		path = path == null ? localPath : path;
		// 获取该文件夹中的所有文档和子文件夹
		FolderSet subFolders = parentFolder.get_SubFolders();
		DocumentSet documents = parentFolder.get_ContainedDocuments();

		// 创建目录
		File fileDir = new File(path);
		if (!fileDir.exists()) {
			fileDir.mkdirs();
		}
		
		// 遍历并处理每个文档
		Iterator<?> it = documents.iterator();
		while (it.hasNext()) {
			Document doc = (Document) it.next();

			// 文件全路径名 separator 兼容平台的分隔符 /\
			String fullPathName = path + File.separator + doc.get_Name();

			// 验证文档是否具有内容元素
			if (doc.get_ContentSize() == null) {
				errorDoc++;
				String errStr = "错误的元素：" + errorDoc + "  文件名：" + fullPathName;
				System.err.println(errStr);
				// 输出错误文档元素到日志
				addLog(errorLog, errStr + "\n");
				continue;
			}

			// 创建本地文件 如果存在则跳过
			File file = new File(fullPathName);
			if (file.exists()) {
				continue;
			}
			OutputStream out = new FileOutputStream(file);

			// 将文档写入本地文件
			InputStream in = doc.accessContentStream(0);
			byte[] bytes = new byte[8192];
			int count = 0;
			while ((count = in.read(bytes)) > 0) {
				out.write(bytes, 0, count);
			}
			in.close();
			out.close();
			System.out.println("已下载: " + file.getAbsolutePath());
		}

		// 递归遍历并处理每个子文件夹
		Iterator<?> itf = subFolders.iterator();
		while (itf.hasNext()) {
			Folder subFolder = (Folder) itf.next();
			String folderPath = path + File.separator + subFolder.get_FolderName();
			traverseFolders(subFolder, folderPath);
		}
	}

	// 追加log到文件
	public static void addLog(String path, String log) throws IOException {
		FileWriter fw = new FileWriter(path, true); // 创建FileWriter对象用于追加
		fw.write(log); // 将文本内容写入文件
		fw.close(); // 关闭文件
	}

}