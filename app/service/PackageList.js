import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../hooks/useAuth';

const PackageList = () => {
    useAuth();
    const [packages, setPackages] = useState([]);
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('Triagem');
    const [selectedPackage, setSelectedPackage] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        fetchPackages();
    }, []);

    const fetchPackages = () => {
        axios.get('http://localhost:8080/api/packages')
            .then(response => {
                setPackages(response.data);
                setErrorMessage('');
            })
            .catch(error => {
                console.error('Erro ao buscar pacotes:', error);
                setErrorMessage('Não foi possível conectar à API. Verifique se o Java/Spring esta funcionando!'); 
            });
    };

    const handleAddPackage = () => {
        const newPackage = {
            packageDescription: description,
            status: status
        };

        axios.post('http://localhost:8080/api/packages', newPackage)
            .then(() => {
                setDescription('');
                setStatus('Triagem');
                fetchPackages();
                setErrorMessage('');
            })
            .catch(error => {
                console.error('Erro ao adicionar pacote:', error);
                setErrorMessage('Não foi possível conectar à API. Verifique se o Java/Spring esta funcionando!');
            });
    };

    const handleDeletePackage = (id) => {
        axios.delete(`http://localhost:8080/api/packages/${id}`)
            .then(() => {
                fetchPackages();
                setErrorMessage('');
            })
            .catch(error => {
                console.error('Erro ao deletar pacote:', error);
                setErrorMessage('Não foi possível conectar à API. Verifique se o Java/Spring esta funcionando!');
            });
    };

    const handleUpdatePackage = () => {
        if (!selectedPackage) return;

        axios.put(`http://localhost:8080/api/packages/${selectedPackage.id}`, {
            packageDescription: description,
            status: status
        })
            .then(() => {
                setSelectedPackage(null);
                setDescription('');
                setStatus('Triagem');
                fetchPackages();
                setErrorMessage('');
            })
            .catch(error => {
                console.error('Erro ao atualizar pacote:', error);
                setErrorMessage('Não foi possível conectar à API. Verifique se o Java/Spring esta funcionando!');
            });
    };

    const handleEdit = (pkg) => {
        setSelectedPackage(pkg);
        setDescription(pkg.packageDescription);
        setStatus(pkg.status);
    };

    return (
        <div>
            <h1>Cadastro de Correspondências</h1>
            <div>
                {errorMessage && <p className="error">{errorMessage}</p>} {}
                <input
                    type="text"
                    placeholder="Descrição da Correspondência"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <select value={status} onChange={(e) => setStatus(e.target.value)}>
                    <option value="Triagem">Triagem</option>
                    <option value="Disponivel">Disponível</option>
                    <option value="Devolvido">Devolvido</option>
                </select>
                {selectedPackage ? (
                    <button onClick={handleUpdatePackage}>Atualizar Correspondência</button>
                ) : (
                    <button onClick={handleAddPackage}>Adicionar Correspondência</button>
                )}
            </div>

            <h2>Lista de Correspondências</h2>
            <ul>
                {packages.map(pkg => (
                    <li key={pkg.id}>
                        {pkg.packageDescription} - Status: {pkg.status}
                        <button className="edit" onClick={() => handleEdit(pkg)}>Editar</button>
                        <button className="delete" onClick={() => handleDeletePackage(pkg.id)}>Excluir</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PackageList;