import React from 'react';
import './classMapper.Style.scss'
import { Icon,Table,Dropdown } from 'semantic-ui-react'

const ClassMapper = () => {
  return(
    <div className='classMapper'>
      <div>
        <div>
        <h5>Add control type
        <Icon name="plus" />
        </h5>
        </div>
      <Table celled striped>
        <Table.Body>
          <Table.Row>
          <Table.Cell collapsing>
           Textbox
        </Table.Cell>
        <Table.Cell collapsing>
          <Dropdown text="TextBox classes">
            <Dropdown.Menu>
              <Dropdown.Item text="tex"/>
              <Dropdown.Item text="class"/>
              <Dropdown.Item text="you"/>
            </Dropdown.Menu>
          </Dropdown>
        </Table.Cell>
        </Table.Row>
        <Table.Row>
        <Table.Cell collapsing>
         Check Box
      </Table.Cell>
      <Table.Cell collapsing>
        <Dropdown text="Check Box" />
      </Table.Cell>
      </Table.Row>
      <Table.Row>
      <Table.Cell collapsing>
       Button
    </Table.Cell>
    <Table.Cell collapsing>
      <Dropdown text="Button classes" />
    </Table.Cell>
    </Table.Row>
        </Table.Body>
      </Table>
      </div>
    </div>
  )
}

export default ClassMapper
