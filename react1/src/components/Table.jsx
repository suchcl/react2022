import { Table } from "antd";
const columns = [
    {
        title: "订单ID",
        dataIndex: "orderId",
        key: "orderId",
        width: 100,
        ellipsis: true
    },
    {
        title: "姓名",
        dataIndex: 'name',
        key: "name",
        width: 115
    },
    {
        title: "联系日期",
        dataIndex: "contactDate",
        key: "contactDate",
        width: 115
    },
    {
        title: "联系方式",
        dataIndex: "contactType",
        key: "contactType",
        width: 112
    },
    {
        title: "联系内容",
        dataIndex: "content",
        key: "content",
        width: 232,
        ellipsis: true
    },
    {
        title: "上户时间",
        dataIndex: "orderedTime",
        key: "orderedTime",
        width: 130
    },
    {
        title: "归属人",
        dataIndex: "owner",
        key: "owner",
        width: 115,
        ellipsis: true
    },
    {
        title: "联系人",
        dataIndex: "contacts",
        key: "contacts",
        width: 115
    }
];

const data = [
    {
        key: '1',
        orderId: "20001023",
        name: "上官先生",
        contactDate: '2022/12/12',
        contactType: '电话、微信、短信',
        content: "和客户第一次沟通和客户第一次沟通和客户第一次客户客户和客户第一次沟通和客户第一次沟通和客户第一次客户客户和客户第一次沟通和客户第一次沟通和客户第一次客户客户",
        orderedTime: '2022/12/12 12:12:12',
        owner: "张三章三章三张三章三章三",
        contacts: "李四里斯本里斯"
    },
    {
        key: '2',
        orderId: "20001024",
        name: "邹家华",
        contactDate: '2021/02/25',
        contactType: '电话',
        content: "英国外交大臣特拉斯在访问捷克时，对中国发出毫无依据的指责，不仅称我们制造虚假信息，还批评中国对部分国家进行经济胁迫",
        orderedTime: '2021/3/22 11:32:12',
        owner: "特拉斯",
        contacts: "布林肯"
    },
    {
        key: '3',
        orderId: "20001025",
        name: "亨利·基辛格",
        contactDate: '2021/02/25',
        contactType: '电话',
        content: "基辛格已经年近百岁，近日他参加达沃斯世界经济论坛时提到了美国在台湾问题上的错误干预，他提醒现任美国政府不要试图制造“两个中国”的话题，让台湾问题成为中美之间关系的核心区域，如果两个大国仅仅是因为一个台湾地区而擦枪走火，那可能爆发的将是覆盖全球的核大战，对于中美两国来说，代价都很大.",
        orderedTime: '2021/3/22 11:32:12',
        owner: "拜登",
        contacts: "奥斯汀"
    }
];

const PracticalTable = () => {
    return (
        <Table bordered columns={columns} dataSource={data} />
    );
}

export default PracticalTable;