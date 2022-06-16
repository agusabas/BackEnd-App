import React, { Component } from 'react';
import { variables } from './Variables.js';

export class Machine extends Component {

    constructor(props) {
        super(props);

        this.state = {
            machines: [],
            modalTitle: "",
            MachineId: 0,
            MachineName: "",
            MachineClass: "",
            MachineCompany: "",
            MachineState: "",

            MachineIdFilter: "",
            MachineNameFilter: "",
            MachineClassFilter: "",
            MachineStateFilter: "",
            MachinesWithoutFilter: []
        }
    }

    FilterFunction() {
        var MachineIdFilter = this.state.MachineIdFilter;
        var MachineNameFilter = this.state.MachineNameFilter;
        var MachinesClassFilter = this.state.MachineClassFilter;
        var MachinesStateFilter = this.state.MachineStateFilter;
        var filteredData = this.state.MachinesWithoutFilter.filter(
            function (el) {
                return el.MachineId.toString().toLowerCase().includes(
                    MachineIdFilter.toString().trim().toLowerCase()
                ) &&
                    el.MachineName.toString().toLowerCase().includes(
                        MachineNameFilter.toString().trim().toLowerCase()
                    )
            }
        );

        this.setState({ machines: filteredData });

    }


    changeMachineIdFilter = (e) => {
        this.state.MachineIdFilter = e.target.value;
        this.FilterFunction();
    }
    changeMachineNameFilter = (e) => {
        this.state.MachineNameFilter = e.target.value;
        this.FilterFunction();
    }


    refreshList() {
        fetch(variables.API_URL + 'machine')
            .then(response => response.json())
            .then(data => {
                this.setState({ machines: data, MachinesWithoutFilter: data });
            });
    }

    componentDidMount() {
        this.refreshList();
    }

    changeMachineName = (e) => {
        this.setState({ MachineName: e.target.value });
    }
    changeMachineClass = (e) => {
        this.setState({ MachineClass: e.target.value });
    }
    changeMachineCompany = (e) => {
        this.setState({ MachineCompany: e.target.value });
    }
    changeMachineState = (e) => {
        this.setState({ MachineState: e.target.value });
    }

    addClick() {
        this.setState({
            modalTitle: "Añadir Máquina",
            MachineId: 0,
            MachineName: "",
            MachineClass: "",
            MachineCompany: "",
            MachineState: ""
        });
    }

    editClick(machin) {
        this.setState({
            modalTitle: "Añadir Máquina",
            MachineId: machin.MachineId,
            MachineName: machin.MachineName,
            MachineClass: machin.MachineClass,
            MachineCompany: machin.MachineCompany,
            MachineState: machin.MachineState
        });
    }

    createClick() {
        fetch(variables.API_URL + 'machine', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                MachineName: this.state.MachineName,
                MachineClass: this.state.MachineClass,
                MachineCompany: this.state.MachineCompany,
                MachineState: this.state.MachineState
            })
        })
            .then(res => res.json())
            .then((result) => {
                alert(result);
                this.refreshList();
            }, (error) => {
                alert('Failed');
            })
    }

    updateClick() {
        fetch(variables.API_URL + 'machine', {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                MachineId: this.state.MachineId,
                MachineName: this.state.MachineName,
                MachineClass: this.state.MachineClass,
                MachineCompany: this.state.MachineCompany,
                MachineState: this.state.MachineState
            })
        })
            .then(res => res.json())
            .then((result) => {
                alert(result);
                this.refreshList();
            }, (error) => {
                alert('Fallido');
            })
    }

    deleteClick(id) {
        if (window.confirm('Estás segurx de eliminar?')) {
            fetch(variables.API_URL + 'machine/' + id, {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
                .then(res => res.json())
                .then((result) => {
                    alert(result);
                    this.refreshList();
                }, (error) => {
                    alert('Error al eliminar');
                })
        }
    }


    render() {
        const {
            machines,
            modalTitle,
            MachineId,
            MachineName,
            MachineClass,
            MachineCompany,
            MachineState
        } = this.state;

        return (
            <div>
                <button type="button" className="btn btn-primary m-2 float-end" data-bs-toggle="modal" data-bs-target="#exampleModal"
                    onClick={() => this.addClick()}>
                    Añadir Máquina
                </button>
                <table className='table table-striped'>
                    <thead>
                        <tr>
                            <th>
                                <input className="form-control m-2"
                                    onChange={this.changeMachineIdFilter}
                                    placeholder="Filter" />
                                Id
                            </th>
                            <th>
                                <input className="form-control m-2"
                                    onChange={this.changeMachineNameFilter}
                                    placeholder="Filter" />
                                Nombre
                            </th>
                            <th>
                                Clase
                            </th>
                            <th>
                                Empresa
                            </th>
                            <th>
                                Estado
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {machines.map(machin =>
                            <tr key={machin.MachineId}>
                                <td>{machin.MachineId}</td>
                                <td>{machin.MachineName}</td>
                                <td>{machin.MachineClass}</td>
                                <td>{machin.MachineCompany}</td>
                                <td>{machin.MachineState}
                                    <button type="button" className="btn btn-light mr-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-toggle-off" viewBox="0 0 16 16">
                                            <path d="M11 4a4 4 0 0 1 0 8H8a4.992 4.992 0 0 0 2-4 4.992 4.992 0 0 0-2-4h3zm-6 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zM0 8a5 5 0 0 0 5 5h6a5 5 0 0 0 0-10H5a5 5 0 0 0-5 5z" />
                                        </svg>
                                    </button>
                                </td>
                                <td>
                                    <button type="button" className="btn btn-light mr-1" data-bs-toggle="modal" data-bs-target="#exampleModal"
                                        onClick={() => this.editClick(machin)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                            <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                                        </svg>
                                    </button>
                                    <button type="button" className="btn btn-light mr-1" onClick={() => this.deleteClick(machin.MachineId)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                            <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                        </svg>
                                    </button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>

                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-hidden="true">
                    <div className="modal-dialog modal-lg modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">{modalTitle}</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="close"></button>
                            </div>
                            <div className="modal-body">
                                <div className="input-group mb-3">
                                    <span className="input-group-text">MachineName</span>
                                    <input type="text" className="form-control" value={MachineName} onChange={this.changeMachineName} />
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text">MachineClass</span>
                                    <input type="text" className="form-control" value={MachineClass} onChange={this.changeMachineClass} />
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text">MachineCompany</span>
                                    <input type="text" className="form-control" value={MachineCompany} onChange={this.changeMachineCompany} />
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text">Estado</span>
                                    <input type="text" className="form-control" value={MachineState} onChange={this.changeMachineState} />
                                </div>


                                {MachineId == 0 ?
                                    <button type="button"
                                        className="btn btn-primary float-start"
                                        onClick={() => this.createClick()}
                                    >Create</button>
                                    : null}

                                {MachineId != 0 ?
                                    <button type="button"
                                        className="btn btn-primary float-start"
                                        onClick={() => this.updateClick()}
                                    >Update</button>
                                    : null}

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}