// 聊天数据存储
let chatData = {
    // 联系人列表
    contacts: [
        {
            id: 1,
            name: "张三",
            avatar: "https://www.loliapi.com/acg/pp/",
            lastMessage: "那就这么定了！",
            lastTime: "20:49",
            unread: 0
        },
        {
            id: 2,
            name: "李四",
            avatar: "https://www.loliapi.com/acg/pp/",
            lastMessage: "明天见！",
            lastTime: "19:30",
            unread: 2
        },
        {
            id: 3,
            name: "王五",
            avatar: "https://www.loliapi.com/acg/pp/",
            lastMessage: "好的，我知道了",
            lastTime: "昨天",
            unread: 0
        },
        {
            id: 4,
            name: "赵六",
            avatar: "https://www.loliapi.com/acg/pp/",
            lastMessage: "周末有空吗？",
            lastTime: "星期二",
            unread: 0
        },
        {
            id: 5,
            name: "产品群",
            avatar: "https://www.loliapi.com/acg/pp/",
            lastMessage: "[有人@我] 下周一开会",
            lastTime: "星期一",
            unread: 5
        }
    ],
    
    // 聊天记录，按联系人ID分组
    messages: {
        // 张三的聊天记录
        1: [
            {
                id: 1,
                sender: "contact",
                content: "你好，最近怎么样？",
                time: "20:30"
            },
            {
                id: 2,
                sender: "self",
                content: "我很好，谢谢！你呢？",
                time: "20:31"
            },
            {
                id: 3,
                sender: "contact",
                content: "我也不错，最近在忙什么？",
                time: "20:32"
            },
            {
                id: 4,
                sender: "self",
                content: "最近在看书，挺有意思的。",
                time: "20:34"
            },
            {
                id: 5,
                sender: "contact",
                content: "有什么推荐的书吗？",
                time: "20:35"
            },
            {
                id: 6,
                sender: "self",
                content: "你可以看看《活着》。",
                time: "20:36"
            },
            {
                id: 7,
                sender: "contact",
                content: "好的，我去看看。",
                time: "20:37"
            },
            {
                id: 8,
                sender: "self",
                content: "期待你的反馈！",
                time: "20:41"
            },
            {
                id: 9,
                sender: "contact",
                content: "你最近有看什么电影吗？",
                time: "20:42"
            },
            {
                id: 10,
                sender: "self",
                content: "看了《流浪地球》，很震撼。",
                time: "20:43"
            },
            {
                id: 11,
                sender: "contact",
                content: "我也想看！",
                time: "20:44"
            },
            {
                id: 12,
                sender: "self",
                content: "一起去看吧！",
                time: "20:45"
            },
            {
                id: 13,
                sender: "contact",
                content: "好的，约定！",
                time: "20:46"
            },
            {
                id: 14,
                sender: "self",
                content: "你觉得这周末怎么样？",
                time: "20:47"
            },
            {
                id: 15,
                sender: "contact",
                content: "可以的！",
                time: "20:48"
            },
            {
                id: 16,
                sender: "self",
                content: "那就这么定了！",
                time: "20:49"
            }
        ],
        
        // 李四的聊天记录
        2: [
            {
                id: 1,
                sender: "contact",
                content: "嘿，在吗？",
                time: "19:20"
            },
            {
                id: 2,
                sender: "self",
                content: "在的，怎么了？",
                time: "19:22"
            },
            {
                id: 3,
                sender: "contact",
                content: "明天的会议准备好了吗？",
                time: "19:25"
            },
            {
                id: 4,
                sender: "self",
                content: "已经准备好了，PPT发你邮箱了。",
                time: "19:28"
            },
            {
                id: 5,
                sender: "contact",
                content: "好的，收到了，明天见！",
                time: "19:30"
            }
        ],
        
        // 王五的聊天记录
        3: [
            {
                id: 1,
                sender: "self",
                content: "上次说的项目进展如何？",
                time: "昨天 15:30"
            },
            {
                id: 2,
                sender: "contact",
                content: "进展顺利，已经完成了70%。",
                time: "昨天 16:00"
            },
            {
                id: 3,
                sender: "self",
                content: "有什么需要我协助的吗？",
                time: "昨天 16:05"
            },
            {
                id: 4,
                sender: "contact",
                content: "目前没有，如果有问题我会联系你。",
                time: "昨天 16:10"
            },
            {
                id: 5,
                sender: "self",
                content: "好的，记得按时提交。",
                time: "昨天 16:15"
            },
            {
                id: 6,
                sender: "contact",
                content: "好的，我知道了",
                time: "昨天 16:20"
            }
        ],
        
        // 赵六的聊天记录
        4: [
            {
                id: 1,
                sender: "contact",
                content: "听说你最近换工作了？",
                time: "星期二 10:00"
            },
            {
                id: 2,
                sender: "self",
                content: "是的，上个月刚入职新公司。",
                time: "星期二 10:15"
            },
            {
                id: 3,
                sender: "contact",
                content: "感觉怎么样？适应吗？",
                time: "星期二 10:20"
            },
            {
                id: 4,
                sender: "self",
                content: "还不错，同事都挺好的，工作也有挑战性。",
                time: "星期二 10:30"
            },
            {
                id: 5,
                sender: "contact",
                content: "周末有空吗？一起吃个饭？",
                time: "星期二 10:35"
            }
        ],
        
        // 产品群的聊天记录
        5: [
            {
                id: 1,
                sender: "contact",
                name: "产品经理",
                content: "各位，下周一上午10点产品评审会，请准时参加。",
                time: "星期一 14:00"
            },
            {
                id: 2,
                sender: "contact",
                name: "设计师",
                content: "收到，我会准备好设计方案。",
                time: "星期一 14:05"
            },
            {
                id: 3,
                sender: "contact",
                name: "开发主管",
                content: "@全体成员 请大家提前准备好各自模块的进度汇报。",
                time: "星期一 14:10"
            },
            {
                id: 4,
                sender: "self",
                content: "好的，我这边没问题。",
                time: "星期一 14:15"
            },
            {
                id: 5,
                sender: "contact",
                name: "测试",
                content: "我这边测试用例已经准备好了。",
                time: "星期一 14:20"
            },
            {
                id: 6,
                sender: "contact",
                name: "产品经理",
                content: "@我 你负责的功能模块准备得怎么样了？",
                time: "星期一 14:25"
            }
        ]
    },
    
    // 随机回复内容库
    randomReplies: [
        "好的，我知道了",
        "谢谢你的信息",
        "这个想法不错",
        "我会考虑一下",
        "有道理，我同意",
        "稍后回复你",
        "我需要再想想",
        "这个问题有点复杂",
        "我们可以讨论一下",
        "我明白你的意思了",
        "让我查一下资料",
        "这个建议很有价值",
        "我会尽快处理",
        "我们约个时间详谈",
        "我需要更多信息",
        "这个方案可行",
        "我们需要调整计划",
        "我会转告相关人员",
        "我们可以合作解决",
        "我会跟进这个事情"
    ],
    
    // 当前活跃的聊天ID
    activeChat: null,
    
    // 自动消息生成配置
    autoMessageConfig: {
        isEnabled: false,
        contactId: 1,
        interval: 10
    }
};

// 数据持久化管理
const DataManager = {
    // 保存数据到localStorage
    saveData: function() {
        localStorage.setItem('wechatSimData', JSON.stringify(chatData));
    },
    
    // 从localStorage加载数据
    loadData: function() {
        const savedData = localStorage.getItem('wechatSimData');
        if (savedData) {
            chatData = JSON.parse(savedData);
        }
    },
    
    // 更新联系人最后消息
    updateContactLastMessage: function(contactId, message, time) {
        const contactIndex = chatData.contacts.findIndex(c => c.id === contactId);
        if (contactIndex !== -1) {
            chatData.contacts[contactIndex].lastMessage = message;
            chatData.contacts[contactIndex].lastTime = time;
            this.saveData();
        }
    },
    
    // 增加未读消息计数
    increaseUnread: function(contactId) {
        const contactIndex = chatData.contacts.findIndex(c => c.id === contactId);
        if (contactIndex !== -1 && contactId !== chatData.activeChat) {
            chatData.contacts[contactIndex].unread += 1;
            this.saveData();
        }
    },
    
    // 清除未读消息计数
    clearUnread: function(contactId) {
        const contactIndex = chatData.contacts.findIndex(c => c.id === contactId);
        if (contactIndex !== -1) {
            chatData.contacts[contactIndex].unread = 0;
            this.saveData();
        }
    },
    
    // 设置当前活跃聊天
    setActiveChat: function(contactId) {
        chatData.activeChat = contactId;
        this.saveData();
    },
    
    // 添加消息
    addMessage: function(contactId, message) {
        if (!chatData.messages[contactId]) {
            chatData.messages[contactId] = [];
        }
        
        // 设置消息ID
        message.id = chatData.messages[contactId].length + 1;
        
        // 添加消息
        chatData.messages[contactId].push(message);
        
        // 更新联系人最后消息
        this.updateContactLastMessage(contactId, message.content, message.time);
        
        // 如果是联系人发送的消息，且不是当前活跃聊天，增加未读计数
        if (message.sender === 'contact' && contactId !== chatData.activeChat) {
            this.increaseUnread(contactId);
        }
        
        this.saveData();
        return message;
    },
    
    // 设置自动消息生成配置
    setAutoMessageConfig: function(isEnabled, contactId, interval) {
        chatData.autoMessageConfig.isEnabled = isEnabled;
        if (contactId) chatData.autoMessageConfig.contactId = contactId;
        if (interval) chatData.autoMessageConfig.interval = interval;
        this.saveData();
    },
    
    // 获取自动消息生成配置
    getAutoMessageConfig: function() {
        return chatData.autoMessageConfig;
    }
};

// 初始化时加载数据
DataManager.loadData();

// 导出数据和管理器
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { chatData, DataManager };
} else {
    window.DataManager = DataManager;
} 