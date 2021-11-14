		
		var month = [30, 90, 180, 365, 365 * 3, 365 * 10];
		var nowDate = new Date(); 
		// https://blog.csdn.net/lianflower/article/details/108804396 date
		var lastDate = nowDate.setDate((nowDate.getDate() - 365));
		var start = this.getQueryString("start") || echarts.format.formatTime('yyyy-MM-dd', lastDate);
		var end = this.getQueryString("end") || echarts.format.formatTime('yyyy-MM-dd', new Date());

		var time = Math.round(new Date(start)) - 28800000;
		var endTime = Math.round(new Date(end)) - 28800000;
		
		var code = this.getQueryString("code") || '000336';
		var head = document.head || document.getElementsByTagName('head')[0];
		var script = document.createElement('script');
		script.setAttribute("src", "https://fund.eastmoney.com/pingzhongdata/" + code + ".js?v=20160518155842");
		script.setAttribute("id", "data");
		head.appendChild(script);

		var script2 = document.createElement('script');
		script2.setAttribute("src", `${location.origin}/fund/fundcode.js`);
		script2.setAttribute("id", "fundcode");
		head.appendChild(script2);
		document.getElementById("fundcode").onload = function() {
			r = fundcode;
			//查找对象在数组中的index
			index = r.findIndex(item => item == code);
			if (index < 0) {
				console.log("无此基金代码" + code);
				location.href = `${location.origin}/fund/index.html?code=000336&start=${start}`
			}
		}
		
		/**
		 * data
		 * Data_netWorthTrend 单位净值走势 Data_netWorthTrend    
		 * Data_ACWorthTrend 累计净值走势 Data_ACWorthTrend		
		 * Data_grandTotal 累计收益率    Data_grandTotal[0].data   
		 */
		document.getElementById("data").onload = function() {
			console.log("code: "+ code +";\nstockCodes:"+fS_name);
			
			if (typeof(Data_netWorthTrend) == "undefined"){
				location.href = `${location.origin}/fund/index.html?code=${(Number(r[index+1])).toString().padStart(6,'0')}&start=${start}`
			}
			// 先处理数据
			time = Data_netWorthTrend[Data_netWorthTrend.length-1].x <= time ? Data_netWorthTrend[0].x : time;

			// 股数 ，追跌(股数) ， 本金 每 1%追150 ,倍数 多少个150, 最大追跌盈利率 ,最大梭哈盈利率,lr 利润
			[gs, zd, bj, bs, gmcs, fh , lr ] = [0, 0, 0, 1, 0, 0 ,0];
			[x , a , b , c , d ,e , f , g , h , j] = [[],[],[],[],[],[],[],[],[],[]];

			// 计算收益使用累计净值 
			Data_ACWorthTrend.forEach((item, index) => {
				if (index <= Data_netWorthTrend.length - 1) {
					Data_netWorthTrend[index].y2 = item[1] == null ? 1 : item[1];
				}
			});

			Data_netWorthTrend.forEach((item,index) => {
				if (item.x >= time && item.x <= endTime){
					fh = item.unitMoney.substring(8, item.unitMoney.length - 1) || 0;
					j.push(fh);
					x.push(item.y2);
					a.push(echarts.format.formatTime('yyyy-MM-dd', item.x));
					b.push(item.y);
					c.push(item.equityReturn);
					if (item.equityReturn < -3) {
						zd += 100 * bs / item.y;
						bj += 100 * bs;
						gmcs += 1;
					} 
					// if (item.equityReturn > 1 && zd > 30) {
					// 	zd -= 10;
					// 	lr += 10 * item.y;
					// }
					d.push((zd * item.y + lr).toFixed(2));
					// lr = 0;
					e.push(bj);
					g.push(bj != 0 ? (100 * (zd * item.y / bj - 1)).toFixed(2) : 0);
				}
			});
			f = b.map((item, index) => {
				gs = gs == 0 ? bj / item : gs;
				if (j[index] != 0) {
					fh += gs*j[index];
				}
				h.push(bj != 0 ? (100 * ((gs * item + fh) / bj - 1)).toFixed(2) : 0)
				return (gs * item + fh).toFixed(2);
			})
			
			var myChart = echarts.init(document.getElementById('chartmain'));
			option = {
			    title: {
			        text: "\n" + fS_name,
							left:'center'
			    },
			    tooltip: {
			        trigger: 'axis',
			    },
				legend: {
					data: ['单位净值', '累计净值',"变化","梭哈","追跌","本金"]
				},
				grid: {
					left: '0%',
					right: '8%',
					bottom: '5%',
					containLabel: true
				},
				xAxis: {
						data: a
				},
				yAxis: {
				type: "value",
						splitLine: {
								show: false
						}
				},
				toolbox: {
						feature: {
								saveAsImage: {}
						}
				},
				dataZoom: [{
					startValue: '2014-06-01'
				}, {
					type: 'inside'
				}],
			    series: [
					{
					    name: '累计净值',
					    type: 'line',
					    data: x
					},
					{
							name: '单位净值',
							type: 'line',
							data: b
					},
					{
					    name: '变化',
					    type: 'line',
					    data: c
					},
					{
					    name: '追跌',
					    type: 'line',
					    data: d
					},
					{
					    name: '本金',
					    type: 'line',
							data: e
					},
					{
					    name: '梭哈',
					    type: 'line',
							data: f
					},
					{
					    name: '追跌盈利率',
					    type: 'line',
							data: g,
					},
					{
					    name: '梭哈盈利率',
					    type: 'line',
							data: h,
						
					}
				]
			}

			let idx = a.length-1;
			let jjsyl = Data_currentFundManager[0].power;
					jjsyl = jjsyl.avr == "暂无数据" ? jjsyl.avr : jjsyl.data[1];
			let jlsyl = Data_performanceEvaluation;
					jlsyl = jlsyl.avr == "暂无数据" ? jlsyl.avr : jlsyl.data[1];
			document.getElementById("div").innerHTML = `
				<font color='red'>点击折线图任意一点即可重绘图表,也可指定时间区间(url例:code=005078&start=2020-07-14&end=2021-07-14)</font><br>
				${b[b.length-1]==x[x.length-1]?'':"<font color='red'>此基金为分红型债券基金,计算结果偏小,请勿参考,主要是不会算...</font><br>"}
				<span id="code">代码:${code}</span> &emsp; ${a[0] } —— ${a[a.length-1]}
				<span hidden id="name">基金名称:${fS_name}</span><br>
				本金:${bj} —— 购买${gmcs}次<br>
				追跌:${d[idx]}  盈利:${(d[idx] - bj).toFixed(2)} <br>
				梭哈:${f[idx]}  盈利:${(f[idx] - bj).toFixed(2)} <br>
				追跌盈利率:<span id="zdyll">${g[idx]}</span>% 		
				<font color='red'>↑</font>:<span id="zdmax">${Math.max(...g)}</span>%		
				<font color='green'>↓</font>:<span id="zdmin">${Math.min(...g)}</span>%		
				区间:${(Math.max(...g)-Math.min(...g)).toFixed(2)}%<br> 
				梭哈盈利率:<span id="shyll">${h[idx]}</span>% 	
				<font color='red'>↑</font>:<span id="shmax">${Math.max(...h)}</span>%		
				<font color='green'>↓</font>:<span id="shmin">${Math.min(...h)}</span>%		
				区间:${(Math.max(...h)-Math.min(...h)).toFixed(2)}%<br> 
				基金收益率:<span id="jjsyl">${jjsyl}</span> &emsp;
				经理收益率:<span id="jlsyl">${jlsyl}</span><br>
				`;
			myChart.setOption(option);
			
			myChart.on('click', function (params) {
				location.href = `${location.origin}/fund/index.html?code=${(Number(r[index])).toString().padStart(6,'0')}&start=${params.name}`
			});

			// 浏览器自适应
			window.onresize = myChart.resize; 
			document.getElementById("btn1").addEventListener("click",function(){
				location.href = `${location.origin}/fund/index.html?code=${(Number(r[index-1])).toString().padStart(6,'0')}&start=${start}`
			});
			document.getElementById("btn2").addEventListener("click",function(){
				location.href = `${location.origin}/fund/index.html?code=${(Number(r[index+1])).toString().padStart(6,'0')}&start=${start}`
			});
			document.getElementById("btn3").addEventListener("click",function(){
				var input = document.getElementById("input").value || code;
				location.href = `${location.origin}/fund/index.html?code=${input}&start=${start}`
			});

			document.getElementById("input").onkeypress = function(e){
				if(e.key == "Enter"){
					var input = document.getElementById("input").value || code;
					location.href = `${location.origin}/fund/index.html?code=${input}&start=${start}`
				}
			}

			var m = localStorage.getItem("i") || 3;
			// localStorage.removeItem("i");
			document.getElementsByClassName('btn')[m].style.cssText = 'background:#6699FF;color:white'
			document.getElementById("btns").addEventListener('click', function (e) {
				if(e.target.className == 'btn'){
					
						// $(".btn").css("background","white").css("color","gray")
						[...document.getElementsByClassName("btn")].forEach(item => {
								item.style.cssText ="background:white;color:gray";
						});
						e.target.style.cssText = 'background:#6699FF;color:white'
						let i = e.target.value - 1;
						localStorage.setItem("i",i)
						nowDate = new Date();
						lastDate = nowDate.setDate((nowDate.getDate() - month[i]));
						start = echarts.format.formatTime('yyyy-MM-dd', lastDate);
						location.href = `${location.origin}/fund/index.html?code=${code}&start=${start}`
				}
			})
		}

		function getQueryString(name) {
			let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
			let r = window.location.search.substr(1).match(reg);
			if (r != null) {
				return decodeURIComponent(r[2]);
			};
			return null;
		}

		Date.prototype.Format = function (fmt) { //author: meizz
			var o = {
					"M+": this.getMonth() + 1, //月份 
					"d+": this.getDate(), //日 
					"h+": this.getHours(), //小时 
					"m+": this.getMinutes(), //分 
					"s+": this.getSeconds(), //秒 
					"q+": Math.floor((this.getMonth() + 3) / 3), //季度 
					"S": this.getMilliseconds() //毫秒 
			};
			if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
			for (var k in o)
			if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
			return fmt;
		}    