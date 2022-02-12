import { React, useState } from 'react'
import './userTable.css';
import { Table, Tag, Space } from 'antd';



const UserTable = () => {
  const { Column, ColumnGroup } = Table;
  const data = [
    {
      key: '1',
      sn: '1',
      date: '1/7/2022',
      phone: '09329319310313',
      email: 'test@gmail.com',
      firstName: 'John',
      lastName: 'Brown',
      company: 'Coca Cola',
      location: 'New York No. 1 Lake Park',
      totalInvested: '938',
      editable: false
    },
    {
      key: '2',
      sn: '2',
      date: '1/7/2022',
      phone: '09329319310313',
      email: 'test@gmail.com',
      firstName: 'John',
      lastName: 'Brown',
      company: 'Coca Cola',
      location: 'New York No. 1 Lake Park',
      totalInvested: '938',
      editable: false
    },
    {
      key: '3',
      sn: '3',
      date: '1/7/2022',
      phone: '09329319310313',
      email: 'test@gmail.com',
      firstName: 'John',
      lastName: 'Brown',
      company: 'Coca Cola',
      location: 'New York No. 1 Lake Park',
      totalInvested: '938',
      editable: false
    },
  ];
  const [displayActions, setDisplayActions] = useState(false)
  const [actionKey, setActionKey] = useState('')
  const renderActions = (record) => record.key === actionKey;


  return (
    <div>
      <Table dataSource={data} rowClassName={(record, index) => index % 2 === 0 ? 'table-row-light' : 'table-row-dark'}>
        <Column title="SN" dataIndex="sn" key="sn" />
        <Column title="Date" dataIndex="date" key="date" />
        <Column title="First Name" dataIndex="firstName" key="firstName" />
        <Column title="Last Name" dataIndex="lastName" key="lastName" />
        <Column title="Phone" dataIndex="phone" key="phone" />
        <Column title="Email" dataIndex="email" key="email" />
        <Column title="Location" dataIndex="location" key="location" />
        <Column title="Company" dataIndex="company" key="company" />
        <Column title="Total Invested" dataIndex="totalInvested" key="totalInvested" />
        <Column
          title="Action"
          key="action"
          render={(text, record) => {
            const displayActions = renderActions(record)
            return (
              <Space size="middle">
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <p onClick={() => { setDisplayActions(true); setActionKey(record.key) }}>Press</p>
                  {
                    displayActions ? (
                      <div style={{ backgroundColor: '#3e4095', color: 'white', height: 80, width: 100, position: 'absolute', top: 40, right: 70, textAlign:'center', padding:5, paddingTop:10, borderRadius:15 }}>
                        <p>Remove</p>
                        <p>Manage</p>
                      </div>
                    ) : null
                  }
                </div>
              </Space>
            )
          }}
        />
      </Table>
    </div>
  )
}
export default UserTable;
