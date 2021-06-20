import React, {useState, useEffect} from 'react'
import Menu from '../../components/Menu'

import './styles.css'
const Search = () => {
    const [ repositories, setRepositories ] = useState([])
    const [ filtroRepos, setFiltroRepos] = useState([])
    const [ busca, setBusca ] = useState('')

    useEffect(()=>{
        async function getData(){
            const response = await fetch('https://api.github.com/users/simaraconceicao/repos')
            const data = await response.json()
    
            setRepositories(data)
        }
        getData()
    
    },[])

    useEffect(()=>{
        setFiltroRepos(
            repositories.filter(repo =>{
                return repo.name.includes(busca)
            }           
            )
        )
    },[busca, repositories])

    return(
        <div>
            <Menu />
            <input 
                type="text" 
                placeholder="Digite um repo" 
                onChange={e=>{setBusca(e.target.value)}}
            />
            <ul className="repos" >{filtroRepos.map(repo=>{
                return <li className="repo" key={repo.id}>{repo.name}</li>
            })}</ul>
        </div>
    )
}

export default Search