import React from 'react'
import { connect } from 'react-redux';
import Table from './styled/Table';
import Th from './styled/Th';
import Tr from './styled/Tr';
import DeleteBtn from './styled/DeleteBtn';
import Thead from './styled/Thead';
import { deleteEducation } from '../../actions/profileActions';

const DisplayEducation = ({ education, deleteEducation }) => {

    const EducationList = education.map(i => {
        return (
            <Tr key={i._id}>
                <Th>{i.school}</Th>
                <Th>{i.field}</Th>
                <Th>{i.degree}</Th>
                <Th>{i.from}</Th>
                <Th>{i.to}</Th>
                <Th><DeleteBtn onClick={() => deleteEducation(i._id)}>Delete</DeleteBtn></Th>
            </Tr>
        )
    })
    return (
        <div>
            <h4>Education:</h4>
            <Table>
                <Thead>
                    <tr>
                        <Th>School</Th>
                        <Th>Program</Th>
                        <Th>Degree</Th>
                        <Th>Date from</Th>
                        <Th>Date to</Th>
                    </tr>
                </Thead>
                <tbody>
                    {EducationList}
                </tbody>
            </Table>
        </div>
    )
}
export default connect(null, { deleteEducation })(DisplayEducation)


