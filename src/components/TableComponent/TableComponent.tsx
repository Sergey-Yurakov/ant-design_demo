import { Table, Tag, Typography } from 'antd';
import { data, TypesData } from '../data';
import { ColumnsType } from 'antd/es/table';

const { Text } = Typography;

const stringToUpperCase = (string: string) => {
    return string[0].toUpperCase() + string.slice(1);
};

const columns: ColumnsType<TypesData> = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: (_, { name }) => (
            <Text copyable>
                {stringToUpperCase(name.firstname)} {stringToUpperCase(name.lastname)}
            </Text>
        ),
        filters: [
            {
                text: 'John',
                value: 'John',
            },
            {
                text: 'David',
                value: 'David',
            },
            {
                text: 'Kevin',
                value: 'Kevin',
            },
        ],
        onFilter: (value, record) =>
            record.name.firstname.toLowerCase().includes(value.toString().toLowerCase()),
    },
    {
        title: 'Username',
        dataIndex: 'username',
        key: 'username',
        render: (_, { username }) => <Tag color={'blue'}>{username}</Tag>,
    },
    {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
    },
    {
        title: 'Phone',
        dataIndex: 'phone',
        key: 'phone',
        sorter: (a, b) => a.phone.localeCompare(b.phone),
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
        render: (_, { address }) => <Text>{stringToUpperCase(address.city)}</Text>,
        sorter: (a, b) => a.address.city.localeCompare(b.address.city),
    },
];
const dataSource = data.map(i => ({ ...i, key: i.id }));
export const TableComponent = () => {
    return (
        <Table
            dataSource={dataSource}
            columns={columns}
            pagination={{
                defaultPageSize: 5,
                position: ['bottomCenter'],
                showSizeChanger: true,
                pageSizeOptions: [2, 4, 6, 8, 10],
            }}
        />
    );
};
