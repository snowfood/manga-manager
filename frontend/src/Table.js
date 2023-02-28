import Table from 'react-bootstrap/Table';

function BasicTable() {
  return (
        <div className="table">
            <h1>Currently Reading</h1>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Newest Chapter</th>
                    <th>Rating</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>1</td>
                    <td>Yona</td>
                    <td>29</td>
                    <td>super hot fire</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Yona</td>
                    <td>29</td>
                    <td>super hot fire</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Yona</td>
                    <td>29</td>
                    <td>super hot fire</td>
                </tr>
                </tbody>
            </Table>
    </div>
    
  );
}

export default BasicTable;